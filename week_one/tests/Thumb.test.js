import Thumb from "../src/components/Thumb.js";

describe("点赞按钮", () => {
  describe("初始状态检查", () => {
    let div;
    beforeEach(() => {
      div = document.createElement("div");
      div.id = "btn";
      document.body.appendChild(div);
    });
    afterEach(() => {
      div && document.body.removeChild(div);
    });

    it("字符串选择器创建", () => {
      new Thumb("#btn");
      expect(div.childNodes.length).toBe(2);
    });
    it("dom元素创建", () => {
      new Thumb(document.getElementById("btn"));
      expect(div.childNodes.length).toBe(2);
    });
    it("创建异常提示", () => {
      try {
        new Thumb("xxx");
      } catch (e) {
        expect(e.message).toBe("selector not found");
      }
    });
    it("初始点赞值为20", () => {
      new Thumb("#btn", { value: 20 });
      expect(div.firstChild.innerText).toBe("20");
    });
    it("未点击状态", () => {
      new Thumb("#btn");
      expect(
        Array.prototype.indexOf.call(div.classList, "--default") > -1
      ).toBeTruthy();
    });
    it("已点击状态", () => {
      new Thumb("#btn", { clicked: true });
      expect(
        Array.prototype.indexOf.call(div.classList, "--active") > -1
      ).toBeTruthy();
    });
  });

  describe("事件检查", () => {
    let div;
    const customClick = btn => {
      btn.likeStatus ? btn.unlike() : btn.like();
    };
    beforeEach(() => {
      div = document.createElement("div");
      div.id = "btn";

      document.body.appendChild(div);
    });
    afterEach(() => {
      div && document.body.removeChild(div);
    });

    it("默认事件 点击1次", () => {
      new Thumb("#btn", { value: 10 });
      div.click();
      expect(div.firstChild.innerText).toBe("11");
      expect(Array.from(div.classList).indexOf("--active") > -1).toBeTruthy();
    });
    it("默认事件 点击第二次", () => {
      new Thumb("#btn", { value: 10 });
      div.click();
      div.click();
      expect(div.firstChild.innerText).toBe("11");
      expect(Array.from(div.classList).indexOf("--active") > -1).toBeTruthy();
    });
    it("自定义事件 点赞一次", () => {
      new Thumb("#btn", { value: 10, onClick: customClick });
      div.click();
      expect(div.firstChild.innerText).toBe("11");
      expect(Array.from(div.classList).indexOf("--active") > -1).toBeTruthy();
    });
    it("自定义事件 取消点赞", () => {
      new Thumb("#btn", { value: 10, onClick: customClick });
      div.click();
      div.click();
      expect(div.firstChild.innerText).toBe("10");
      expect(Array.from(div.classList).indexOf("--default") > -1).toBeTruthy();
    });
  });
});
