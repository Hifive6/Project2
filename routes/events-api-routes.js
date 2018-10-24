var db = require("../models");

module.exports = function(app) {

  // Display ALL events with items
  app.get("/api/events", function(req, res) {
    db.Events.findAll({
      include: [db.Items]
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  // Find specific event with search button
  app.get("/api/events/:id", function(req, res) {
    db.Events.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvents) {
      console.log(dbEvents)
      res.render("event")
      res.json(dbEvents);
      
    });
  });

  // Find specific event with corresponding pin
  app.get("/api/events/:id/:pin", function(req, res) {
    db.Events.findOne({
      where: {
       id: req.params.id,
        pin: req.params.pin
      },
      include: [db.Items]
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  <div class="title elegantshadow" ><h4>Welcome to the Main Event</h4></div>

  // Create a new event
  app.post("/api/newEvent", function(req, res) {
    console.log(req.body);
    db.Events.create(req.body).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  

  // Delete an event by id
  // app.delete("/api/authors/:id", function(req, res) {
  //   db.Events.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbEvents) {
  //     res.json(dbEvents);
  //   });
  // });

};
