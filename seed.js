// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var destination_list = [
  {
    name: "London",
    country: "England"
  },
  {
    name: "Paris",
    country: "France"
  },
  {
    name: "O'ahu",
    country: "USA"
  },
  {
    name: "Maui",
    country: "USA"
  },
  {
    name: "Island of Hawai'i",
    country: "USA"
  },
  {
    name: "Kaua'i",
    country: "USA"
  },
  {
    name: "New York City",
    country: "USA"
  },
  {
    name: "Miami",
    country: "USA"
  },
  {
    name: "Orlando",
    country: "USA"
  },
  {
    name: "Chicago",
    country: "USA"
  },
  {
    name: "Las Vegas",
    country: "USA"
  },
  {
    name: "Washington D.C.",
    country: "USA"
  },
  {
    name: "Tokyo",
    country: "Japan"
  },
  {
    name: "Kyoto",
    country: "Japan"
  },
  {
    name: "Osaka",
    country: "Japan"
  },
  {
    name: "Niigata",
    country: "Japan"
  },
  {
    name: "Hiroshima",
    country: "Japan"
  },
  {
    name: "Rome",
    country: "Italy"
  },
   {
    name: "Venice",
    country: "Italy"
  },
  {
    name: "Florence",
    country: "Italy"
  },
  {
    name: "Barcelona",
    country: "Spain"
  },
  {
    name: "Amsterdam",
    country: "Netherlands"
  },
  {
    name: "Berlin",
    country: "Germany"
  },
  {
    name: "Munich",
    country: "Germany"
  },
  {
    name: "Singapore",
    country: "Singapore"
  },
  {
    name: "Puerto Princesa",
    country: "Philippines"
  },
  {
    name: "Seoul",
    country: "South Korea"
  },
  {
    name: "Korean Demilitarized Zone",
    country: [
      "South Korea",
      "North Korea"
      ]
  },
  {
    name: "Hong Kong",
    country: "China"
  },
  {
    name: "Shanghai",
    country: "China"
  },
  {
    name: "Hangzhou",
    country: "China"
  },
  {
    name: "Taipei",
    country: "Taiwan"
  },
  {
    name: "Tainan",
    country: "Taiwan"
  },
  {
    name: "Kaohsiung",
    country: "Taiwan"
  }
];

var suggestion_list = [
  {
    name: "Prague",
    country: "Czech Republic"
  },
  {
    name: "Brussels",
    country: "Belgium"
  }
]

// remove all destinations
db.Destination.remove({}, function(err, destinations){
  console.log("removed destinations");
  // add destinations list
    db.Destination.create(destination_list, function(err, destinations){
      if (err){
        return console.log("Error:", err);
      }
    console.log("Created all destinations")
    });
})


// remove all suggestions
db.Suggestion.remove({}, function(err, suggestions){
  console.log("removed suggestions");
  // add suggestions list
    db.Suggestion.create(suggestion_list, function(err, suggestions){
      if (err){
        return console.log("Error:", err);
      }
    console.log("Created all suggestions")
    process.exit();
    });
})