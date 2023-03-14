window.onload = load();

function load() {
  document.querySelector(".bcknd").classList.toggle("animation");
}

document.onreadystatechange = function () {
  // document.querySelector(  "#body").style.visibility = "hidden";
  // document.querySelector("#loader").style.visibility = "visible";
  // setTimeout(hideanimate,0);

  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
function hideanimate() {
  document.querySelector("#loader").style.visibility = "hidden";
  document.querySelector("#body").style.visibility = "visible";
}

var navL = document.querySelector(".nav-links");
document.querySelector(".nav-btn").addEventListener("click", () => {
  if (navL.classList.contains("shrink")) {
    navL.classList.remove("shrink");
    navL.classList.add("unshrink");
  } else {
    navL.classList.remove("unshrink");
    navL.classList.add("shrink");
  }
});
addEventListener("scroll", (event) => {});

onscroll = (event) => {
  if (navL.classList.contains("unshrink")) {
    navL.classList.remove("unshrink");
    navL.classList.add("shrink");
  }
};

// timer javascript
