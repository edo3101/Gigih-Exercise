const mongoose = require('mongoose');
const dbURI = 'mongodb://0.0.0.0:27017/tokopedia_play'; // Replace with your MongoDB URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database.');
});