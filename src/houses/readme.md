# Houses

The houses class extends the [javascript Map](https://javascript.info/map-set) class and inherits all
of its public properties and methods.

### setWallSuppliesCalculator( `calculator: (inches: number) => IWallCalculatorResponse` ): void

Sets function to be used to calculate a single wall resources, including the corner posts.

Parameters:
  - calculator: `( inches:number ) => IWallCalculatorResponse`
    - function must take a single parameter: `inches: number`
    - function must return an object matching the [house_materials Interface](#house_materials)

Returns:
  - void

Usage:

* Note: since we havn't created a function with a singl parameter to calculate the wall supplies we are going to use the class in the following way:
```javascript
// import the class 
import { Houses } from '../houses/houses'

// import your function 
import { calcHouseMaterials } from '../calculator';

// set your function and its parameters 

const houseMaterials = calcHouseMaterials(args.width, args.length, args.name, args.isFeet)

            // Here I used an example for what i have only the name, width and length 
            // the rest of the supplies result will be zero 
            const house = Houses.create(args.name)
            house.name = houseMaterials.name
            house.width = houseMaterials.housewidth
            house.length = houseMaterials.houselength
```


