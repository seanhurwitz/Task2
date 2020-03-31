const pgtools = require("pgtools");

const createDatabase = async (config, dbName) => {
  try {
    console.log(`\n*** CREATING DB ${dbName}...`);
    await pgtools.createdb(config, dbName);
    console.log(`*** CREATED ${dbName}!`);
  } catch (e) {
    console.log(`*** ${dbName} ALREADY EXISTS.`);
  }
};

module.exports = createDatabase;
