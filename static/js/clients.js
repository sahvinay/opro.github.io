/*---------------------------------------------------------
* Template Name    : Kaylee | Responsive Personal Template
* Author           : CasanovasThemes
* Version          : 1.0.0
* Created          : March 2020
* File Description : Clients Js file
*----------------------------------------------------------
*/
"use strict";
document.addEventListener("DOMContentLoaded", function(event) {	
	var client = document.getElementsByClassName("client")[0];
	var marginPaddingClient = 50;
	var nClients = document.getElementsByClassName("client").length;
	var widthIndividualClient;
	
	sliderClients();
	appendLiClients();
	
	var leftOfClient;
	translateClients();

	/*Translate Clients*/
	function translateClients(){
		if (window.innerWidth <= 1050) {
		  leftOfClient = document.getElementsByClassName("bodySection")[0].offsetWidth / 1;
		}else if (window.innerWidth > 1050) {
		  leftOfClient = document.getElementsByClassName("bodySection")[0].offsetWidth / 2;
		}
		for (var i = 0; i < nClients; i++) {
		  let j = i;
		  document.getElementsByClassName("button-nav")[j].addEventListener("click", function() {
		    document.getElementsByClassName("button-nav")[j].classList.add("main-backgroundColor");
		    document.getElementsByClassName("button-nav")[j].style.width = "30px";
		    for (var g = 0; g < nClients; g++) {
		      if (g != j){
		        document.getElementsByClassName("button-nav")[g].classList.remove("main-backgroundColor");
		        document.getElementsByClassName("button-nav")[g].style.width = "20px";
		      }
		    }
		   if(window.innerWidth > 1050) {//2 clients on screen
		      if (j == nClients -1){
		        var n = nClients - 2;
		      }else {
		        var n = j;
		      }
		    }else if (window.innerWidth <= 1050) {//1 client on screen
		      var n = j;
		    }
		    // Code for Chrome, Safari, Opera
		    document.getElementsByClassName("wrapper-clients")[0].style.WebkitTransform = "translate3d("+(-(leftOfClient + 10)*n)+"px, 0px, 0px)"; 
		    // Code for IE9
		    document.getElementsByClassName("wrapper-clients")[0].style.msTransform = "translate3d("+(-(leftOfClient + 10)*n)+"px, 0px, 0px)"; 
		    // Standard syntax
		    document.getElementsByClassName("wrapper-clients")[0].style.transform = "translate3d("+(-(leftOfClient + 10)*n)+"px, 0px, 0px)";   

		  });
		}
		console.log("leftOfClient: "+ leftOfClient);
	}
	/*Slider clients*/
	function sliderClients(){
		if (window.innerWidth <= 1050) {
		  widthIndividualClient = (document.getElementsByClassName("bodySection")[0].offsetWidth / 1) - marginPaddingClient;
		}else if (window.innerWidth > 1050) {
		  widthIndividualClient = (document.getElementsByClassName("bodySection")[0].offsetWidth / 2) - marginPaddingClient;
		}
		var widthWrapperClients = (widthIndividualClient + 100 + marginPaddingClient)  * nClients;
		console.log("widthIndividualClient:"+widthIndividualClient);
		console.log("widthWrapperClient:"+widthWrapperClients);
		console.log("nClients: "+nClients);
		console.log("clientsOffsetWidth: "+document.getElementById("clients").offsetWidth);
		for (var i = 0; i < nClients; i++) {
		  document.getElementsByClassName("client")[i].style.width = (widthIndividualClient+"px");
		}
		document.getElementsByClassName("wrapper-clients")[0].style.width = widthWrapperClients+"px";
	}
	function appendLiClients(){
		console.log(nClients);
		for (var i = 0; i < nClients; i++) {
		  var v  = document.getElementById("ul-nav-clients").appendChild(document.createElement("LI"));
		  v.className += "li-nav-client";
		  var z = document.getElementsByClassName("li-nav-client")[i].appendChild(document.createElement("DIV"));
		  z.className += "button-nav";
		}
		hideLinksClients();
		document.getElementsByClassName("button-nav")[0].classList.add("main-backgroundColor");
		document.getElementsByClassName("button-nav")[0].style.width = "30px";
	}
	function hideLinksClients(){
		for (var i = 0; i < nClients; i++) {
		  if(window.innerWidth > 1050) {//2 clients on screen
		    if (i == nClients -1){
		      document.getElementsByClassName("li-nav-client")[i].style.display = "none";
		    }else if (i == nClients -2){
		      document.getElementsByClassName("li-nav-client")[i].style.display = "inline-block";
		    }
		  }else {
		    if (i == nClients -1 || i == nClients -2){
		      document.getElementsByClassName("li-nav-client")[i].style.display = "inline-block";
		    }
		  }
		}
	}
	//document.getElementById("topnav-menu").classList.toggle('animate');
	window.addEventListener('resize', function() {
		setTimeout(function(){
			sliderClients();
		    var n = 0;
		    if (window.innerWidth <= 1050) {
			  leftOfClient = document.getElementsByClassName("bodySection")[0].offsetWidth / 1;
			}else if (window.innerWidth > 1050) {
			  leftOfClient = document.getElementsByClassName("bodySection")[0].offsetWidth / 2;
			}
		    // Code for Chrome, Safari, Opera
		    document.getElementsByClassName("wrapper-clients")[0].style.WebkitTransform = "translate3d("+(-(leftOfClient + 10)*n)+"px, 0px, 0px)"; 
		    // Code for IE9
		    document.getElementsByClassName("wrapper-clients")[0].style.msTransform = "translate3d("+(-(leftOfClient + 10)*n)+"px, 0px, 0px)"; 
		    // Standard syntax
		    document.getElementsByClassName("wrapper-clients")[0].style.transform = "translate3d("+(-(leftOfClient + 10)*n)+"px, 0px, 0px)";   
		    
		    hideLinksClients();
		    document.getElementsByClassName("button-nav")[0].classList.add("main-backgroundColor");
			document.getElementsByClassName("button-nav")[0].style.width = "30px";
		    for (var g = 1; g < nClients; g++) {
		      document.getElementsByClassName("button-nav")[g].classList.remove("main-backgroundColor");
			  document.getElementsByClassName("button-nav")[g].style.width = "20px";
		    }
		}, 1000);
	}, true);

});