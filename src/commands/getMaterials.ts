import yargs = require("yargs");
import { Arguments, Argv, string } from "yargs";
import { getHouseMaterials } from '../calculator/index';




export function getMaterials(yargs: Argv): void {
    yargs.command(
        "get-house-materials",

        "To get the house materials that already calculated for a customer by thier name",

        function (yargs) {
            return yargs.options({
                name: {
                    type: "string",
                    alias: "n",
                    description: "the name of the customer you want to recall",
                },
            });
        },

        function (args) {

            const getCustomer = getHouseMaterials(args.name)



            console.log(getCustomer);
        }
    );
}
yargs.help().parse();
