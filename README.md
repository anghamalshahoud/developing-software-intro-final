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

* ## Automate Linting

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

* ##  Automate Code Formatting 

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
