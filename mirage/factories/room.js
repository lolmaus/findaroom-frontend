import { Factory } from 'ember-cli-mirage';
import _           from 'npm:lodash';

export default Factory.extend({
  name:  undefined,
  status () { return _(['free', 'busy', 'maybe']).sample(); }
});
