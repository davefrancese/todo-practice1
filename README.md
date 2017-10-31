# Full CRUD app with notes to build yourself

#### make a new directory
#### set up on gitHub (git init, etc.)
#### get express running
* npm init (this sets up your json file)
* npm install --save express hbs knex pg
#### add .gitignore file to main directory | open atom
* in your new .gitignore file, type node_modules and save to hide from github
#### add app.js file to main directory
* this is the hub of your app
* in app.js
``` javascript
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('listening on port', port);
})
```
- express should now be running
- in CLI run nodemon
- CLI should respond with "listening on port 3000"
- in a new browser tab url - http://localhost:3000/
- browser should read "cannot GET /"

#### Set up Handlebars
* in main directory mkdir views
* inside views touch index.hbs
* in app.js set the views folder as the view engine and set to hbs
``` javascript
app.set('view engine', 'hbs');
```
* render index.hbs in the browser (assuming you put some html content in index.hbs)
* in app.js above app.listen -
``` javascript
app.get('/', (req,res) => {
  res.render('index')
})
```
* Handlebars (hbs) is now running
* app.js should look like this -
``` javascript
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');

app.get('/', (req,res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log('listening on port', port);
})
```

#### Knex - creating a database
* in terminal run knex init - this adds a knexfile.js in the main directory
* in knexfile.js, under development, client:'pg' - this initiates postgres as client
* under development, connection: { host: 'localhost', database: 'name_of_your_database'}
* in terminal create the database - createdb name_of_your_database

#### Migrate the database with Tables
* for each table you want in your database do the following
* in terminal - knex migrate:make name_of_table
* find new migrations folder in main directory. open file to find exports.up / exports.down
``` javascript
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('name_of_table', (table) => {
      table.increments() // column 1: the table id's (mandatory)
      table.string('column_name') // ex. column 2
      table.text('column_name') // ex. column 3 ...etc
      table.integer('column_name')
      table.boolean('column_name')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('name_of_table')
  ])
};
```
* in terminal run - knex migrate:latest
* **note** if changes are made to this file run - knex migrate:rollback and then knex migrate:latest again to get changes made.

#### Seed the table with data
* in the terminal run - knex seed:make name_of_table
* find seed folder in main directory and open seed file
``` javascript
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
```
* in terminal run - knex seed:run
* check database in terminal, run - psql name_of_your_database
* to see of your database run - \dt
* to see your table run - select * from name_of_table

#### Create a route
* mkdir routes in main directory
* touch index.js
* in index.js
``` javascript
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('index', {
    title: 'tite_of_your_page'
  })
})

module.exports = router;
```
* to use this route we must require it and use it in app.js
``` javascript
const routes = require('./routes/index')

//to use routes
app.use('/', routes)
```
* in your handlebars page - index.hbs
``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{title}}</title>
  </head>
  <body>
    <h1>Welcome to {{title}}</h1>
  </body>
</html>
```

#### Connect Database with Knex
* in the main directory mkdir db
* touch knex.js
* in knex.js
``` javascript
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment]

module.exports = require('knex')(config)
```
* use this connection in your index.js
``` javascript
const knex = require('../db/knex')
```



[Video Reference](https://www.youtube.com/watch?v=WYa47JkZH_U)

* left off at 17:00





















.
