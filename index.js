console.log('main program started');

import('./thirdParty/sample.js').then(module => {
  console.log('module.default: ', module.default);
  module.default(1,2);
})