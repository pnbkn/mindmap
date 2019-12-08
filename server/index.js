const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000
const session = require('express-session');
const db = require('./db');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use('/api', require('./api'))

app.use('/dist', express.static(path.join(__dirname, '..', '/dist')));

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/styles.css', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../public/styles.css'));
})

// db.sync()
//   .then(() => {
app.listen(PORT, ()=> console.log(`kicking it on port ${PORT}`));
// });

module.exports = app
