var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GETs all items listed in ITEMS table and includes corresponding events
  app.get("/api/items", function(req, res) {
    db.Items.findAll({
<<<<<<< HEAD
      where: query,
      include: [{
        model: db.Events,
      required:true
    }]
=======
      include: [db.Events]
>>>>>>> 457138437640a419b477435db98e64b98c9ffd05
    }).then(function(dbItems) {
      console.log (dbItems)
      res.json(dbItems);
    });
  });


  // GET route for getting all of the items
  // app.get("/api/items", function(req, res) {
  //   // var query = {};
  //   // if (req.query.event_id) {
  //   //   query.EventId = req.query.event_id;
  //   // }
  //   // Here we add an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Author
  //   db.Items.findAll({
  //     // where: req.event_id,
  //     include: [{
  //       model: db.Events,
  //       required: true
  //     }]
  //   }).then(function(dbItems) {

  //     res.json(dbItems);
  //   });
  // });

  // Get route for retrieving a single post
  app.get("/api/items/:id", function(req, res) {
    db.Items.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: db.Events,
        // required: true
      }]
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // POST route for saving a new post
  app.post("/api/items", function(req, res) {
    console.log(req.body)
    db.Items.create(req.body).then(function(dbItems) {
      res.json(dbItems);
    });
  });
};
