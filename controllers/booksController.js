const db = require("../models");

module.exports = {
    // findAll(req, res) {
    //     console.log("stuff")
    //     db.Book
    //         .find(req.query)
    //         .sort({ date: -1 })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // }
    findAll: function(req, res) {
        db.Book
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}