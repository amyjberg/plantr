const {db, Gardener, Plot, Vegetable}= require('./model.js');


db.sync({force: false})
  .then( () => {
    console.log('*****database synced');

    // seed data
    const carrots = Vegetable.create({name: 'carrots', color: 'orange'});
    const onions = Vegetable.create({name: 'onions', color: 'white'});


    return Promise.all([carrots, onions, joe])
    .then( values => {
      console.log(values);
    });

  }).
  .then( () => {
    db.close();
  })
  .catch( error => {
    console.log('*****', error);
    db.close();
  });

