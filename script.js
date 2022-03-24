const navopen = document.querySelector(".navopen");
let nav= 0;

navopen.addEventListener("click", function(){
    if(nav == 0){
        document.querySelector(".navopen-2").style.width = "0";
        document.querySelector(".navopen-1").style.top = "50%";
        document.querySelector(".navopen-3").style.top = "50%";
        document.querySelector(".navopen-1").style.transform = "rotate(140deg)";
        document.querySelector(".navopen-3").style.transform = "rotate(-140deg)";
        document.querySelector(".banner-menu-2").style.height = "470%";
        document.querySelector(".banner-menu-2").style.opacity = "1";
        document.querySelector(".banner-menu-2").style.visibility ="visible";
        nav = 1;
    }
    else{
        document.querySelector(".navopen-1").style.transform = "rotate(-180deg)";
        document.querySelector(".navopen-3").style.transform = "rotate(180deg)";
        document.querySelector(".navopen-2").style.width = "100%";
        document.querySelector(".navopen-1").style.top = "0";
        document.querySelector(".navopen-3").style.top = "100%";
         document.querySelector(".banner-menu-2").style.height = "0";
        document.querySelector(".banner-menu-2").style.opacity = "0";
        document.querySelector(".banner-menu-2").style.visibility ="visible";
        nav = 0;
    }
});
// Sliders
const btnleft = document.querySelector(".left");
const btnright = document.querySelector(".right");

const slider = document.querySelectorAll(".infor-1-sliders .slider");

var sliderIndex = 0;

btnright.addEventListener("click", function(){
    sliderIndex = sliderIndex + 1;
    console.log(sliderIndex);
    if(sliderIndex > 5){
        sliderIndex = 0;
        slider[0].style.transform = "translateX(0%)";
        slider[1].style.transform = "translateX(100%)";
        slider[2].style.transform = "translateX(200%)";
        slider[3].style.transform = "translateX(300%)";
        slider[4].style.transform = "translateX(400%)";
        slider[5].style.transform = "translateX(500%)";
    }
    if(sliderIndex === 1){
        slider[0].style.transform = "translateX(500%)";
        slider[1].style.transform = "translateX(0%)";
        slider[2].style.transform = "translateX(100%)";
        slider[3].style.transform = "translateX(200%)";
        slider[4].style.transform = "translateX(300%)";
        slider[5].style.transform = "translateX(400%)";
    }
    if(sliderIndex == 2){
        slider[0].style.transform = "translateX(400%)";
        slider[1].style.transform = "translateX(500%)";
        slider[2].style.transform = "translateX(0%)";
        slider[3].style.transform = "translateX(100%)";
        slider[4].style.transform = "translateX(200%)";
        slider[5].style.transform = "translateX(300%)";
    }
    if(sliderIndex == 3){
        slider[0].style.transform = "translateX(300%)";
        slider[1].style.transform = "translateX(400%)";
        slider[2].style.transform = "translateX(500%)";
        slider[3].style.transform = "translateX(0%)";
        slider[4].style.transform = "translateX(100%)";
        slider[5].style.transform = "translateX(200%)";
    }
    if(sliderIndex == 4){
        slider[0].style.transform = "translateX(200%)";
        slider[1].style.transform = "translateX(300%)";
        slider[2].style.transform = "translateX(400%)";
        slider[3].style.transform = "translateX(500%)";
        slider[4].style.transform = "translateX(0%)";
        slider[5].style.transform = "translateX(100%)";
    }
    if(sliderIndex == 5){
        slider[0].style.transform = "translateX(100%)";
        slider[1].style.transform = "translateX(200%)";
        slider[2].style.transform = "translateX(300%)";
        slider[3].style.transform = "translateX(400%)";
        slider[4].style.transform = "translateX(500%)";
        slider[5].style.transform = "translateX(0%)";
    }
});

btnleft.addEventListener("click", function(){
    sliderIndex = sliderIndex - 1;
    console.log(sliderIndex);
    if(sliderIndex <= 0){
        sliderIndex = 6;
        slider[0].style.transform = "translateX(0%)";
        slider[1].style.transform = "translateX(100%)";
        slider[2].style.transform = "translateX(200%)";
        slider[3].style.transform = "translateX(300%)";
        slider[4].style.transform = "translateX(400%)";
        slider[5].style.transform = "translateX(500%)";
    }
    if(sliderIndex === 1){
        slider[0].style.transform = "translateX(500%)";
        slider[1].style.transform = "translateX(0%)";
        slider[2].style.transform = "translateX(100%)";
        slider[3].style.transform = "translateX(200%)";
        slider[4].style.transform = "translateX(300%)";
        slider[5].style.transform = "translateX(400%)";
    }
    if(sliderIndex == 2){
        slider[0].style.transform = "translateX(400%)";
        slider[1].style.transform = "translateX(500%)";
        slider[2].style.transform = "translateX(0%)";
        slider[3].style.transform = "translateX(100%)";
        slider[4].style.transform = "translateX(200%)";
        slider[5].style.transform = "translateX(300%)";
    }
    if(sliderIndex == 3){
        slider[0].style.transform = "translateX(300%)";
        slider[1].style.transform = "translateX(400%)";
        slider[2].style.transform = "translateX(500%)";
        slider[3].style.transform = "translateX(0%)";
        slider[4].style.transform = "translateX(100%)";
        slider[5].style.transform = "translateX(200%)";
    }
    if(sliderIndex == 4){
        slider[0].style.transform = "translateX(200%)";
        slider[1].style.transform = "translateX(300%)";
        slider[2].style.transform = "translateX(400%)";
        slider[3].style.transform = "translateX(500%)";
        slider[4].style.transform = "translateX(0%)";
        slider[5].style.transform = "translateX(100%)";
    }
    if(sliderIndex == 5){
        slider[0].style.transform = "translateX(100%)";
        slider[1].style.transform = "translateX(200%)";
        slider[2].style.transform = "translateX(300%)";
        slider[3].style.transform = "translateX(400%)";
        slider[4].style.transform = "translateX(500%)";
        slider[5].style.transform = "translateX(0%)";
    }
});
//Auto slider
function sliderAuto(){
    sliderIndex = sliderIndex + 1;
    if(sliderIndex > 5){
        sliderIndex = 0;
        slider[0].style.transform = "translateX(0%)";
        slider[1].style.transform = "translateX(100%)";
        slider[2].style.transform = "translateX(200%)";
        slider[3].style.transform = "translateX(300%)";
        slider[4].style.transform = "translateX(400%)";
        slider[5].style.transform = "translateX(500%)";
    }
    if(sliderIndex === 1){
        slider[0].style.transform = "translateX(500%)";
        slider[1].style.transform = "translateX(0%)";
        slider[2].style.transform = "translateX(100%)";
        slider[3].style.transform = "translateX(200%)";
        slider[4].style.transform = "translateX(300%)";
        slider[5].style.transform = "translateX(400%)";
    }
    if(sliderIndex == 2){
        slider[0].style.transform = "translateX(400%)";
        slider[1].style.transform = "translateX(500%)";
        slider[2].style.transform = "translateX(0%)";
        slider[3].style.transform = "translateX(100%)";
        slider[4].style.transform = "translateX(200%)";
        slider[5].style.transform = "translateX(300%)";
    }
    if(sliderIndex == 3){
        slider[0].style.transform = "translateX(300%)";
        slider[1].style.transform = "translateX(400%)";
        slider[2].style.transform = "translateX(500%)";
        slider[3].style.transform = "translateX(0%)";
        slider[4].style.transform = "translateX(100%)";
        slider[5].style.transform = "translateX(200%)";
    }
    if(sliderIndex == 4){
        slider[0].style.transform = "translateX(200%)";
        slider[1].style.transform = "translateX(300%)";
        slider[2].style.transform = "translateX(400%)";
        slider[3].style.transform = "translateX(500%)";
        slider[4].style.transform = "translateX(0%)";
        slider[5].style.transform = "translateX(100%)";
    }
    if(sliderIndex == 5){
        slider[0].style.transform = "translateX(100%)";
        slider[1].style.transform = "translateX(200%)";
        slider[2].style.transform = "translateX(300%)";
        slider[3].style.transform = "translateX(400%)";
        slider[4].style.transform = "translateX(500%)";
        slider[5].style.transform = "translateX(0%)";
    }
}
setInterval(sliderAuto, 4000);

// Infor-2
const btnscroll = document.getElementsByClassName("btnscroll");
const boxscroll = document.getElementsByClassName("boxscroll");
const btnnarow = document.getElementsByClassName("btnnarow");

btnscroll[0].addEventListener("click", function(){
    if(btnnarow[0].style.color === "orange"){
        btnnarow[0].style.transform = "rotate(0deg)";
        btnnarow[0].style.color = "#000";
        document.querySelectorAll(".btnscroll h2")[0].style.color = "#000";
        boxscroll[0].style.height = "60px";
    }
    else{
        btnnarow[0].style.transform = "rotate(90deg)";
        btnnarow[0].style.color = "orange";
        document.querySelectorAll(".btnscroll h2")[0].style.color = "orange";
        boxscroll[0].style.height = "auto";
    }
});
btnscroll[1].addEventListener("click", function(){
    if(btnnarow[1].style.color === "orange"){
        btnnarow[1].style.transform = "rotate(0deg)";
        btnnarow[1].style.color = "#000";
        document.querySelectorAll(".btnscroll h2")[1].style.color = "#000";
        boxscroll[1].style.height = "60px";
    }
    else{
        btnnarow[1].style.transform = "rotate(90deg)";
        btnnarow[1].style.color = "orange";
        document.querySelectorAll(".btnscroll h2")[1].style.color = "orange";
        boxscroll[1].style.height = "auto";
    }
});
btnscroll[2].addEventListener("click", function(){
    if(btnnarow[2].style.color === "orange"){
        btnnarow[2].style.transform = "rotate(0deg)";
        btnnarow[2].style.color = "#000";
        document.querySelectorAll(".btnscroll h2")[2].style.color = "#000";
        boxscroll[2].style.height = "60px";
    }
    else{
        btnnarow[2].style.transform = "rotate(90deg)";
        btnnarow[2].style.color = "orange";
        document.querySelectorAll(".btnscroll h2")[2].style.color = "orange";
        boxscroll[2].style.height = "auto";
    }
});
btnscroll[3].addEventListener("click", function(){
    if(btnnarow[3].style.color === "orange"){
        btnnarow[3].style.transform = "rotate(0deg)";
        btnnarow[3].style.color = "#000";
        document.querySelectorAll(".btnscroll h2")[3].style.color = "#000";
        boxscroll[3].style.height = "60px";
    }
    else{
        btnnarow[3].style.transform = "rotate(90deg)";
        btnnarow[3].style.color = "orange";
        document.querySelectorAll(".btnscroll h2")[3].style.color = "orange";
        boxscroll[3].style.height = "auto";
    }
});

// slider2
const btnleft2 = document.querySelector(".left2");
const btnright2 = document.querySelector(".right2");
let slider2Index = 0;
const slider2 = document.querySelectorAll(".slider2");

btnright2.addEventListener("click", function(){
    slider2Index = slider2Index + 1;
    if(slider2Index > slider2.length - 4){
        slider2Index = 0;
        for(var i = 0; i < slider2.length ; i++){
            slider2[i].style.transform = "translateX(" + i*100 + "%)";
        }
    }
    for(var i = 0; i < slider2.length; i++){
        slider2[i].style.transform = "translateX(" + (i-slider2Index)*100 +"%";
    }
});

btnleft2.addEventListener("click", function(){
    slider2Index = slider2Index - 1;
    if(slider2Index < 0){
        slider2Index = 8;
        for(var i = 0; i < slider2.length ; i++){
            slider2[i].style.transform = "translateX(" + i*100 + "%)";
        }
    }
    for(var i = 0; i < slider2.length; i++){
        slider2[i].style.transform = "translateX(" + (i-slider2Index)*100 +"%";
    }
});

setInterval(function(){
    slider2Index = slider2Index + 1;
    if(slider2Index > slider2.length - 4){
        slider2Index = 0;
        for(var i = 0; i < slider2.length ; i++){
            slider2[i].style.transform = "translateX(" + i*100 + "%)";
        }
    }
    for(var i = 0; i < slider2.length; i++){
        slider2[i].style.transform = "translateX(" + (i-slider2Index)*100 +"%";
    }
}, 4000);
// nav fixed

let fixeda = document.querySelectorAll(".banner-top .banner-menu > li > a");
window.addEventListener("scroll", function(event){
    let scroll_y = this.scrollY;
    if(scroll_y >= 100){
        document.querySelector(".fixednav").style.background = "#fff";
        document.querySelector(".fixednav").style.top = "0";
        document.querySelector(".banner-top > h2").style.color = "#000";
        fixeda[0].style.color = "#000";
        fixeda[1].style.color = "#000";
        fixeda[2].style.color = "#000";
        fixeda[3].style.color = "#000";
        fixeda[4].style.color = "#000";
        fixeda[5].style.color = "#000";
    }
    else{
        document.querySelector(".fixednav").style.background = "rgba(133, 131, 131, 0.5)"
        document.querySelector(".fixednav").style.top = "35px";
        document.querySelector(".banner-top > h2").style.color = "#fff";
        fixeda[0].style.color = "#fff";
        fixeda[1].style.color = "#fff";
        fixeda[2].style.color = "#fff";
        fixeda[3].style.color = "#fff";
        fixeda[4].style.color = "#fff";
        fixeda[5].style.color = "#fff";
    }
});