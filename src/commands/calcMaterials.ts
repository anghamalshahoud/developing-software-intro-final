import yargs = require('yargs');
import { Arguments, Argv, string } from "yargs";
import { calcHouseMaterials } from '../calculator'



export function calcMaterials(yargs: Argv): void {
    yargs.command(

        "calc-house-materials",

        "To claculte the house materials needed",

        function (yargs) {

            return yargs.options({

                width: {

                    type: 'number',
                    alias: 'w',
                    description: 'the length of the house'
                },
                length: {

                    type: 'number',
                    alias: 'l',
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
            if (args.width < 4 || args.length < 4 || args.width > 60 || args.length > 60)

                throw new RangeError('Numbers passed in must be between 4 and 60');

            const houseMaterials = calcHouseMaterials(args.width, args.length, args.name, args.isFeet)

            console.log(houseMaterials);


        }
    );
}
yargs.help().parse();