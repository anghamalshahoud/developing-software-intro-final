import { Func } from "mocha";

export function calcHouseMaterials(width: number, length: number, name: string, unit: boolean) {

    const housewidth = unit ? (width / 12) : width;
    const houselength = unit ? (length / 12) : length;
    // outside area
    const outsideWallArea = ((housewidth * 2) + (houselength * 2)) * (houselength - (postsWidth * 2))
    // inside area
    const insideWallArea = ((housewidth - (postsWidth * 2)) * (houselength - (postsWidth * 2))) * 4;

    // ceiling area
    const ceilingArea = (housewidth - (postsWidth * 2)) * (houselength - (postsWidth * 2))

    const Materials = CalcMaterials(housewidth, houselength)
    const Waste = clacWaste(housewidth, houselength)
    const purchase = calcPurchase(housewidth, houselength)


    return {
        name, housewidth, houselength, outsideWallArea, insideWallArea, ceilingArea,
        Materials: Materials.materials,

        Waste: Waste.Waste,
        purchase: purchase.Purchase

    }
}


export const getHouseMaterials = (name: string) => {
    let customerName = name;
    return customerName;
};

const postsWidth = 3.5;
const BoardLength = 8 * 12;
const spaceApart = 16;
const DryWall = 32;
const plyWood = 32
// Posts are required every 20 feet at minimum
const Posts_requiered_everyInches = 20 * 12;
const FullBoardInSection = Math.floor(Posts_requiered_everyInches / BoardLength);
const FullBoardSectionSize = FullBoardInSection * BoardLength;


export function calcWallLumber(inches: number) {





    // calculate for posts

    const wallLengthOverMinRequired = Math.max(inches - Posts_requiered_everyInches, 0);
    const wallLengthPlusPost = Posts_requiered_everyInches + postsWidth;
    const wholeNumber = Math.ceil(wallLengthOverMinRequired);
    const isPostRequired = (Math.min(wholeNumber, 1));
    const requiredPosts = (Math.ceil(wallLengthOverMinRequired / wallLengthPlusPost)) + 4 + isPostRequired;


    // calculate for studs

    const innerWallWidth = inches - (postsWidth * 2)
    const Studs = (Math.ceil(innerWallWidth / spaceApart)) * 2;

    // top and bottom plates

    let fullSectionBoard = Math.ceil(inches / FullBoardSectionSize) * 2
    let plates = Math.ceil(inches / BoardLength) * 2;

    // calc for waste

    const Posts_with_waste = Math.ceil(requiredPosts * 0.1);
    const Studs_with_waste = (Math.ceil(Studs * 0.1));
    const Plates_with_waste = (Math.ceil(plates * 0.1));
    



    return {




        Posts: requiredPosts,
        studs: Studs,
        Plates: plates,



    }

}


export function calcDrywall(width: number, length: number) {
    // width and length here are in feet
    const wall1_4 = Math.floor((width / 12) * (length / 12)) * 4
    const ceilingAreainFeet = Math.floor((width / 12) * (length / 12))
    const drywall = Math.floor((wall1_4 + ceilingAreainFeet) / DryWall);
    return drywall

}

export function calcPlywood(width: number, length: number) {
    // width and length here are in feet
    const plywood_needed = (Math.ceil(((width / 12) * (length / 12)) / plyWood)) * 3;
    return plywood_needed
}

export function CalcMaterials(width: number, length: number) {

    const inches = width + length
    const materials = calcWallLumber(inches);
    const housewidth = width
    const houselength = length

    const DryWall = calcDrywall(housewidth, housewidth);
    const Plywood = calcPlywood(housewidth, houselength)

    return {
        materials: {
            '2x4': materials.studs + materials.Plates,
            '4x4': materials.Posts,
            dryWall: {
                '4x8': DryWall
            },
            Playwood: {
                '4x8': Plywood

            }

        }
    }



}


export function clacWaste(length: number, width: number) {
    const waste = CalcMaterials(width, length);

    return {
        Waste: {
            lumber: {
                '2x4': Math.ceil(waste.materials["2x4"] * 0.1),
                '4x4': Math.ceil(waste.materials["4x4"] * 0.1),
            },
            Drywall: {
                '4x8': Math.ceil(waste.materials.dryWall["4x8"] * 0.1)
            },
            Plywood: {
                '4x8': Math.ceil(waste.materials.Playwood["4x8"] * 0.1)
            }

        }



    }
}

export function calcPurchase(width: number, length: number) {

    const Materials = CalcMaterials(width, length);
    const extra = clacWaste(width, length)

    return {
        Purchase: {
            lumber: {
                '2x4': Materials.materials["2x4"] + extra.Waste.lumber["2x4"],
                '4x4': Materials.materials["4x4"] + extra.Waste.lumber["4x4"]
            },
            Drywall: {
                '4x8': Materials.materials.dryWall["4x8"] + extra.Waste.Drywall["4x8"],
            },
            plywood: {
                '4x8': Materials.materials.Playwood["4x8"] + extra.Waste.Plywood["4x8"]
            }

        }
    }
}