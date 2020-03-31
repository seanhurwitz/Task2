const addRow = async (client, table, data) => {
  const addRowQuery = `INSERT INTO ${table} (${Object.keys(data)})
    VALUES (${Object.values(data)}) RETURNING *`;
  const result = await client.query(addRowQuery);
  return result.rows[0];
};

module.exports = addRow;


//SIMPLE CRUD stuff, I'm not bothering doing update read and delete.