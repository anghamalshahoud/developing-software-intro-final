import { expect } from "chai";
import "mocha";
import { calcDrywall } from "../calculator/index";



describe('calcDrywall function',  () => {
    it('Should return  the number of dryWall needed ', () => {
        const actual = calcDrywall(96,96);
        expect(actual).to.equal(10)
    });
});