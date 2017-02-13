// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

// hardcoded api directory
app.get('/api', function apiIndex(req, res) {
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/kkuo57/express-personal-api/blob/master/README.md",
    baseUrl: "https://shielded-journey-73469.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Info about me"},
      {method: "GET", path: "/api/destinations", description: "Places I've visited"},
      {method: "POST", path: "/api/suggestions", description: "Suggest a place to visit"},
      {method: "GET", path: "/api/suggestions", description: "Suggestions for places to visit"},
      {method: "PUT", path: "/api/suggestions", description: "Update a suggestion"},
      {method: "DELETE", path: "/api/suggestions", description: "Delete a suggestion"}
    ]
  })
});

// hardcoded profile info
app.get('/api/profile', function(req, res){
  res.json({
    name: "Kevin Kuo",
    githubLink: "https://github.com/kkuo57",
    githubProfileImage: "#",
    personalSiteLink: "https://kkuo57.github.io",
    currentCity: "Emeryville",
    favTeams: { 
      football: "San Francisco 49ers",
      basketball: "Golden State Warriors",
      baseball: "San Francisco Giants",
      hockey: "San Jose Sharks"
    }
  });
});

// to get all destinations
app.get('/api/destinations', function(req, res){
  db.Destination.find({}, function(err, destinations){
    if (err){
      res.status(500).send(err);
      return;
    }
    res.json({
      data: destinations
    });
  });
});

// find one destination by id
app.get('/api/destinations/:id', function (req, res) {
  db.Destination.findById(req.params.id, function(err, dest){
    if (err){
      res.status(500).send(err);
      return;
    }
      res.json(dest);
    });
});

// to get all the suggestions
app.get('/api/suggestions', function(req, res){
  db.Suggestion.find({}, function(err, suggestions){
    if (err){
      return console.log(err)
    }
    res.json({
      data: suggestions
    });
  });
});

// find one suggestion by id
app.get('/api/suggestions/:id', function (req, res) {
  db.Book.findById(req.params.id, function(err, sugg){
    if (err){
      res.status(500).send(err);
      return;
    }
      res.json(sugg);
  });
});

// to post a suggestion
app.post('/api/suggestions', function(req, res){
  var newSuggestion = new db.Suggestion({
    name: req.body
  });
  newSuggestion.save(function(err, suggestion){
    if (err){
      return console.log("save part error");
    }
    console.log("saved ", suggestion.name);
    res.json(suggestion);
  })
});

// to update a suggestion
app.put("/api/suggestions/:_id", function(req, res){
  var suggId = req.params._id;
  var suggData = req.body;

  db.Suggestion.findOneAndUpdate(
    {_id: suggId}, suggData, {new: true}, function(err, updatedSuggestion){
      res.send(updatedSuggestion);
  });
});

// to delete a suggestion
app.delete('/api/suggestions/:id', function(req, res){
  var suggId = req.params.id;
  db.Suggestion.findOneAndRemove({ _id: suggId }, function(err, deletedSuggestion){
    res.json(deletedSuggestion);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
