/*
The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report 
(see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
You may assume the JSON data has a regular structure and hierarchy (see included sample file). 
In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, 
but child objects might not contain the same properties. In all cases, every property you encounter must be present
in the final CSV output.
You may also assume that child records in the JSON will always be in a property called `children`.
*/





// var converter = (req, res, next) => {
//   console.log('req in converter ====================', req);

//   var str = '';
//   for (var key in req.body) {
//     str += key + ',';
//   }

//   var headerStr = str.slice(0, str.length - 1);

//   var strV = '';
//   for (var key in req.body) {
//     strV += req.body[key] + ',';
//   }

//   var valueStr = strV.slice(0, strV.length - 1);

//   var csv = headerStr + "\n" + valueStr;
//   // console.log('comma separated values-----------------', csv);


//  req.csv = csv;

//   next();

// }


// module.exports = converter;