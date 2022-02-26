import { rpn } from "./rpn";

describe("rpn()", () => {
  it("returs number when passed", () => {
    expect(rpn("2")).toBe(2);
  });

  it("correctly adds 2 numbers", () => {
    expect(rpn("1 3 +")).toBe(4);
  });
  it("2 2 + 3 * returns 12", () => {
    expect(rpn("2 2 + 3 *")).toBe(12);
  });
  it("2 2 / returns 1", () => {
    expect(rpn("2 2 /")).toBe(1);
  });
});
