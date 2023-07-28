const express = require('express');
const connectDB = require('./config/db.js');
const videoRoutes = require('./routes/videoRoutes.js');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.use(express.json())

app.use('/', videoRoutes)

connectDB

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});