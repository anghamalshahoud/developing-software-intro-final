
import yargs = require('yargs');
import {calcHouseMaterials} from './commands/calcMaterials'
import {getHouseMaterials} from './commands/getMaterials'

calcHouseMaterials(yargs);
getHouseMaterials(yargs)

yargs.help();
yargs.parse();