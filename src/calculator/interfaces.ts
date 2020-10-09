import { number, ToString } from "yargs";
import { calcHouseMaterials } from '../calculator/index'

export interface CustomerName {
    name: string;

}
export interface yourHouse {
    width: number;
    length: number;
    outsideWallArea: number;
    insideWallArea: number;
    ceilingArea: number;

}



export interface house_materials {
    // I didn't use Geralds supplies names as he provided 
    // because it makes me lost with all the numbers in it
    // and I could not tell what is what
    // I used easy names so if another person want to use this application for the first time 
    // he wan't be lost! 

    studs: number;
    posts: number;
    plyWood: number;
    dryWall: number


}


export interface IHouse extends CustomerName, yourHouse, house_materials { }

