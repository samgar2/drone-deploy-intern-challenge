//Require client from pg
const { Client } = require('pg')

//Establishing the connection to the database 
const client = new Client(`https://localhost:54321/samanthagarabedian`)

//export for use in other files
module.exports = client