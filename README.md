# Focus College ACSD Final

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---

I installed typescript using:
```
npm install -g typescript --save-dev
```
And I added NPM scripts so that you can, in one cli command each:
- compile
- start
- compile & start

### To compile run:
```
tsc
```
### To start run:
```
node dist/index.js
```

### To compile & start run:
```
npm run compile:start
```

* # Automate Linting

I added eslint to my project using the following command:
```
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
 I also created .eslintrc file using:
```
touch .eslintrc
```
And inclouded the following in it:

``` Javascript
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}
```
I also created .eslintingnore using:
``` 
touch .eslintignore
```
And inclouded the following files in it:
```javascript
dist
node_modules
```
Finally I modify my NPM scripts so that you can, in one cli command each:
- lint
- lint, compile & start

To run lint only use:
```
npm run lint
```
To run lint & compile & start use:
```
npm run lint:compile:start
```

* #  Automate Code Formatting 

I add prettier to my project by running:
```
npm install --save-dev --save-exact prettier
```

I also created .prettierrc.json and inclouded the following in it:
```javascript
{
    "tabWidth": 4,
    "bracketSpacing": true
}
```
And created .prettierignore file to let prettier know which files to ignore:
```javascript
dist
node_modules
```
Finally I modified my NPM scripts so that you can, in one cli command each:
- format
- lint, format, compile & run

To format run:
``` 
npm run format
```
To Lint, format, compile & start run:
```
npm run start:dev:fix
```
* # Automate Testing

I add Mocha and Chai to my project using:
```
npm install chai mocha ts-node @types/chai @types/mocha --save-dev
```
 I also modified my NPM scripts so that you can, in one cli command each:

- test
- lint, format, test, compile & start

To test run:
```
npm run test
```
To lint, format, test, compile and start run:
```
npm run start:dev:fix
```
* # Istanbul (test with coverage)

I added nyc istanbul to mt project using:
``` 
npm i nyc --save-dev
```
and 
```
npm i @istanbuljs/nyc-config-typescript --save-dev
```

Plus I created a new file name .nycrc and included the following in it:
```javascript
{
  "extends": "@istanbuljs/nyc-config-typescript",
  "all": true,
  "check-coverage": true
}
```

I also modified my NPM scripts so that you can, in one cli command run

- test with coverage

To run test with coverage use:
```
npm run coverage
```
Or if you want to run everthing (lint, format, test, compile and start) without the coverage use:
```
npm run start:dev:fix
```

* ## Yargs

I added yargs to my project using:
```
npm install yargs
```
I installed yargs types too using:
```
npm i @types/yargs --save-dev
```

I also setup yargs with two commands:
* ## calc-house-materials
- - ### Parameters:
- - - width
- - - length
- - - isFeet
- - - name
---
* ## get-house-materials
- - ### Parameters:
- - - name
---

Example on how to run calc-house-materials yargs command:
compile:
``` 
tsc
```
Then use:
```
npm start -- calc-house-materials -w 8 -l 8 -n angham
```
---

 Example on how to run get-house-materials yargs command:
compile:
``` 
tsc
```
Then use:
```
npm start -- get-house-materials -n angham
```

# calcHouseMaterials (width: number, length: number, name: string, unit: boolean)
This function will check if the width and length are in inches and if not it will convert the unit from feet into inches and will also return the customer name. 
Note: The width and the length should be between 4 and 60 otherwise the program will through a RangeError. 

[Read more](./src/calculator/readme.md)
