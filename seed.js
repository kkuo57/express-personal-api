// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var destination_list = [
  {
    name: "London"
  },
  {
    name: "Paris"
  },
  {
    name: "O'ahu"
  },
  {
    name: "Maui"
  },
  {
    name: "Island of Hawai'i"
  },
  {
    name: "Kaua'i"
  },
  {
    name: "New York City"
  },
  {
    name: "Miami"
  },
  {
    name: "Orlando"
  },
  {
    name: "Chicago"
  },
  {
    name: "Indianapolis"
  },
  {
    name: "Washington D.C."
  },
  {
    name: "Tokyo"
  },
  {
    name: "Kyoto"
  }
]

db.Destination.remove({}, function(err, destinations){
  console.log("removed destinations");
    db.Destination.create(destination_list, function(err, destinations){
      if (err){
        return console.log("Error:", err);
      }
    console.log("Created all destinations")
    process.exit(); // we're all done! Exit the program.
    });
})
