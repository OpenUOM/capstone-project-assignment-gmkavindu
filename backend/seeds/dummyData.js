exports.seed = function(knex) {
  return knex('dummyData').del()
    .then(function () {
      return knex('dummyData').insert([
        { id: 0o00001, dummyDataOne: 'DummyData', dummyDataOne: 'DummyData'},
        { id: 0o00002, dummyDataOne: 'DummyData', dummyDataOne: 'DummyData'},
        { id: 0o00003, dummyDataOne: 'DummyData', dummyDataOne: 'DummyData'},
        { id: 0o00004, dummyDataOne: 'DummyData', dummyDataOne: 'DummyData'},
        { id: 0o00005, dummyDataOne: 'DummyData', dummyDataOne: 'DummyData'},
        { id: 0o00006, dummyDataOne: 'DummyData', dummyDataOne: 'DummyData'},
      ]);
    });
};


