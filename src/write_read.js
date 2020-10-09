import {calcHouseMaterials} from './calculator/index'
var fs = require("fs");

var data = calcHouseMaterials;

fs.writeFile(`${__dirname}/data`, data, (err) => {
  if (err) console.log(err);
});