"use strict";

document.cookie = "SameSite=Strict";

// 診察表示切り替え

// if (サンプルの数が3個より多い時) {
//   viewmoreボタンを作成し追加;
//   4個目以降のサンプルは非表示;
//   viewmoreボタンのクリックイベント{
//     if (隠れたサンプルが3個より多い時) {
//       隠れたサンプルを３個表示;
//     } else {
//       隠れたサンプルを全て表示;
//       viewmoreボタンを削除;
//     }
//   }
// }

if (window.innerWidth <= 1000) {
  let total = 4;
  if (window.innerWidth <= 400) {
    total = 3;
  }
  const ConsultationList = document.querySelector(".Consultation-Container");
  const ConsultationItem = document.querySelectorAll(".Consultation-Container-Item");
  if (ConsultationItem.length > total) {
    const ConsultationButton = document.createElement("button");
    ConsultationButton.classList.add("Consultation-Viewmore");
    ConsultationButton.type = "button";
    const ConsultationDecorationTop = document.createElement("span");
    const ConsultationDecorationMiddle = document.createElement("span");
    const ConsultationDecorationBottom = document.createElement("span");
    ConsultationDecorationTop.classList.add("Consultation-Viewmore-Top");
    ConsultationDecorationMiddle.classList.add("Consultation-Viewmore-Middle");
    ConsultationDecorationBottom.classList.add("Consultation-Viewmore-Bottom");
    [ConsultationDecorationTop, ConsultationDecorationMiddle, ConsultationDecorationBottom].forEach((elm) => { ConsultationButton.appendChild(elm); });
    document.querySelector(".Consultation__Inner").appendChild(ConsultationButton);
    // 4個目以降のサンプルを非表示に
    for (let index = total; index < ConsultationItem.length; index++) {
      ConsultationItem[index].classList.add("isHidden");
    }
    // 以下viewmoreボタンを押す動作
    ConsultationButton.addEventListener("click", function () {
      const ConsultationHiddenItem = document.querySelectorAll(".Consultation-Container-Item.isHidden");
      if (ConsultationHiddenItem.length > total) {
        for (let index = 2; 0 <= index; index--) {
          ConsultationHiddenItem[index].classList.remove("isHidden");
        }
      } else {
        // 隠れたサンプルを全表示
        for (let index = ConsultationHiddenItem.length - 1; 0 <= index; index--) {
          ConsultationHiddenItem[index].classList.remove("isHidden");
        }
        // viewmoreボタンを削除
        this.remove();
      }
    })
  }
}