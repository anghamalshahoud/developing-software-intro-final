
import yargs = require('yargs');
import {calcMaterials} from './commands/calcMaterials'
import {getMaterials} from './commands/getMaterials'

calcMaterials(yargs);
getMaterials(yargs)

yargs.help();
yargs.parse();

