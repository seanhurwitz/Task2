require("dotenv").config(); //Easy to work with env files. search dotenv on google for docs.
const { dissoc } = require("ramda"); //research what ramda does, particularly the dissoc function.
const pg = require("./utils"); //All my methods in a nice folder
const { config, tables } = require("./config").postgres; //Everything I need in a config file.

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
//Just have to call this function and everything gets done.
