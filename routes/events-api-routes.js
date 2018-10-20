var db = require("../models");

module.exports = function(app) {
    // Grab All Events
  app.get("/api/events", function(req, res) {
    db.Events.findAll({
    //   include: [db.Post]
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  // Find specific event with search button
  app.get("/api/events/:id", function(req, res) {
    db.Events.findOne({
      where: {
        id: req.params.id
      },
      // include: [db.Post]
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  app.get("/api/events/:id/:pin", function(req, res) {
    db.Events.findOne({
      where: {
       id: req.params.id,
        pin: req.params.pin
      },
      // include: [db.Post]
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

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
