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
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDb = () => {
    if (!_db) {
        throw Error('Db not initialized');
    }
    return _db;
};

const getDatabase = (collection) => {
    return getDb().db(collection);
};

module.exports = {
    initDb,
    getDb,
    getDatabase
};