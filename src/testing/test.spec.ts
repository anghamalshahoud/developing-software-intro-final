import { Hello } from "../testing";
import { expect } from "chai";
import "mocha";

describe("Hello function", () => {
    it("should return Hello world this is Angham", () => {
        const result = Hello("Hello world this is Angham");
        expect(result).to.equal("Hello world this is Angham");
    });
});
