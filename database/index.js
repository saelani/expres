// (1) import package mongoose
const mongoose = require('mongoose');

// (2) kita import konfigurasi terkait MongoDB dari `app/config.js`
const { dbHost, dbName, dbPort, dbUser, dbPass } = require('../app/config');

// (3) connect ke MongoDB menggunakan konfigurasi yang telah kita import 
//mongodb+srv://saelani:<password>
//@cluster0.llapuef.mongodb.net/?retryWrites=true&w=majority

mongoose
  .connect(`mongodb://${dbUser}:${dbPass}@${dbHost}/${dbName}?authSource=homestore`, 
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

// mongoose
// .connect(`mongodb+srv://saelani:@Bandung1@cluster0.llapuef.mongodb.net/homestore?retryWrites=true&w=majority`,
// {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});


// (4) simpan koneksi dalam constant `db`
const db =
  mongoose.connection;

// (5) export `db` supaya bisa digunakan oleh file lain yang membutuhkan
module.exports = db;

