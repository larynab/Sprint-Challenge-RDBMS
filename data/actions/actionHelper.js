//Database Configuration Settings
const db = require("../dbConfig.js");

//Global Mapping functions
const mappers = require("../global-helper/mappers");

//exporting helper functions
module.exports = {
  get: function(id) {
    let query = db("actions");

    if (id) {
      return query
        .where("id", id)
        .first()
        .then(action => mappers.actionToBody(action));
    }

    return query.then(actions => {
      return actions.map(action => mappers.actionToBody(action));
    });
  },
  insert: function(action) {
    return db("actions")
      .insert(action)
      .then(([id]) => this.get(id));
  }
};
