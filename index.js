
var dismissLoadingScreen = function() {
    document.getElementById("bgm").pause();
    document.getElementById("intro-container").style.display = "none";
    document.getElementById("content-body").style.display="block";
};
var executethis = function() {
    
    document.getElementById("bgm").play();
    document.getElementById("firstpage").style.display="none";
    document.getElementById("intro-container").style.display = "block";
    var result = setTimeout(dismissLoadingScreen, 14500);
};  
var wait3seconds = function() {
    document.getElementById("content-body").style.display="none";
    document.getElementById("intro-container").style.display="none";
};

window.addEventListener("load", wait3seconds);
