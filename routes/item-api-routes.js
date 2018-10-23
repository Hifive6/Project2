var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/items", function(req, res) {
    db.Items.findAll({
    //   include: [db.Post]
    }).then(function(dbItems) {
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
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Items.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: db.Events,
        required: true
      }]
      // [db.Events]
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

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Items.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // PUT route for updating posts
  app.put("/api/items", function(req, res) {
    db.Items.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbItems) {
      res.json(dbItems);
    });
  });
};
