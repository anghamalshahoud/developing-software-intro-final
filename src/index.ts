
import yargs = require('yargs');
import {calcMaterials} from './commands/calcMaterials'
import {getMaterials} from './commands/getMaterials'
import {CalcMaterials} from './calculator/index'
import {clacWaste} from './calculator/index'







calcMaterials(yargs);
getMaterials(yargs)

yargs.help();
yargs.parse();



export function calcPurchase(width:number, length:number){
   
    const Materials = CalcMaterials(width, length);
    const extra = clacWaste(width,length)
   
    return{
        Purchase:{
            lumber:{
                '2x4': Materials.materials["2x4"] + extra.Waste.lumber["2x4"],
                '4x4': Materials.materials["4x4"] + extra.Waste.lumber["4x4"]
            },
            Drywall:{
                '4x8': Materials.materials.dryWall["4x8"] + extra.Waste.Drywall["4x8"],
            },
            plywood:{
                '4x8': Materials.materials.Playwood["4x8"] + extra.Waste.Plywood["4x8"]
            }

        }
    }
}

const hello = calcPurchase(103,103)
console.log(hello);