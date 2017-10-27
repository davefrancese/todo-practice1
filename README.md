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

























.
