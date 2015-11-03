var convert = require('swagger-converter');
 
var resourceListing = require('./api-docs/api-docs.json');
 
var apiDeclarations = [
  require('./api-docs/listings/analysis'),
  require('./api-docs/listings/apps'),
  require('./api-docs/listings/batch'),
  require('./api-docs/listings/data'),
  require('./api-docs/listings/health'),
  require('./api-docs/listings/lists'),
  require('./api-docs/listings/message'),
  require('./api-docs/listings/scores'),
  require('./api-docs/listings/tmpdata'),
  require('./api-docs/listings/tokens'),
  require('./api-docs/listings/users')
];
 
var swagger2Document = convert(resourceListing, apiDeclarations);
 
console.log(swagger2Document);

fs = require('fs');
fs.writeFile('docs.json', JSON.stringify(swagger2Document), function (err) {
  if (err) return console.log(err);
  console.log('i did it');
});
