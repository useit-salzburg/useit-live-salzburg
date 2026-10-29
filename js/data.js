
/*
  USE-IT Live — approved route and POI content.
  The Google Sheet remains the team's working source; this file is the
  static copy used by the GitHub Pages application. Coordinates are [lat, lng].
*/

const ROUTES = [
  {
    id: "local",
    name: "Act Like a Local",
    shortName: "Local",
    color: "#43865A",
    icon: "leaf",
    description: "Local favourites, everyday rituals and places to see the city differently.",
    points: [
      {
        id: "local-01", number: 1,
        name: "A Sunset on Repeat",
        lat: 47.7899172, lng: 13.0690098,
        category: "VIEWPOINT",
        tags: ["Scenic", "Sunset", "Local favourite"],
        teaser: "A riverside pause worth coming back for.",
        story: "Come for a slow walk, watch the water drift by, and enjoy a different view of Salzburg away from the crowds. Especially lovely when the light begins to soften.",
        challenge: "Stay for a few minutes and notice how the colours change. Which part of the view would you photograph?",
        nextTip: "Keep following the water to discover another side of local Salzburg."
      },
      {
        id: "local-02", number: 2,
        name: "Flow with the Water",
        lat: 47.7903807, lng: 13.0415357,
        category: "LANDMARK",
        tags: ["Water", "Nature", "Slow down"],
        teaser: "Let the water set the pace for a while.",
        story: "Almkanal is your reminder to take the slower route. Waterways and green edges offer a different rhythm from Salzburg's busy centre—ideal for a short pause, a walk and a little breathing room.",
        challenge: "Take a moment to listen. What sounds can you hear here besides the water?",
        nextTip: "Look for another place where nature interrupts the city's everyday rush."
      },
      {
        id: "local-03", number: 3,
        name: "JAZZZZ-IT",
        lat: 47.8121713, lng: 13.0417592,
        category: "CULTURAL HUB",
        tags: ["Music", "Culture", "Concerts"],
        teaser: "Find your rhythm in Salzburg's live-music scene.",
        story: "Jazzit is a tip for anyone who wants to experience Salzburg beyond its classical-music reputation. Live jazz brings people together in an intimate setting and gives the city a different soundtrack.",
        challenge: "Check what is playing or imagine your ideal live-music night. Which artist would you love to hear here?",
        nextTip: "Keep an ear out—local culture often happens away from the big stages."
      },
      {
        id: "local-04", number: 4,
        name: "Sunset Views",
        lat: 47.8387176, lng: 13.0395805,
        category: "VIEWPOINT",
        tags: ["Scenic", "Quiet", "Christmas market"],
        teaser: "A quieter view over Salzburg, with a seasonal bonus.",
        story: "Maria Plain offers wide views and a calmer atmosphere above the city. If you visit in the festive season, look out for its cosy Christmas market, a lovely reason to make the trip in winter, too.",
        challenge: "Find a spot to take in the panorama. Can you identify a familiar Salzburg landmark from up here?",
        nextTip: "There is another viewpoint closer to town with a different perspective."
      },
      {
        id: "local-05", number: 5,
        name: "Views Day & Night",
        lat: 47.801725, lng: 13.046195,
        category: "VIEWPOINT",
        tags: ["Scenic", "City view", "Day and night"],
        teaser: "See Salzburg change as the day turns into night.",
        story: "Hettwer Bastei, part of the Lodronsche Wehranlage, gives you a different angle on Salzburg and its rooftops. Visit in daylight for the details, or return after dark when the city lights change the mood.",
        challenge: "What looks different from this viewpoint compared with street level? Pick one detail you would like to remember.",
        nextTip: "You have explored Salzburg like a local, now share a favourite spot of your own."
      }
    ]
  },
  {
    id: "history",
    name: "5 Minutes of History",
    shortName: "History",
    color: "#E5BE37",
    icon: "clock",
    description: "Short stories and overlooked chapters of Salzburg's past.",
    points: [
      {
        id: "history-01", number: 1,
        name: "Mausoleum & Mozart",
        lat: 47.8045541, lng: 13.0472273,
        category: "LANDMARK",
        tags: ["Historic", "Peaceful", "Mozart"],
        teaser: "A quiet garden with a remarkable connection to Mozart.",
        story: "Hidden behind a church, St. Sebastian Cemetery offers a peaceful escape from the crowds of Linzergasse. Members of Mozart's family are buried here, making this quiet garden a small but meaningful part of Salzburg's musical history.",
        challenge: "Can you find the Mozart family graves? Take a moment to spot one detail that makes this place feel different from the busy streets outside.",
        nextTip: "Take the quieter path and keep an eye out for traces of Salzburg's past."
      },
      {
        id: "history-02", number: 2,
        name: "A Palace of Two Stories",
        lat: 47.7903807, lng: 13.0415357,
        category: "HISTORIC LANDMARK",
        tags: ["Nature", "Lake", "History"],
        teaser: "A palace, a lake and a view that feels far from the city.",
        story: "A beautiful Rococo palace by the lake,  famous for The Sound of Music, but also carrying a darker history under Nazi occupation. One of those places where you sit, have a coffee, look at the water, and realise there’s so much more to a place than what meets the eye.",
        challenge: "Look across the water towards the palace. Which details of the building or landscape catch your eye first?",
        nextTip: "Continue exploring how Salzburg's history is shaped by both people and place."
      },
      {
        id: "history-03", number: 3,
        name: "Salz-ach",
        lat: 47.8017325, lng: 13.0421736,
        category: "HISTORIC HERITAGE",
        tags: ["Landmark", "History", "Salt trade"],
        teaser: "The river that helped put Salzburg on the map.",
        story: "The Salzach is more than a scenic backdrop. Salt transported along the river helped make Salzburg prosperous and connected the city to wider trading routes. Its name itself recalls the salt trade that shaped the region.",
        challenge: "Look around the bridge for a USE-IT lock or marker. Can you find it? If you could leave one small symbol here representing Salzburg, what would it be?",
        nextTip: "Follow the city's story through the places and details that are easy to overlook."
      },
      {
        id: "history-04", number: 4,
        name: "Salzburg's Oldest Bakery",
        lat: 47.797576, lng: 13.044502,
        category: "BAKERY",
        tags: ["Bakery", "Landmark", "Bread"],
        teaser: "A taste of Salzburg's everyday history.",
        story: "Hidden beside St. Peter’s Cemetery, this centuries-old bakery has been making bread since medieval times. Follow the smell of freshly baked sourdough to its traditional wood-fired oven, with an old mill powered by the waters of the Almkanal nearby. A little piece of Salzburg that feels untouched by time.",
        challenge: "Pause and notice the details around the bakery. What do you think has changed here over the years and what might have stayed the same?",
        nextTip: "One last historical detail is waiting just around the corner."
      },
      {
        id: "history-05", number: 5,
        name: "The Stones Will Speak of You",
        lat: 47.7988596, lng: 13.0400636,
        category: "HISTORIC HERITAGE",
        tags: ["Landmark", "History", "Architecture"],
        teaser: "An old tunnel with a message carved in stone.",
        story: "The Sigmundstor, also known as the Neutor, is the oldest road tunnel in present-day Austria. Above it, the Latin inscription ‘Te saxa loquuntur’ means ‘The stones speak of you’, a compliment to the archbishop who commissioned the tunnel.",
        challenge: "Can you find the inscription above the tunnel? What kind of message would you leave for people who pass through here centuries from now?",
        nextTip: "History is all around you, sometimes it is written right into the stone."
      }
    ]
  },
  {
    id: "recommendations",
    name: "Recommendations",
    shortName: "Recommendations",
    color: "#6098D1",
    icon: "compass",
    description: "Good food, unexpected encounters and places worth passing on.",
    points: [
      {
        id: "recommendations-01", number: 1,
        name: "Cosmic Pizza",
        lat: 47.8129, lng: 13.0392,
        category: "RESTAURANT",
        tags: ["Italian", "Authentic", "Vegan-friendly"],
        teaser: "Neapolitan-style pizza with a lively soundtrack.",
        story: "Cosmic Pizza serves Neapolitan-style pizza in a relaxed setting. There are vegetarian and vegan options, making it a good stop for a casual meal with friends. You will find it on Saint-Julien-Straße near Salzburg's main station.",
        challenge: "Have a look at the menu and see which topping you would choose. What makes a pizza place worth recommending to someone else?",
        nextTip: "Next, trade the city buzz for a small wildlife surprise by the water."
      },
      {
        id: "recommendations-02", number: 2,
        name: "Pretty in Pink",
        lat: 47.7917033, lng: 13.0386121,
        category: "NATURE",
        tags: ["Lake", "Flamingos", "Unexpected"],
        teaser: "A splash of pink where you might not expect it.",
        story: "Flamingos make for an unexpected sight in Salzburg. This stop is a reminder that the city can surprise you with small encounters and unusual details, even when you think you know what to expect.",
        challenge: "Can you spot the flamingos? Watch quietly for a moment and notice how they move around their surroundings.",
        nextTip: "For another memorable stop, head up to a restaurant with a view."
      },
      {
        id: "recommendations-03", number: 3,
        name: "Alpine Hut inside the City",
        lat: 47.7998176, lng: 13.0392533,
        category: "RESTAURANT",
        tags: ["Food", "View", "Mönchsberg"],
        teaser: "A meal with a view above the rooftops.",
        story: "Set on Mönchsberg, Stadtalm pairs a casual restaurant stop with a lovely perspective over Salzburg. It is a good place to pause during a walk and enjoy the city from above.",
        challenge: "Look out over the rooftops. Which landmark can you recognise from this angle?",
        nextTip: "If you are in the mood for a relaxed café stop, there is another option nearby in the city."
      },
      {
        id: "recommendations-04", number: 4,
        name: "The Heart of Joy",
        lat: 47.807219, lng: 13.042769,
        category: "CAFÉ",
        tags: ["Vegan-friendly", "Healthy", "Café"],
        teaser: "A feel-good café stop with plant-based options.",
        story: "The Heart of Joy is a welcoming café known for wholesome food and vegan-friendly choices. Stop here for a relaxed break, something nourishing and a slower moment between city explorations.",
        challenge: "Choose a drink or dish you have never tried before. What would you recommend to a friend who likes plant-based food?",
        nextTip: "Finish with a walk uphill for a greener view of the city."
      },
      {
        id: "recommendations-05", number: 5,
        name: "The Other Hill",
        lat: 47.803805, lng: 13.0578905,
        category: "VIEWPOINT",
        tags: ["Hiking", "Scenic", "Nature"],
        teaser: "A green escape from the busy old town.",
        story: "Kapuzinerberg offers forest paths, fresh air and a different perspective on Salzburg. If you need a break from the crowds, the climb is part of the adventure and the city views are worth slowing down for.",
        challenge: "Find a spot where the city appears between the trees. What can you see from here that you might miss down in the old town?",
        nextTip: "You have reached the end of the recommendations. Share your own favourite with USE-IT!"
      }
    ]
  }
];

const SALZBURG_CENTER = [47.8075, 13.0432];
