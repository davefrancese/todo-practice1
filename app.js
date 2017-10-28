const express = require('express');
// const bodyParser = require('body-parser')
const path = require('path')

const routes = require('./routes/index')
const todo = require('./routes/todo')

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs');

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'));

app.use('/', routes)
app.use('/todo', todo)
















app.listen(port, () => {
  console.log('listening on port', port);
})
