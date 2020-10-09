# calcHouseMaterials (width:number,length: number,name: string, unit: boolean)

This function will allows you to input the width and the length in inches and in feet if you want to. It will also return the name of the customer.
Note: The width and the length should be between 48 and 720 otherwise the program will throw a RangeError. 

# Parameters 
- width: `number` must be between 48 - 720;
- length: `number` must be between 48 - 720;
- name: `string` usually it is the customer name;
- unit: `boolean` ;

# Usage 
- ## Example 1
```javascript
// copy and past the following into > src/commands/calcMaterials

import {calcHouseMaterials} from '../calculator'

 const houseMaterials = calcHouseMaterials(args.width,args.length,args.name,args.isFeet)
        
 console.log(houseMaterials); 
 
 // In the terminal run:
 npm start -- calc-house-materials -w 96 -l 96 -n house // if you add the -i flag it will convert the width 
 // and the length from inches into feet

 // results without the -i flag: 
 { housewidth: 96, houselength: 96, name: 'house' }

 // results with the -i flag:
 { housewidth: 8, houselength: 8, name: 'house' }
```

- ## Example 2
```javascript
// copy and past the following into > src/commands/calcMaterials

import {calcHouseMaterials} from '../calculator'

 const houseMaterials = calcHouseMaterials(args.width,args.length,args.name,args.isFeet)
        
 console.log(houseMaterials); 
 
     // In the terminal run:

 npm start -- calc-house-materials -w 24 -l 96 -n house   
     // if you add the -i flag it will convert the width and the length from inches into feet

     // results without the -i flag: 
      RangeError: Numbers passed in must be between 48 and 720

     // results with the -i flag:
     RangeError: Numbers passed in must be between 48 and 720
```




# return Value
```javascript

 return {
  housewidth: number,
  houselength: number,
   name: string
   }
```
# getHouseMaterials (string)
 This function will be used to call an existing house 

 # Parameters
 name: `string`;

 # Usage: 
```javascript
// copy and past the following into > src/commands/getMaterials

import {getHouseMaterials} from '../calculator/index';

const getCustomer = getHouseMaterials(args.name)
 console.log(getCustomer);
// in the terminal run:
 
npm start -- get-house-materials -n angham
// results:
{ name: 'angham' }
```

# interfaces 

I created new interfaces for calcHouseMaterials and getHouseMaterials functions.I extendes these interfacses into a class to help get the outcome requirments in order :
```javascript
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

    studs: number;
    posts: number;
    plyWood: number;
    dryWall: number


}


export interface IHouse extends CustomerName, yourHouse, house_materials { }

```
* to read about how to use this class please [read this](../houses/readme.md) 

# calcWallLumber(inches: number)
This function will calculate the number of Posts, Plates, and Studs required for a single wall and it will also calculate the waste for it. 

# Parameters
inches:`number`;

# return value
```javascript
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
```

# Usage
- Example 1
```javascript
// import this function
import {calcWallLumber} from './src/calculator/index'

const singleWallmaterials = calcWallLumber(96)

console,log(singleWallmaterials);
// result:
{
  Materials: { Posts: 4, studs: 6, Plates: 2 },
  Waste: { postsWaste: 1, studsWaste: 1, platesWaste: 1 },
  Purchase: { posts: 5, Studs: 7, plates: 3 }
}
```