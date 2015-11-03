var convert = require('swagger-converter');
 
var resourceListing = require('./api-docs-ana/api-docs-ana.json');
 
var apiDeclarations = [
  require('./api-docs-ana/listings/log')
];
 
var swagger2Document = convert(resourceListing, apiDeclarations);
 
console.log(swagger2Document);

fs = require('fs');
fs.writeFile('docs.json', JSON.stringify(swagger2Document), function (err) {
  if (err) return console.log(err);
  console.log('i did it');
});
