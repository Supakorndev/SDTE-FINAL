const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Rping:rping555@cluster0.8brfw.mongodb.net/test";
const client = new MongoClient(uri);

module.exports = client;