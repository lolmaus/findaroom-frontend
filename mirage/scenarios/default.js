export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  server.create('room', {id: '1', name: '1'});
  server.create('room', {id: '2', name: '2'});
  server.create('room', {id: '3', name: '3'});
}
