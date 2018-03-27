var excel2Json = require('../../../node_modules/node-excel-to-json');
 
excel2Json('by19cpictables.xlsx', function(err, output) {

console.log(output);
console.log(err);
 
});
 
excel2Json('by19cpictables.xlsx', {
    'convert_all_sheet': true,
    'return_type': 'File',
}, function(err, output) {

console.log(output)
console.log(err);
 
});
