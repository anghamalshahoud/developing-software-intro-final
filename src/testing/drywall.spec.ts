import { expect } from "chai";
import "mocha";
import { calcDrywall } from "../calculator/index";
var assert = require('assert');



describe('calcDrywall function',  () => {
    it('Should return  the number of dryWall needed ', () => {
        const actual = calcDrywall(96,96);
        expect(actual).to.equal(10)
    });
});