//import client and util to get our functionality setup
const client = require('../client')

//Create functions for each operation I want to perform :)
//GET: show a list of all of the images
async function getAllImages() {
    try {
        const { rows } = await client.query(`
            SELECT * FROM images;
        `);
        return rows;
    } catch (err) {
        throw err;
    }
}

//export our funcions
module.exports = { getAllImages }