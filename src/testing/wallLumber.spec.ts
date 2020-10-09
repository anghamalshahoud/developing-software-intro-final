import { expect } from "chai";
import "mocha";
import { calcWallLumber } from "../calculator/index";
var assert = require('assert');



describe('getHouseMaterials', () => {
    it('should return the requierd numbers of posts, plates,and studs for a single wall', () => {
        const inches = 103;
        const actual = calcWallLumber(inches);
        assert.equal(actual.Plates,
            actual.Posts,
            actual.studs,
            );
    });
});
