require("dotenv").config();
const { dissoc } = require("ramda");
const pg = require("./utils");
const { config, tables } = require("./config").postgres;

const cockpit = async () => {
  await pg.createDatabase(dissoc("database", config), config.database);
  const client = pg.getClient(config);
  try {
    client.connect();
    await pg.createTables(client, tables);
    const user1 = await pg.addRow(client, tables.users.name, {
      name: "'Sean Ewitz'",
      age: 28,
      email: `'hurwitzse@gmail.com'`
    });
    console.log("\n*** ADDED USER " + user1.name);
  } catch (e) {
    throw new Error(e);
  } finally {
    client.end();
  }
};

cockpit();
