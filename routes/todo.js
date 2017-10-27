const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

router.get('/', (req,res,next) => {
  res.render('index', {
    title: 'TODO'
  })
})

module.exports = router;
