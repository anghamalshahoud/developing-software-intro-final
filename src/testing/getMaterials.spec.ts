import { expect } from "chai";
import "mocha";
import { getHouseMaterials } from "../calculator/index";


describe('getHouseMaterials', () => {
    it('should return getHouseMaterials customerName', () => {
      const name = 'Angham';
      const actual = getHouseMaterials(name);
      expect(actual).to.be.equal('Angham');
    });
});
  