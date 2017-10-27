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
* above app.listen -
``` javascript
app.get('/', (req,res) => {
  res.render('index')
})
```






















.
