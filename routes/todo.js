const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

router.get('/', (req,res,next) => {
  knex('todo').select()
  .then(todos => {
    res.render('all', {
      todos: todos
    })
  })
})

module.exports = router;
