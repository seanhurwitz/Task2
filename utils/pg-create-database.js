const pgtools = require("pgtools");
//I saw that with regular pg module, you couldn't create a database and the client needed a database off the bat.
//I typed in "postgres node create database" which sent me to a stackoverflow question of the same topic
//And a comment on that was from someone who said he built a module called pgtools that does just that.
//The power of google

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
