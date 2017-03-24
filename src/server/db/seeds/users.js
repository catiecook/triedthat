(() => {

  const bcrypt = require('bcryptjs');

  exports.seed = (knex, Promise) => {
    return knex('users').del()
    .then(() => {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('goldfish1', salt);
      return Promise.join(
        knex('users').insert({
          username: 'catie',
          password: hash,
        })     // eslint-disable-line comma-dangle
      );
    });
  };

})();
