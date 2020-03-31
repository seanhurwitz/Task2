const { Client } = require('pg')

const connectionString = process.env.CONNECTION_STRING

const client = new Client ({
    connectionString: connectionString
    
})

client.connect()
.then(() => console.log("connected successfuly"))
//.then(() => client.query("insert into users values ($1, $2, $3)", ['Rob', 37, 'clean'])) //insert  a user
// .then(()=> client.query("delete from users where task = 'bake'"))   //delete user
// .then(()=> client.query("update users set task ='code' where name= 'Rob'"))   //update user
.then(() => client.query("select * from users"))//view the whole table
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())

