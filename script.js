"use strict";

const shareBtn = document.querySelector(".share-div");
const shareOpt = document.querySelector(".share-options");
const pathSvg = document.getElementById("path");
const userProfile = document.querySelector(".user");
const shareOptMobile = document.querySelector(".share-options-mobile");
const shareBtnMobile = document.querySelector(".svg-div-mobile");
console.log(shareBtn);

shareBtn.addEventListener("click", () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 500) {
    userProfile.classList.add("hidden-mobile");
    shareOptMobile.classList.toggle("hidden-mobile");
  } else {
    pathSvg.classList.toggle("hover-effect");
    shareBtn.classList.toggle("hover-effect");
    shareOpt.classList.toggle("hidden");
  }
});

shareBtnMobile.addEventListener("click", () => {
  userProfile.classList.remove("hidden-mobile");
  shareOptMobile.classList.toggle("hidden-mobile");
});
const shareFb = document.getElementById("fb-share");
const shareTr = document.getElementById("tr-share");
const sharePn = document.getElementById("pn-share");
const pin = "https://www.pinterest.com/pin/create/button/?url=";
const fb = "https://www.facebook.com/sharer/sharer.php?u=";
const tweet = "https://twitter.com/intent/tweet?url=";
function share(option) {
  const urlToShare = encodeURIComponent("https://github.com/mouatezbenbara");
  const ShareUrl = `${option}${urlToShare}`;
  window.open(ShareUrl, "_blank");
}
shareFb.addEventListener("click", () => {
  share(fb);
});
shareTr.addEventListener("click", () => {
  share(tweet);
});

sharePn.addEventListener("click", () => {
  share(pin);
});

// mobile sharing options
const mobileShareFb = document.getElementById("fb-share-mb");
const mobileShareTr = document.getElementById("tr-share-mb");
const mobileSharePn = document.getElementById("pn-share-mb");
mobileShareFb.addEventListener("click", () => {
  share(fb);
});
mobileShareTr.addEventListener("click", () => {
  share(tweet);
});

mobileSharePn.addEventListener("click", () => {
  share(pin);
});
