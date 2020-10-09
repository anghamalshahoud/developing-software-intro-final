import { calcHouseMaterials } from "../calculator";
import { expect } from "chai";
import "mocha";
var assert = require('assert');



describe("calcHouseMAterials", () => {
    it("should return 80, 80 , Angham ", () => {
        const housewidth = 80;
        const houselength = 80;
        const name = 'Angham';
        const unit = false
        const result = calcHouseMaterials(housewidth, houselength, name, unit);
        assert.equal(result.housewidth,result.houselength,result.name, result.Materials);

        it("Should throw a RangeError for a less than 48 and greter than 720", () => {
            expect(() => {
         calcHouseMaterials(30, 100, 'Angham', false);
            }).to.throw(
                RangeError,
                "Numbers passed in must be between 48 and 720");
        });
    });
});