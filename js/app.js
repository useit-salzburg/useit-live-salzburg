
const map = L.map("map", {
  scrollWheelZoom: false
}).setView(SALZBURG_CENTER, 14);

L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}", 
    {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
}
).addTo(map);


const routeList = document.getElementById("route-list");
const poiContent = document.getElementById("poi-content");
const mapTitle = document.getElementById("map-title");

let activeRouteId = ROUTES[0].id;
let showAllRoutes = false;

const markerLayer = L.layerGroup().addTo(map);
const routeLayer = L.layerGroup().addTo(map);

const routeById = (id) => ROUTES.find(route => route.id === id);

function getAllPoints() {
  return ROUTES.flatMap(route =>
    route.points.map(point => ({ ...point, route }))
  );
}

function getPointById(id) {
  return getAllPoints().find(point => point.id === id);
}

function getActivePoints() {
  return showAllRoutes
    ? getAllPoints()
    : routeById(activeRouteId).points.map(point => ({
        ...point,
        route: routeById(activeRouteId)
      }));
}

function iconFor(route, number) {
  const darkText = route.id === "history" ? "#222222" : "#FFFFFF";

  return L.divIcon({
    className: "useit-marker-wrapper",
    html: `
      <span style="
        display:grid;
        place-items:center;
        width:34px;
        height:34px;
        border:3px solid white;
        border-radius:50%;
        background:${route.color};
        color:${darkText};
        box-shadow:0 2px 9px #0003;
        font-family:Arial,sans-serif;
        font-size:13px;
        font-weight:700;
      ">${number}</span>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });
}

function renderRouteCards() {
  routeList.innerHTML = ROUTES.map(route => `
    <button
      type="button"
      class="route-card ${route.id === activeRouteId && !showAllRoutes ? "active" : ""}"
      data-route="${route.id}"
      style="
        --route-color:${route.color};
        --route-tint:${route.id === "history" ? "#FBF4D7" : route.id === "local" ? "#E8F1E9" : "#E7F0F9"};
        --icon-ink:${route.id === "history" ? "#222222" : "#FFFFFF"};
      "
      aria-pressed="${route.id === activeRouteId && !showAllRoutes}"
    >
      
<span class="route-icon" aria-hidden="true">
  <img
    class="route-svg"
    src="data/${route.id === "recommendations" ? "recommendation" : route.id}.svg"
    alt=""
  >
</span>

      <span>
        <h3>${route.name}</h3>
        <p>${route.description}</p>
      </span>
      <span class="route-meta">5 STOPS · EXPLORE THE CITY </span>
    </button>
  `).join("");

  routeList.querySelectorAll("[data-route]").forEach(button => {
    button.addEventListener("click", () => {
      selectRoute(button.dataset.route);
    });
  });
}

function renderMarkers() {
  markerLayer.clearLayers();

  getActivePoints().forEach(point => {
    const marker = L.marker([point.lat, point.lng], {
      icon: iconFor(point.route, point.number),
      title: point.name,
      alt: `${point.route.name}: ${point.name}`
    }).addTo(markerLayer);

    marker.bindPopup(`
      <strong>${point.name}</strong><br>
      ${point.route.name}<br>
      <button type="button" onclick="openPoint('${point.id}', true)">
        Discover this point →
      </button>
    `);

    marker.on("click", () => {
      renderPointPanel(point);
    });
  });
}

function renderPointPanel(point) {
  poiContent.style.setProperty("--route-tint",
    point.route.id === "history" ? "#FBF4D7" :
    point.route.id === "local" ? "#E8F1E9" : "#E7F0F9"
  );

  const index = point.route.points.findIndex(p => p.id === point.id);
  const previous = point.route.points[index - 1];
  const next = point.route.points[index + 1];

  poiContent.innerHTML = `
    <span class="poi-category">${point.category}</span>
    <p class="eyebrow" style="margin-top:18px">
      ${point.route.name} · STOP ${point.number}/5
    </p>
    <h3>${point.name}</h3>
    <p>${point.teaser}</p>
    <p>${point.story}</p>

    <div class="challenge">
      <strong><svg class="star-icon" viewBox="0 0 100 100" aria-hidden="true"><use href="#brand-star"></use></svg>Your mini challenge</strong>
      <p>${point.challenge}</p>
    </div>

    <p class="next-tip">${point.nextTip}</p>

    <div class="route-navigation">
      ${previous ? `
        <button type="button" data-nav="${previous.id}">
          Previous
        </button>` : ""}
      ${next ? `
        <button type="button" data-nav="${next.id}">
          Next stop
        </button>` : ""}
      <button type="button" data-open-route="${point.route.id}">
        View Full Trail
      </button>
      ${!next ? `
        <a
          class="route-share"
          href="https://arcg.is/14qSXb6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pin It!
        </a>` : ""}
    </div>
  `;

  poiContent.querySelectorAll("[data-nav]").forEach(button => {
    button.addEventListener("click", () => {
      openPoint(button.dataset.nav, true);
    });
  });

  poiContent.querySelector("[data-open-route]").addEventListener("click", () => {
    selectRoute(point.route.id);
  });
}

function openPoint(id, moveMap = false) {
  const point = getPointById(id);
  if (!point) return;

  activeRouteId = point.route.id;
  showAllRoutes = false;

  renderRouteCards();
  renderMarkers();
  renderPointPanel(point);

  mapTitle.textContent = point.route.name;

  if (moveMap) {
    map.flyTo([point.lat, point.lng], 16, { duration: 0.5 });
  }

  markerLayer.eachLayer(marker => {
    const position = marker.getLatLng();
    if (
      Math.abs(position.lat - point.lat) < 0.000001 &&
      Math.abs(position.lng - point.lng) < 0.000001
    ) {
      marker.openPopup();
    }
  });
}

async function drawWalkingRoute(route) {
  routeLayer.clearLayers();

  const coordinates = route.points
    .map(point => `${point.lng},${point.lat}`)
    .join(";");

  const url =
    `https://router.project-osrm.org/route/v1/foot/${coordinates}` +
    `?overview=full&geometries=geojson&steps=false`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Routing service unavailable");
    }

    const data = await response.json();

    if (data.code !== "Ok" || !data.routes?.length) {
      throw new Error("No route found");
    }

    const line = L.geoJSON(data.routes[0].geometry, {
      style: {
        color: route.color,
        weight: 5,
        opacity: 0.85
      }
    }).addTo(routeLayer);

    line.bringToBack();
  } catch (error) {
    console.warn("Walking route could not be loaded:", error);
    mapTitle.textContent = `${route.name} · Route line unavailable`;
  }
}

function selectRoute(routeId) {
  if (!routeById(routeId)) return;

  activeRouteId = routeId;
  showAllRoutes = false;

  const route = routeById(routeId);

  mapTitle.textContent = route.name;
  renderRouteCards();
  renderMarkers();

  poiContent.innerHTML = `
    <span class="poi-category">${route.name}</span>
    <p class="eyebrow" style="margin-top:18px">YOUR ADVENTURE</p>
    <h3>Five stops. A different side of Salzburg.</h3>
    <p>${route.description}</p>
    <p>Choose a numbered point on the map to discover its story and mini challenge.</p>
  `;

  drawWalkingRoute(route);

  const bounds = L.latLngBounds(
    route.points.map(point => [point.lat, point.lng])
  );
  map.fitBounds(bounds, { padding: [35, 35], maxZoom: 15 });
}

function showAll() {
  showAllRoutes = true;

  routeLayer.clearLayers();
  mapTitle.textContent = "All 15 discoveries";

  renderRouteCards();
  renderMarkers();

  poiContent.innerHTML = `
    <p class="eyebrow">15 PLACES · 3 WAYS TO EXPLORE</p>
    <h3>Choose your own adventure.</h3>
    
    <ul class="map-legend">
      <li>
        <span class="legend-dot legend-green"></span>
        <span><strong>Act Like a Local</strong>: Places to experience Salzburg like a local.</span>
      </li>
      <li>
        <span class="legend-dot legend-yellow"></span>
        <span><strong>5 Minutes of History</strong>: Stories and hidden details from Salzburg's past.</span>
      </li>
      <li>
        <span class="legend-dot legend-blue"></span>
        <span><strong>Recommendations</strong>: Places worth discovering along the way.</span>
      </li>
    </ul>

    <p>Select any marker to learn more about that place.</p>
  `;

  const points = getAllPoints();
  map.fitBounds(
    L.latLngBounds(points.map(p => [p.lat, p.lng])),
    { padding: [30, 30], maxZoom: 14 }
  );
}

document.getElementById("show-all").addEventListener("click", showAll);

// A QR code can open a specific point using ?poi=history-01.
// A route can be preselected using ?route=recommendations.
const params = new URLSearchParams(window.location.search);
const requestedPoint = params.get("poi");
const requestedRoute = params.get("route");

renderRouteCards();
renderMarkers();

if (requestedPoint && getPointById(requestedPoint)) {
  openPoint(requestedPoint, false);
} else if (requestedRoute && routeById(requestedRoute)) {
  selectRoute(requestedRoute);
} else {
  selectRoute(ROUTES[0].id);
}

// Leaflet sometimes needs a size refresh after responsive layout changes.
window.addEventListener("load", () => map.invalidateSize());
window.addEventListener("resize", () => map.invalidateSize());

const poiPanel = document.querySelector(".poi-panel");
const mapLayout = document.querySelector(".map-layout");
const poiPanelObserver = new ResizeObserver(() => {
  mapLayout.style.setProperty(
    "--poi-panel-height",
    `${poiPanel.getBoundingClientRect().height}px`
  );
  requestAnimationFrame(() => map.invalidateSize({ pan: false }));
});

poiPanelObserver.observe(poiPanel);
