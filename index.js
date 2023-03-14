
var dismissLoadingScreen = function() {
    var loader = document.getElementById("intro-container");
    var bodycnt = document.getElementById("body");
    
    document.getElementById("bgm").pause();
    loader.style.display = "none";
    bodycnt.style.display="block";
};
var executethis = function() {
    console.log("hi");
    var loader = document.getElementById("intro-container");
    var firstpg = document.getElementById("firstpage");
    
    document.getElementById("bgm").play();
    firstpg.style.display="none";
    loader.style.display = "block";
    var result = setTimeout(dismissLoadingScreen, 16000);
};  
var wait3seconds = function() {
    var loader = document.getElementById("intro-container");
    var bodycnt = document.getElementById("body");
    
    bodycnt.style.display="none";
    loader.style.display="none";
};

window.addEventListener("load", wait3seconds);