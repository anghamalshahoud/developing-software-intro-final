
import yargs = require('yargs');
import {calcHouseMaterials} from '../src/commands/calcMaterials'
import {getHouseMaterials} from '../src/commands/getMaterials'

calcHouseMaterials(yargs);
getHouseMaterials(yargs)

yargs.help();
yargs.parse();