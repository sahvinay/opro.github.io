/*---------------------------------------------------------
* Template Name    : Kaylee | Responsive Personal Template
* Author           : CasanovasThemes
* Version          : 1.0
* Created          : November 2019
* File Description : Get Work JSON
*----------------------------------------------------------
*/
"use strict";
document.addEventListener("DOMContentLoaded", function(event) {

	var xmlhttp = new XMLHttpRequest();
	var url = "json/work.json";
	var nActualWork;

	var prev = document.getElementsByClassName("prev");
  	var next = document.getElementsByClassName("next");

	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myArr = JSON.parse(this.responseText);
	        loadBlog(myArr);
	    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function loadBlog(work){

		
		/*add the content in the section Work*/
		var paragraph = [];
		var icoFont = [];
		var node = document.createElement("DIV");
        node.className += "row grid";
	    for (var i = 0; i < work.length; i++) {
	    	//ICOFONT, FEATURES, FEATUREVALUE.
	    	var lengthIcoFont = [];
	    	lengthIcoFont[i] = 0;
			for(var prop in work[i].icoFont){
	    		if(work[i].icoFont.hasOwnProperty(prop)){
	            	lengthIcoFont[i]++;
	            }
	    	}
	    	for (var k = 0; k < lengthIcoFont[i]; k++) {
	    		icoFont[i] += "<li><i class=\"" + work[i].icoFont[k] + " main-color\"></i><div><p>" + work[i].features[k] + "</p></div><p>" + work[i].featureValue[k] + "</p></li>";
	    	}


	    	//ARTICLE
	    	var lengthArticle = [];
	    	lengthArticle[i] = 0;
	    	for(var prop in work[i].article){
	    		if(work[i].article.hasOwnProperty(prop)){
	            	lengthArticle[i]++;
	            }
	    	}
	    	for (var k = 0; k < lengthArticle[i]; k++) {
	    		 paragraph[i] += "<p>"+work[i].article[k]+"</p>";
	    	}


	        node.innerHTML += 
	        	"<div class=\"col-sm all " + work[i].featureValue[1].toLowerCase() + "\">" +
					"<div class=\"item\">" +
						"<div class = \"overlay\">" +
							"<div class=\"contentWork\">" +
								"<div class=\"work-project\">" +
									"<div class=\"columnProject1\">" +
										"<h3 class=\"main-color\">" + work[i].title + "</h3>" +
										"<div class=\"wrapper-img-popWork\">" +
											"<img src= '" + work[i].image + "' alt= '" + work[i].alt + "'>" +
										"</div>" +
										"<ul class=\"borderLeftColor\">" +
											icoFont[i] +
										"</ul>" +
										"<div class=\"columnButtons2\">" +
									    	"<a class=\"btn-casan main-color prev\"><<span class=\"main-backgroundColor\" style=\"top: -13.2118px; left: 217.892px;\"></span></a>" +
									    	"<a class=\"btn-casan main-color next\">><span class=\"main-backgroundColor\" style=\"top: -13.2118px; left: 217.892px;\"></span></a>" +
									    "</div>" +
									"</div>" +
									"<div class=\"columnProject2\">" +
										paragraph[i] +
										"<div class=\"columnButtons1\">" +
											"<a class=\"btn-casan main-color\" href=\"" + work[i].href + "\">VISIT<span class=\"main-backgroundColor\" style=\"top: -13.2118px; left: 217.892px;\"></span></a>" +
									    "</div>" +
									"</div>" +
								"</div>" +
							"</div>" +
							"<div class=\"titleProject\">" +
								"<h3 class=\"main-color\">" + work[i].title + "</h3>" +
								"<p>" + work[i].featureValue[1] + "</p>" +
							"</div>" + 
						"</div>" +
						"<img src= '" + work[i].image + "' alt=" + work[i].alt + ">" +
					"</div>" +
				"</div>";
			document.getElementsByClassName("filters-content")[0].insertAdjacentElement('beforeend',node);
			//remove undefined element 
	        var list = document.getElementsByClassName("columnProject2")[i]; 
	        list.removeChild(list.childNodes[0]);
	        var list2 = document.getElementsByClassName("columnProject1")[i].childNodes[2]; 
	        list2.removeChild(list2.firstChild);   
	    }
	    /*Isotope Options*/
	    $('.filters ul li').on("click", function() {
		    $('.filters ul li').removeClass('active');
		    $(this).addClass('active');
		    
		    var data = $(this).attr('data-filter');
		    $grid.isotope({
		      filter: data
		    })
		});
	    var $grid = $('.grid').imagesLoaded( function() {
		    $('.grid').isotope({
		      layoutMode : 'fitRows'
		    });
  		});
  		onclickWork();
	}
	function onclickWork(){
		var $tests = $(".overlay").on("click",function (e) {
	      nActualWork = $tests.index(this);
	      document.getElementById("pop-up-blog").style.display = "block";

	      var lengthContentWork = document.getElementsByClassName("contentWork").length;
	      for (var i = 0; i < lengthContentWork; i++) {
	        document.getElementsByClassName("contentWork")[i].style.display = "block";
	      }
	      //body overflow hidden:
	      document.getElementsByTagName("BODY")[0].style.overflow = "hidden";

	      if (e.target.tagName == "H3" || e.target.tagName == "P"){
	        var divContent = e.target.parentElement.parentElement.firstElementChild;
	      }else if (e.target.className == "titleProject" || e.target.tagName == "IMG") {
	        var divContent = e.target.parentElement.firstElementChild;
	      }else{
	        var divContent = e.target.firstElementChild;
	      }

	      document.getElementById("inner-popUp").innerHTML = divContent.innerHTML;
	      /*Create addEventListener of the buttons Prev and Next:*/
	      for (var i = 0; i < prev.length-2; i++) {
	        prev[i].addEventListener("click", function() {
	          nextWork(nActualWork, -1);
	        });
	      }
	      for (var i = 0; i < next.length-2; i++) {
	        next[i].addEventListener("click", function() {
	          nextWork(nActualWork, 1);
	        });
	      }
	    });
	}
	/*Slide Pop-up blog and Work*/
	function nextWork(nOldWork, n){
	    document.getElementById('pop-up-blog').scrollTop = 0;
	   
	    nActualWork = nOldWork + n;
	    if (nActualWork > next.length - 2) {
	      nActualWork = 0;
	    } else if (nActualWork < 0) {
	      nActualWork = next.length - 2;
	    }

	    document.getElementById("inner-popUp").innerHTML = document.getElementsByClassName("contentWork")[nActualWork].innerHTML;

	   
	    /*Create addEventListener of the buttons Prev and Next:*/
	    for (var i = 0; i < prev.length-1; i++) {
	      prev[i].addEventListener("click", function() {
	        nextWork(nActualWork, -1);
	      });
	    }
	    for (var i = 0; i < next.length-1; i++) {
	      next[i].addEventListener("click", function() {
	        nextWork(nActualWork, 1);
	      });
	    }
	}
});
				