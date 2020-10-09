import { expect } from "chai";
import "mocha";
import { CalcMaterials } from "../calculator/index";
var assert = require('assert');





describe('calcPlywood function',  () => {
    it('Should return  the number of materials needed ', () => {
        const actual = CalcMaterials(103,103);
        expect(actual).to.equal( actual)
    });
});