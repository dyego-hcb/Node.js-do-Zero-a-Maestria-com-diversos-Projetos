const mongoose = require('mongoose');

async function main()
{
    await mongoose.connect('mongodb://localhost:27017/testemongoose');
    console.log('Connect on MongoDB using Mongoose !');
}

main().catch((err) => console.log(err));

module.exports = mongoose;