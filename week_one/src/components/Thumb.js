import PraiseButton from "./PraiseButton.js";

export default class Thumb extends PraiseButton {
  constructor(selector, { value = 0, clicked = false, onClick } = {}) {
    super();
    this.onClick = onClick;
    this.value = value;
    this.likeStatus = clicked;
    this.selector =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;

    if (!this.selector || this.selector.nodeType !== 1)
      throw new Error("selector not found");

    this.init();
  }
  init() {
    this.render();
    this.selector.addEventListener("click", this.__onclick);
  }
  render() {
    let cls = "";
    // update view
    if (this.likeStatus) {
      cls = "--active";
    } else {
      cls = "--default";
    }
    var html = `<span>${this.value}</span><div>点赞</div>`;
    this.selector.className = cls;
    this.selector.innerHTML = html;
  }
  __onclick = e => {
    // if (e.target !== button) return;

    if (this.onClick) {
      this.onClick(this);
    } else {
      if (this.likeStatus) return;
      this.like();
    }

    this.render();
  };
  like() {
    this.value++;
    this.likeStatus = true;
  }
  unlike() {
    this.value--;
    this.likeStatus = false;
  }
}
