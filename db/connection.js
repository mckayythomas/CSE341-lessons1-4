// require('dotenv').config();

// const {MongoClient} = require('mongodb')

// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */


//     const client = new MongoClient("mongodb+srv://mckayycollins:PswEzQTDabKry4oI@week1-4cluster.wqolsip.mongodb.net/?retryWrites=true&w=majority");
 

//     await client.connect();

//     // try {
//     //     // Connect to the MongoDB cluster
//     //     await client.connect();
//     //     console.log("Database connection made..!") 
//     // } catch (e) {
//     //     console.error(e);
//     // } finally {
//     //     await client.close();
        
//     // }

//     return client;
// };

// let client = main();

// main().catch(console.error);

// module.exports = client;

const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect("mongodb+srv://mckayycollins:PswEzQTDabKry4oI@week1-4cluster.wqolsip.mongodb.net/?retryWrites=true&w=majority")

};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};