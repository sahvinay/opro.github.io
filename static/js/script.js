/*---------------------------------------------------------
* Template Name    : Kaylee | Responsive Personal Template
* Author           : CasanovasThemes
* Version          : 1.0.0
* Created          : April 2020
* File Description : Main Js file of the template
*----------------------------------------------------------
*/
// Whole-script strict mode syntax
"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
  var intervalInner;
  var innerPercent = false;
  var firstTime = 0;

  changeHeaderScroll();
  heightHome();
  colorActiveMenu();
  msieversion();

  //MENU MOBILE (Openning and closing menu):
  var openOrClose = 1;
  var nActualWork;
  var waitingTimeScroll;

  /*PAGE LOADER*/
  window.onload = function() {
    document.getElementsByClassName("container-loader-pre")[0].style.visibility = "hidden";
    document.getElementsByClassName("container-loader-pre")[0].style.opacity = "0";
    document.getElementsByClassName("container-loader-pre")[0].style.transition = "0.5s";
    $("body").css({"overflow":"auto"});
  };
  /**/
  //VIDEO
  setTimeout(function(){
    var video = document.getElementById("video");
    /*Load the video after document was loaded*/
    video.play();
    video.muted = true;
    video.setAttribute("playsinline",null);
    video.loop = true;
  }, 3000);
  //
  document.getElementById("ico-menu").addEventListener("click", openCloseMenu);
  document.getElementById("a-home").addEventListener("click", openCloseMenu);
  document.getElementById("a-about-me").addEventListener("click", openCloseMenu);
  document.getElementById("a-services").addEventListener("click", openCloseMenu);
  document.getElementById("a-work").addEventListener("click", openCloseMenu);
  document.getElementById("a-clients").addEventListener("click", openCloseMenu);
  document.getElementById("a-blog").addEventListener("click", openCloseMenu);
  document.getElementById("a-contact-me").addEventListener("click", openCloseMenu);

  for (let i = 0; i < document.getElementById("list-nav").childElementCount; i++) {
    document.getElementById("list-nav").children[i].firstElementChild.addEventListener("mouseover",function() {
      document.getElementById("list-nav").children[i].classList.add("hover-li-background");
    });
  }
  for (let i = 0; i < document.getElementById("list-nav").childElementCount; i++) {
    document.getElementById("list-nav").children[i].firstElementChild.addEventListener("mouseout",function() {
      document.getElementById("list-nav").children[i].classList.remove("hover-li-background");
    });
  }


  for (let i = 0; i < document.getElementsByClassName("social-media").length; i++) {
    document.getElementsByClassName("social-media")[i].addEventListener("mouseover",function() {
      document.getElementsByClassName("social-media")[i].classList.add("main-color");
    });
  }
  for (let i = 0; i < document.getElementsByClassName("social-media").length; i++) {
    document.getElementsByClassName("social-media")[i].addEventListener("mouseout",function() {
      document.getElementsByClassName("social-media")[i].classList.remove("main-color");
    });
  }


  for (var i = 0; i < document.getElementsByClassName("logo").length; i++) {
    document.getElementsByClassName("logo")[i].addEventListener("click", function() {
      document.location.href = "#home";
    });
  }
  
  var lengthContentWork = document.getElementsByClassName("contentWork").length;
  

  document.getElementById("close").addEventListener("click", closeblogPopUp);
  //BUTTON $(function() {  
  $('.btn-casan')
    .on('mouseenter', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    });
  //open pop-up:
  function closeblogPopUp(){
    document.getElementById('pop-up-blog').scrollTop = 0;
    document.getElementById("pop-up-blog").style.display = "none";
    document.getElementsByTagName("BODY")[0].style.overflow = "auto";

    //show text 'read more':
    var lengthContentWork = document.getElementsByClassName("contentWork").length;
    for (var i = 0; i < lengthContentWork; i++) {
      document.getElementsByClassName("contentWork")[i].style.display = "none";
    }
  }
  function openCloseMenu(){
    if (window.innerWidth <=1050) {
      document.getElementById("ico-menu").classList.toggle("change");
      openOrClose = openOrClose + 1;// if is pair is closed and if is odd is openned.
      if (openOrClose % 2 != 0) {//It's closed
        document.getElementById("list-nav").style.opacity = "0";
        document.getElementById("list-nav").style.height = "0";
        setTimeout(function(){
          document.getElementById("list-nav").style.display = "none";
        }, 500);
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
          document.getElementById("header_nav").classList.add("header-nav-color");
        }else{
          document.getElementById("header_nav").classList.remove("header-nav-color");
          document.getElementById("header_nav").style.background = "transparent";
        }
      } else if (openOrClose % 2 == 0){//It's oppned
        
        document.getElementById("list-nav").style.display = "block";
        document.getElementById("list-nav").style.height = "440px";
        document.getElementById("list-nav").style.opacity = "1";
        document.getElementById("header_nav").classList.add("header-nav-color");
      }
    }else{
      document.getElementById("list-nav").style.height = "100%";
      document.getElementById("list-nav").style.opacity = "1";
    }
  }
  function changeHeaderScroll(){
    //Change the background of the header nav on scroll:
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.getElementById("header_nav").classList.add("header-nav-color");
      for (var i = 0; i < document.getElementsByClassName("li-no-active").length; i++) {
        document.getElementsByClassName("li-no-active")[i].style.borderLeft = "1px solid rgba(224, 224, 224, 0.1)";
      }
    }else{
      document.getElementById("header_nav").classList.remove("header-nav-color");
      document.getElementById("header_nav").style.background = "transparent";
      for (var i = 0; i < document.getElementsByClassName("li-no-active").length; i++) {
        document.getElementsByClassName("li-no-active")[i].style.borderLeft = "none";
      }
    }
    //show and hide arrowUp on scroll:
    if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050) {
      document.getElementById("arrowUp").style.display = "block";
    }else{
      document.getElementById("arrowUp").style.display = "none";
    }
  }
  //Calculate Height Home
  function heightHome(){
    var height_screen = window.innerHeight;   
    document.getElementById("home").style.height = height_screen+"px";  
    document.getElementsByClassName("titles")[0].style.height = height_screen+"px";  
  }
  //Transition skills - width bar-inner:
  window.onscroll = function(){
    skillsAnimation();
  }
  function skillsAnimation(){
    changeHeaderScroll();//call function on scroll
    var height_screen = window.innerHeight;
    var width_screen = window.innerWidth;
    colorActiveMenu();
    var height_skills = document.getElementById("skills");
    var height_works = document.getElementById("work");
    if (innerPercent == false) { 
      if (isElementInViewport(height_skills)) {  
        firstTime++;
        onetime();
        document.getElementsByClassName("bar-inner")[0].style.width = "90%";
        document.getElementsByClassName("bar-inner")[1].style.width = "95%";
        document.getElementsByClassName("bar-inner")[2].style.width = "70%";
        document.getElementsByClassName("bar-inner")[3].style.width = "80%";
        document.getElementsByClassName("bar-inner")[4].style.width = "75%";      
        document.getElementsByClassName("bar-inner")[5].style.width = "85%";
        
      }
    }
  }
  function onetime(){
    //number percentage:
    if (firstTime <= 1) {
      intervalInner = setInterval(function(){
        var percentage_0 = new Array(6);
        for (var i = 0; i < 6; i++) {
          percentage_0[i] = (document.getElementsByClassName("bar-inner")[i].offsetWidth / document.getElementsByClassName("bar-inner")[i].parentElement.offsetWidth) * 100;
          document.getElementsByClassName("bar-value")[i].innerHTML = Math.round(percentage_0[i]) + "%";
        }
      }, 50);
    }
  }
  function stopIntervalInner(){
    clearInterval(intervalInner);
  }
  function colorActiveMenu(){
    var c = document.getElementById("list-nav").childElementCount;
    if (window.innerWidth > 1050) {
      for (var i = 0; i < c; i++) {
        document.getElementById("list-nav").children[i].classList.remove("main-color");
      }
      var versionLi = "borderBottomColor";
    }else if (window.innerWidth <= 1050){
      for (var i = 0; i < c; i++) {
        document.getElementById("list-nav").children[i].classList.remove("borderBottomColor");
      }
        var versionLi2 = "main-color";
    }

    //change color of the links of the top menu if section is in viewport:
    if (document.body.scrollTop >= document.getElementById("contact").offsetTop - 2 || document.documentElement.scrollTop >= document.getElementById("contact").offsetTop - 2) {
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-contact-me").parentElement){
          document.getElementById("list-nav").children[i].classList.add(versionLi);
          document.getElementById("list-nav").children[i].classList.add("main-color");
        }else{
          document.getElementById("list-nav").children[i].classList.remove(versionLi);
          document.getElementById("list-nav").children[i].classList.remove("main-color");
        }
      }
    }else if (document.body.scrollTop >= document.getElementById("blog").offsetTop - 2 || document.documentElement.scrollTop >= document.getElementById("blog").offsetTop - 2){
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-blog").parentElement){
          document.getElementById("list-nav").children[i].classList.add(versionLi);
          document.getElementById("list-nav").children[i].classList.add("main-color");
        }else{
          document.getElementById("list-nav").children[i].classList.remove(versionLi);
          document.getElementById("list-nav").children[i].classList.remove("main-color");
        }
      }
    }else if (document.body.scrollTop >= document.getElementById("clients").offsetTop - 2 || document.documentElement.scrollTop >= document.getElementById("clients").offsetTop - 2) {
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-clients").parentElement){
          document.getElementById("list-nav").children[i].classList.add(versionLi);
          document.getElementById("list-nav").children[i].classList.add("main-color");
        }else{
          document.getElementById("list-nav").children[i].classList.remove(versionLi);
          document.getElementById("list-nav").children[i].classList.remove("main-color");
        }
      }
    }else if (document.body.scrollTop >= document.getElementById("work").offsetTop - 2 || document.documentElement.scrollTop >= document.getElementById("work").offsetTop - 2) {
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-work").parentElement){
          document.getElementById("list-nav").children[i].classList.add(versionLi);
          document.getElementById("list-nav").children[i].classList.add("main-color");
        }else{
          document.getElementById("list-nav").children[i].classList.remove(versionLi);
          document.getElementById("list-nav").children[i].classList.remove("main-color");
        }
      }
    }else if (document.body.scrollTop >= (document.getElementById("services").offsetTop  - 2) || document.documentElement.scrollTop >= (document.getElementById("services").offsetTop - 2) ) {
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-services").parentElement){
          document.getElementById("list-nav").children[i].classList.add(versionLi);
          document.getElementById("list-nav").children[i].classList.add("main-color");
        }else{
          document.getElementById("list-nav").children[i].classList.remove(versionLi);
          document.getElementById("list-nav").children[i].classList.remove("main-color");
        }
      }
    }else if (document.body.scrollTop >= (document.getElementById("about").offsetTop  - 2) || document.documentElement.scrollTop >= (document.getElementById("about").offsetTop - 2) ) {
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-about-me").parentElement){
          document.getElementById("list-nav").children[i].classList.add(versionLi);
          document.getElementById("list-nav").children[i].classList.add("main-color");
        }else{
          document.getElementById("list-nav").children[i].classList.remove(versionLi);
          document.getElementById("list-nav").children[i].classList.remove("main-color");
        }
      }
    }else if (document.body.scrollTop >= (document.getElementById("home").offsetTop  - 2) || document.documentElement.scrollTop >= (document.getElementById("home").offsetTop - 2) ) {
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-home").parentElement){
          document.getElementById("list-nav").children[i].classList.add(versionLi);
          document.getElementById("list-nav").children[i].classList.add("main-color");
        }else{
          document.getElementById("list-nav").children[i].classList.remove(versionLi);
          document.getElementById("list-nav").children[i].classList.remove("main-color");
        }
      }
    }
  }
  window.addEventListener('resize', function() {
    skillsAnimation();
    colorActiveMenu();
    heightHome();
    if (window.innerWidth > 1050) {
      heightHome();
      document.getElementById("list-nav").style.height = "100%";
      document.getElementById("list-nav").style.display = "flex";
      changeHeaderScroll();
      waitingTimeScroll = 0;
      document.getElementById("list-nav").style.opacity = "1"; 
    }else if (window.innerWidth <= 1050){
      if (document.getElementsByClassName("bar1")[0].style.marginTop == 0) {//the ico-menu is in mode 'X' so the menu will be oppenned
        document.getElementById("list-nav").style.display = "none";
      }else {
        document.getElementById("list-nav").style.display = "block";
      }
      waitingTimeScroll = 600;
      if (openOrClose % 2 == 0){
        document.getElementById("list-nav").style.opacity = "1";
      }else if (openOrClose % 2 != 0 ) {
        document.getElementById("list-nav").style.opacity = "0";
      }
    }
  }, true);
  /*Detect the browser and if is explorer asign file css*/
  function msieversion(){
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);

    if ( isIE ) {
      //IE specific code goes here
      var lengthCol = document.getElementsByClassName("col").length;
      var link=document.createElement('link');
      link.type="text/css";
      link.rel="stylesheet";
      link.href="css/explorer.css";
      document.getElementsByTagName('head')[0].appendChild(link);
    }else{
      //Other Browser
    }
  }
  //Check if an element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
  }
});