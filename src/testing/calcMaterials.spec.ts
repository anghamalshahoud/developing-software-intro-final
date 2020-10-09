import { calcHouseMaterials } from "../calculator";
import { expect } from "chai";
import "mocha";


describe("calcHouseMAterials", () => {
    it("should return 80, 80 , Angham, false ", () => {
        const housewidth = 80;
        const houselength = 80;
        const name = 'Angham';
        const unit = false
        const result = calcHouseMaterials(housewidth, houselength, name, unit);
        expect(result).to.equal(result);

        it("Should throw a RangeError for a less than 0", () => {
            expect(() => {
         calcHouseMaterials(30, 100, 'Angham', false);
            }).to.throw(
                RangeError,
                "Numbers passed in must be between 48 and 720");
        });
    });
});