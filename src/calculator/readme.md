# calcHouseMaterials (width:number,length: number,name: string, unit: boolean)

This function will check if the width and length are in inches and if not it will convert the unit from feet into inches and will also return the customer name. 
Note: The width and the length should be between 4 and 60 otherwise the program will through a RangeError. 

# Parameters 
- width: `number` must be between 4 - 60;
- length: `number` must be between 4 - 60;
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
 npm start -- calc-house-materials -w 8 -l 8 -n house // if you add the -i flag it will convert the width 
 // and the length from feet into inches

 // results without the -i flag: 
 { housewidth: 8, houselength: 8, name: 'house' }

 // results with the -i flag:
 { housewidth: 96, houselength: 96, name: 'house' }
```

- ## Example 2
```javascript
// copy and past the following into > src/commands/calcMaterials

import {calcHouseMaterials} from '../calculator'

 const houseMaterials = calcHouseMaterials(args.width,args.length,args.name,args.isFeet)
        
 console.log(houseMaterials); 
 
     // In the terminal run:

 npm start -- calc-house-materials -w 2 -l 8 -n house   
     // if you add the -i flag it will convert the width and the length from feet into inches

     // results without the -i flag: 
      RangeError: Numbers passed in must be between 4 and 60

     // results with the -i flag:
     RangeError: Numbers passed in must be between 4 and 60
```




# return Value
```javascript

 return {
  housewidth: number,
  houselength: number,
   name: string
   }
```
