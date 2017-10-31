const db = require('./knex')

function addTodo(todo) {
  const todo = {
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    date: new Date()
  }
  return db('todo').insert(todo, 'id')
}

module.exports = {
  addTodo: addTodo
}
