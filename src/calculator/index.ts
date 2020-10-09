export function calcHouseMaterials(width: number, length: number, name: string, unit: boolean) {

    const housewidth = unit ? (width / 12) : width;
    const houselength = unit ? (length / 12) : length;


    return { name, housewidth, houselength }

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
    const isPostRequired = (Math.min(wholeNumber, 1)) ;
    const requiredPosts = (Math.ceil(wallLengthOverMinRequired / wallLengthPlusPost)) + 4 + isPostRequired;

    
    // calculate for studs

    const innerWallWidth = inches - (postsWidth * 2)
    const Studs = (Math.ceil(innerWallWidth/spaceApart)) ;

    // top and bottom plates

    let fullSectionBoard = Math.ceil(inches / FullBoardSectionSize) * 2
    let plates = Math.ceil(inches / BoardLength) * 2;

    // calc for waste

    const Posts_with_waste = Math.ceil(requiredPosts * 0.1);
    const Studs_with_waste = (Math.ceil(Studs * 0.1)) ;
    const Plates_with_waste = (Math.ceil(plates * 0.1)) ;



    return{
        
        
        
        Materials:{
        Posts: requiredPosts,
        studs:Studs,
        Plates: plates,},
        Waste:{
        postsWaste: Posts_with_waste ,
        studsWaste: Studs_with_waste,
        platesWaste : Plates_with_waste},
        Purchase:{
        posts: requiredPosts + Plates_with_waste,
        Studs: Studs + Studs_with_waste,
        plates: plates + Plates_with_waste}

       
        
    }

}


export function calcDrywall(width:number, length:number){
    // width and length here are in feet
    const wall1_4 = Math.floor((width /12) * (length/12)) * 4
    const ceilingAreainFeet = Math.floor((width/12) * (length/12 ))
    const drywall = Math.floor((wall1_4 + ceilingAreainFeet) / DryWall) ;
    return drywall
    
}

export function calcPlywood(width:number, length:number){
    // width and length here are in feet
    const plywood_needed = (Math.ceil(((width/12) * (length/12)) / plyWood)) * 3;
    return plywood_needed
}