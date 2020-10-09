import fs = require("fs");
import { IHouse, house_materials, yourHouse } from "../calculator/interfaces";
import { House } from ".";

export class Houses extends Map<string, IHouse> {
    private static data = {
        path: `${__dirname}/../data`,
    };

    private static calculator: (
        inches: number
    ) => house_materials = function (): house_materials {
        return {
            studs: 0,
            posts: 0,
            plyWood: 0,
            dryWall: 0,

        };
    };

    public static setWallSuppliesCalculator(
        calculator: (inches: number) => house_materials
    ): void {
        this.calculator = calculator;
    }

    private static getSaveLocation(): string {
        if (!fs.existsSync(Houses.data.path)) {
            fs.mkdirSync(Houses.data.path);
        }

        return Houses.data.path;
    }

    public static getAll(): Houses {
        const dataFolder = this.getSaveLocation();
        const contents: fs.Dirent[] = fs.readdirSync(dataFolder, {
            withFileTypes: true,
        });

        const houseData: yourHouse[] = contents.map(
            (file: fs.Dirent): yourHouse => {
                const json = fs.readFileSync(`${dataFolder}/${file.name}`, {
                    encoding: "utf-8",
                });
                return JSON.parse(json);
            }
        );

        const houses = new Houses();
        houseData.forEach((houseData: IHouse) => {
            const house = new House(this.calculator, houseData);
            houses.set(house.name, house);
        });

        return houses;
    }

    public static create(name: string): House {
        const house = new House(this.calculator);
        house.name = name;
        return house;
    }

    public static save(house: House): void {
        const data = {
            name: house.name,
            width: house.width,
            length: house.length,
            outsideWallArea: house.outsideWallArea,
            insideWallArea: house.insideWallArea,
            ceilingArea: house.ceilingArea,
            "2x4": house.studs_and_plats,
            "4x4": house.posts,
            "4x8": house.plyWood,
            "4X8": house.dryWall



        };

        fs.writeFileSync(
            `${Houses.getSaveLocation()}/${house.name}.json`,
            JSON.stringify(data, null, 4),
            { encoding: "utf-8" }
        );
    }
}
