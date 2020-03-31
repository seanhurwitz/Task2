const config = {
  postgres: {
    config: {
      host: process.env.PGHOST,
      user: process.env.PGUSER,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT
    },
    tables: {
      users: {
        name: "users",
        fields: {
          name: ["name", "varchar(250)"],
          age: ["age", "INT"],
          email: ["email", "varchar(250)", "PRIMARY KEY"]
        }
      }
    }
  }
};

module.exports = config;
