
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        {
          id: 1,
          title: 'Walk the dogs',
          priority: 2,
          date: new Date()
        },
        {
          id: 2,
          title: 'Get groceries',
          priority: 4,
          date: new Date()
        },
        {
          id: 3,
          title: 'Get oil changed',
          priority: 5,
          date: new Date()
        }
      ]);
    });
};
