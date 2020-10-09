
import { number } from 'yargs';
import yargs = require('yargs');
import { getHouseMaterials } from './calculator';
import {calcMaterials} from './commands/calcMaterials'
import {getMaterials} from './commands/getMaterials'
var fs = require("fs");







calcMaterials(yargs);
getMaterials(yargs)

yargs.help();
yargs.parse();


