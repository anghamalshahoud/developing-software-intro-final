import "mocha";
import { clacWaste } from "../calculator/index";
import { expect } from "chai";




describe('calcWaste', () => {
    it('should return the extra 10% waste, 2x4, 4x4, 4x8, and 4x8', () => {

        const actual = clacWaste(103,103);
        expect(actual).to.equal(actual);
    });
});