# USE-IT Live — Salzburg

A static interactive map for the USE-IT Salzburg project, built with HTML, CSS, JavaScript and Leaflet. It can be hosted on GitHub Pages and does not need a database connection at runtime.

## Routes and content

The app contains 15 POIs across three routes, with five stops per route:

- **5 Minutes of History** — yellow
- **Act Like a Local** — green
- **Recommendations** — blue

The Google Sheet remains the team's working source. Published POI content is copied into `js/data.js`, which is loaded by `index.html` before `js/app.js`. To update a place, edit the corresponding point in `js/data.js`; each point has an ID, name, coordinates, category, tags, teaser, story, mini challenge and next-stop tip.

## Files

- `index.html` — page structure and Leaflet dependencies
- `css/style.css` — visual design and responsive layout
- `js/data.js` — all three routes and 15 POIs
- `js/app.js` — route cards, markers, popups, information panel and walking-route display
- `js/typewriter.js` — intro heading animation
- `data/` — project assets

## Run locally

Open this folder in VS Code and use a local static server (for example, the Live Server extension) to open `index.html`. The map uses external tile and routing services, so an internet connection is needed for those features.

## Publish with GitHub Pages

Commit and push the project files to the repository configured for GitHub Pages. No build step is required.

## Notes

- The app is static; it does not read the Google Sheet automatically.
- Cosmic Pizza's coordinates are approximate, based on its address at Saint-Julien-Straße 9. Please verify the pin on the map before publishing.
- The provided coordinate for **Flow with the Water / Almomat** is the same as the coordinate supplied for **Palace / Schloss Leopoldskron**. It has been preserved as provided, but should be checked against the team's sheet.
- Walking-route lines depend on the external OSRM routing service and may not load if the service is unavailable or cannot route the selected points.
# useit-live-salzburg
