import PraiseButton from "../src/components/PraiseButton.js";

describe("PraiseButton.js", () => {
  const button = new PraiseButton();
  it("increase(1)", () => {
    expect(button.increase(1)).toBe(2);
  });
  it("decrease(1)", () => {
    expect(button.decrease(1)).toBe(0);
  });
});
