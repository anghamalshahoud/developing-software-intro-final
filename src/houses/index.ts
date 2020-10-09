import { IHouse, yourHouse, house_materials } from "../calculator/interfaces";

export class House implements IHouse {
    public name: string;
    private _width = 0;
    private _length = 0;
    outsideWallArea = 0;
    insideWallArea = 0;
    ceilingArea = 0;
    studs = 0;
    posts = 0;
    plyWood = 0;
    dryWall = 0;




    private materials: house_materials;
    private lumber: house_materials;
    private ply_wood: house_materials;
    private dry_Wall: house_materials;
    private waste: house_materials;
    private _lumber: house_materials;
    private plywood: house_materials;
    private dry_wall: house_materials;
    private Purchase: house_materials;
    private lumber_: house_materials;
    private PlyWood: house_materials;
    private drywall: house_materials;

    set width(inches: number) {
        this._width = inches;
        this.calculateMaterials();
    }

    get width(): number {
        return this._width;
    }

    set length(inches: number) {
        this._length = inches;
        this.calculateMaterials();
    }

    get length(): number {
        return this._length;
    }

    get studs_and_plats(): number {

        return (this.lumber.studs + this._lumber.studs + this.lumber.studs);
    }

    get Posts(): number {
        return (this.lumber_.posts + this._lumber.posts + this.lumber_.posts);
    }

    get ply_Wood(): number {
        return (this.ply_wood.plyWood + this.plywood.plyWood + this.PlyWood.plyWood);
    }

    get DryWall(): number {
        return (this.dry_Wall.dryWall + this.dry_wall.dryWall + this.drywall.dryWall);
    }



    constructor(
        private calculator: (inches: number) => house_materials,
        data?: IHouse
    ) {
        data?.name && (this.name = data.name);
        data?.width && (this.width = data.width);
        data?.length && (this.length = data.length);
        data?.ceilingArea && (this.ceilingArea = data.ceilingArea);
        data?.insideWallArea && (this.insideWallArea = data.insideWallArea);
        data?.outsideWallArea && (this.outsideWallArea = data.outsideWallArea);





    }

    private calculateMaterials() {
        this.materials = this.calculator(this.width)
        this.materials = this.calculator(this.length)
        this.waste = this.calculator(this.width);
        this.waste = this.calculator(this.length);
        this.Purchase = this.calculator(this.width);
        this.Purchase = this.calculator(this.length);

    }
}