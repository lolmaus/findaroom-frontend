import Ember from 'ember';

const {
  Route,
  RSVP
} = Ember;

export default Route.extend({
  
  // ----- Overridden methods -----
  model () {
    return RSVP.hash({
      rooms: this.store.findAll('room')
    });
  }
});
