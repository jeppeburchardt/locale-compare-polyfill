'use strict';

var assert = require('assert');

require('../src/locale-compare');

describe('default', function() {
  it('should order b after a', function() {
    assert('b'.localeCompare('a') === 1);
  });
});

// default
//   ✓ should order b after a
//   ✓ should order å before p
//   ✓ should order uppercase before lowercase
//   ✓ should order array
//
// localeCompare da-DK
//   ✓ should order å after p in danish
//   ✓ should order å after p in danish
//   ✓ should order array
//
// localeCompare de-DE
//   ✓ should order ß efter S
//   ✓ should order ß before t
//   ✓ should order array
