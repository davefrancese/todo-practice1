const express = require('express');
const path = require('path')
//const logger = require('morgan')
//const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes/index')
const todo = require('./routes/todo')
const queries = require('./db/queries')

const app = express();
const port = process.env.PORT || 3000;

app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs');

const hbs = require('hbs');

hbs.registerHelper('select', function(selected, options) {
  return options.fn(this).replace(
    new RegExp('value=\"' + selected + '\"'),
    '$& selected="selected"');
})

//app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'));

//app.use(cookieParser())

app.use('/', routes)
app.use('/todo', todo)
















app.listen(port, () => {
  console.log('listening on port', port);
})
