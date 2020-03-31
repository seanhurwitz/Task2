const { Client } = require("pg");

const getClient = config => {
  console.log("\n*** Getting Client...");
  const client = new Client(config);
  console.log("*** Configured Client!");
  return client;
};

module.exports = getClient;
