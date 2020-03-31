const createTables = async (client, tables) => {
  const promises = Object.values(tables).map(table => {
    console.log(`\n*** CREATING TABLE '${table.name}'`);
    const dropTableQuery = `DROP TABLE IF EXISTS ${table.name}`;
    return client.query(dropTableQuery).then(() => {
      const createTableQuery = `CREATE TABLE ${table.name} (
          ${Object.values(table.fields).map(field => {
            return field.join(" ");
          })}
            )`;
      return client.query(createTableQuery).then(() => {
        console.log(`*** CREATED TABLE '${table.name}'!`);
      });
    });
  });
  await Promise.all(promises);
};

module.exports = createTables;
