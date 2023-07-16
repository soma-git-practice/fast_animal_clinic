"use strict";

// ハンバーガーメニュー
const Hamburger = document.querySelector(".Header-Hamburger")
Hamburger.addEventListener("click", () => {
  Hamburger.classList.toggle("isActive");
  document.querySelector(".Header-SP").classList.toggle("isRight");
  if (document.querySelector(".Header-SP").classList.contains("isRight")) {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }
});

// バナー
document.querySelector(".Banner").addEventListener("click", () => {
  document.querySelector(".Banner").classList.toggle("isActive");
  document.querySelector(".Banner-Left-Decoration-Second").classList.toggle("isActive");
})

// スクロール時のヘッダーとバナー
let lastScrollTopHeader = scrollY;
let lastScrollTopBanner = scrollY;
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  // ヘッダー
  if (window.innerWidth > 768 && scrollTop > document.querySelector(".Header").getBoundingClientRect().height) {
    if (lastScrollTopHeader < scrollTop) {
      document.querySelector(".Header").classList.add("isHidden");
    } else {
      document.querySelector(".Header").classList.remove("isHidden");
    }
    lastScrollTopHeader = scrollTop;
  }
  // バナー
  if (window.innerWidth > 768) {
    if (lastScrollTopBanner < scrollTop) {
      document.querySelector(".Banner").classList.add("isHidden");
    } else {
      document.querySelector(".Banner").classList.remove("isHidden");
    }
    lastScrollTopBanner = scrollTop;
  }
})

// ファーストビュー画像切り替え
function changeImage() {
  setTimeout(() => {
    document.querySelector(".Firstview-Bg-Pictures-1").classList.toggle("isHidden");
    document.querySelector(".Firstview-Bg-Pictures-2").classList.toggle("isHidden");
    changeImage();
  }, 6000);
}
changeImage();

// よくある質問ボタンアニメーション
document.querySelectorAll(".Faq-List-Item").forEach((elm) => {
  elm.addEventListener("click", () => {
    elm.classList.toggle("isInit");
  })
})