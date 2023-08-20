


exports.seed = function(knex) {
  return knex('dummyData').del()
    .then(function () {
      return knex('dummyData').insert([
        { id: 1, column1: 'DummyData', column2: 'DummyData'},
        { id: 2, column1: 'DummyData', column2: 'DummyData'},
        { id: 3, column1: 'DummyData', column2: 'DummyData'},
        { id: 4, column1: 'DummyData', column2: 'DummyData'},
        { id: 5, column1: 'DummyData', column2: 'DummyData'},
        { id: 6, column1: 'DummyData', column2: 'DummyData'},
      ]);
    });
};
