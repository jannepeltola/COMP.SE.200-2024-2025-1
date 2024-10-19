// node 12 and up
import chai from "chai"
import ceil from "../src/ceil.js"

const expect = chai.expect


describe("Ceil up", () => {
 it("2.5 rounds up to 3", () =>{
     expect(ceil(2.5)).to.equal(3)
 });
 it("2 stays at 2", () =>{
    expect(ceil(2)).to.equal(2)
});
})