const express = require('express');
// const bodyParser = require('body-parser')

const routes = require('./routes/index')
const todo = require('./routes/todo')

const app = express();
const port = 3000;

app.set('view engine', 'hbs');

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false}))

app.use('/', routes)
app.use('/todo', todo)
















app.listen(port, () => {
  console.log('listening on port', port);
})
