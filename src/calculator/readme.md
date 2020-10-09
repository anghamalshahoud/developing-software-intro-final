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

# calcDrywall(width:number, length:number)
This function will calculate the number of drywall sheets needed for the house. 

# Parameters
width:`number`;
length:`number`;

# return value
the number of dryWall needed.

# Usage 

```javascript

// import this function
import {calcDrywall} from './src/calculator/index'

const drywallNeeded = calcDrywall(96, 96)

console,log(drywallNeeded);

// result: 10
```
# calcPlywood(width:number, length:number)
This function will calculate the number of playwood sheets needed for the house. 

# Parameters
width:`number`;
length:`number`;

# return value
the number of playwood needed.

# Usage 

```javascript

// import this function
import {calcPlywood} from './src/calculator/index'

const plywoodNeeded = calcPlywood(103, 103)

console,log(plywoodNeeded);

// result: 9
```

# calcMaterials(width: number, length: number);
This function will return the number of 4x4, 2x4, 4x8 drywall , and 4x8 plywood.

# Parameters
width:`number`;
length:`number`;

# Usage 

```javascript

// import this function
import {calcMaterials} from './src/calculator/index'

const Materials = calcMaterials(103, 103)

console,log(Materials);

// result: 
{
  materials: {
    '2x4': 19,
    '4x4': 4,
    dryWall: { '4x8': 11 },
    Playwood: { '4x8': 9 }
  }
}
```

# calcHouseMaterials (width:number,length: number,name: string, unit: boolean)

I integrated #calcMaterials function into this function so that the output of calcMaterials is included in the output of calcHouseMaterials. the usage are still the same a for the calcHouseMaterials function as will as clacMaterials function. 


# clacWaste (width:number,length: number);

This function will give us th extra 10% of the acctual calculation for waste. 

## Usage:
```javascript
// import this function
import {calcWaste} from './src/calculator/index'

const waste = calcWaste(103, 103)

console,log(waste);

// result:
{
  Waste: {
    lumber: { '2x4': 2, '4x4': 1 },
    Drywall: { '4x8': 2 },
    Plywood: { '4x8': 1 }
  }
}
```