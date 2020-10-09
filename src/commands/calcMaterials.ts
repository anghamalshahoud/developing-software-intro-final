import yargs = require('yargs');
import { Arguments, Argv, string } from "yargs";
import { calcHouseMaterials } from '../calculator';
import { Houses } from '../houses/houses'




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
                    alias: 'f',
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
            if (args.width < 48 || args.length < 48 || args.width > 720 || args.length > 720)

                throw new RangeError('Numbers passed in must be between 48 and 720');

            const houseMaterials = calcHouseMaterials(args.width, args.length, args.name, args.isFeet)


            const house = Houses.create(args.name)
            house.name = houseMaterials.name
            house.width = houseMaterials.housewidth
            house.length = houseMaterials.houselength




            console.log(house);


        }
    );
}
yargs.help().parse();