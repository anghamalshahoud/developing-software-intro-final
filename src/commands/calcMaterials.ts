import yargs = require('yargs');
import { Arguments, Argv, string } from "yargs";



export function calcHouseMaterials(yargs: Argv): void{
yargs.command(

    "calc-house-materials",

    "To claculte the house materials needed",

    function (yargs) {

        return yargs.options({

            width: {

                type: 'number',
                alias: 'l',
                description: 'the length of the house'
            },
            length: {

                type: 'number',
                alias: 'w',
                description: 'the width of the house'
            },
            isFeet: {

                type: 'boolean',
                alias: 'i',
                description: 'are the length and width in feet? or inchs?'
            },
            name: {

                type: 'string',
                alias: 'n',
                description: 'the name of the customer'
            },

        })

    },


    function (args) {



        console.log(args);


    }
);
}
yargs.help().parse();