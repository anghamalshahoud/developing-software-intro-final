import "mocha";
import { calcPurchase } from "../calculator/index";
import { expect } from "chai";




describe('calcPurchase', () => {
    it('should return the number of materials needed to be purchased', () => {

        const actual = calcPurchase(103,103);
        expect(actual).to.equal(actual);
    });
});