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

























.
