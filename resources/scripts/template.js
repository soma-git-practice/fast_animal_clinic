"use strict";

// モーダルのテンプレ
class Modal {
  constructor(obj) {
    this.openbutton = obj.openbutton;
    this.closebutton = obj.closebutton;
    this.modal = obj.element;
    this.addListeners();
  }
  open() {
    this.modal.classList.remove("isHidden");
    document.body.classList.add("isFixed");
  }
  close() {
    this.modal.classList.add("isHidden");
    document.body.classList.remove("isFixed");
  }
  addListeners() {
    this.openbutton.addEventListener("click", () => {
      this.open();
    });
    this.closebutton.addEventListener("click", () => {
      this.close();
    });
  }
}

////////////////////////////////////////////
// 使い方のサンプル
// const achievements = {
// openbutton: document.querySelector(".btn-open")
//   closebutton: document.querySelector(".btn-close"),
//   element: document.querySelector(".elm"),
// }

// new Modal(achievements);
////////////////////////////////////////////

// インターセクションオブザーバーのテンプレ
class newObserve {
  constructor(triggerClassName, addClassName, targetClassName = triggerClassName) {
    this.trigger = triggerClassName;
    this.target = targetClassName;
    this.addclass = addClassName;
    this.SimpleObserber();
  }
  SimpleObserber() {
    document.querySelectorAll(`.${this.trigger}`).forEach(elm => {
      new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.target.classList.add(this.addclass);
            } else {
              this.target.classList.remove(this.addclass);
            }
          })
        }
      ).observe(elm);
    })
  }
}

////////////////////////////////////////////
// 使い方のサンプル
// const a = new newObserve("Border", "isActive");
// const b = new newObserve("Border", "isActive", "Headline");
////////////////////////////////////////////