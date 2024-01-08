const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/testemongodb"

const client = new MongoClient(uri);

async function run()
{
    try{
        await client.connect();

        console.log("Connection on MongoDB with sucess");
    }catch(err)
    {
        console.log(err);
    }
}

run();

module.exports = client;