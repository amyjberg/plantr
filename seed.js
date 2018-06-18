const {db, Gardener, Plot, Vegetable}= require('./model.js');


db.sync({force: false})
  .then( () => {
    // create vegetables
  })
  .then( () => {
    // use vegetables-promise returned in previous then to make gardeners
  })
  .then( () => {
    // use gardeners to create plots
  })
  .then( () => {
    // use evertying to connect ids
  })
  .then( () => {
    console.log('** database synced! **');
  })
  .catch( error => {
    console.log('Uh oh!', error);
  })
  .finally( () => {
    db.close();
  });

