//Database creator

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/projects-actions.sqlite3"
    },
    useNullAsDefault: true, // needed for sqlite
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    // by default SQLite will not enforce foreign keys
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done); // enforce FK
      }
    }
  }
};
