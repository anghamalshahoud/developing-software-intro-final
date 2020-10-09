import { expect } from "chai";
import "mocha";
import { calcPlywood } from "../calculator/index";



describe('calcPlywood function',  () => {
    it('Should return  the number of plywood needed ', () => {
        const actual = calcPlywood(103,103);
        expect(actual).to.equal(9)
    });
});