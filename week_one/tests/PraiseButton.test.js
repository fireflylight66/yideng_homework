import PraiseButton from "../src/components/PraiseButton.js";

describe("PraiseButton.js", () => {
  const button = new PraiseButton();
  it("doLike()", () => {
    expect(button.doLike()).toBe(1);
  });
  it("doLike(1)", () => {
    expect(button.doLike(1)).toBe(2);
  });
});
