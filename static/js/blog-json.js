/*---------------------------------------------------------
* Template Name    : Kaylee | Responsive Personal Template
* Author           : CasanovasThemes
* Version          : 1.0
* Created          : April 2020
* File Description : Get Blog JSON
*----------------------------------------------------------
*/
// Whole-script strict mode syntax
"use strict";
document.addEventListener("DOMContentLoaded", function(event) { 

var xmlhttp = new XMLHttpRequest();
var url = "json/blog.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        loadBlog(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
function loadBlog(blog){

	var d;
	var g = 1;
	
	if (window.innerWidth > 800) {
		window.addEventListener('resize', nBlogsToShow);
	}
	function nBlogsToShow(){
		console.log("width window: "+window.innerWidth);
		itemsForLine();

		var x = (blog.length - d);
		for (var i = 0; i < blog.length; i++) {
			if(i < x){
	        	document.getElementsByClassName("blog")[i].style.display = "none";
	        }else{
	        	document.getElementsByClassName("blog")[i].style.display = "block";
	        }
	    }
	    if (x > 0) {//if there are one or more blogs with display none, show link. 
	    	if (document.getElementById("showLess")) {
	    		document.getElementById("showLess").remove();
	    	}
	    	if (document.getElementById("showMore")) {
	    		document.getElementById("showMore").remove();
	    	}
    		var nodeP = document.createElement("A");
	    	nodeP.setAttribute("id", "showMore");
	    	nodeP.setAttribute("class", "main-color");
	    	document.getElementById("grid-blog").appendChild(nodeP);
	    	document.getElementById("showMore").innerHTML = "Show more";
	    	document.getElementById("showMore").addEventListener("click", showMoreBlogs);
	    
	    }else if (x <= 0) {// if there aren't more blogs to display, remove link
	    	if (document.getElementById("showMore")) {
	    		document.getElementById("showMore").remove();
	    		
	    	}
	    }
	}
	function itemsForLine(){
		if (window.innerWidth <= 700) {
			d = 2;//Show 2
		}else if (window.innerWidth <= 1050){
			d = 2;//Show 2
		}else if (window.innerWidth > 1050) {
			d = 3;//Show 3
		}
		return d;
	}

	/*add the content in the section Blog*/
	var paragraph = [];

    for (var i = 0; i < blog.length; i++) {
    	var lengthArticle = [];
    	lengthArticle[i] = 0;
    
    	for(var prop in blog[i].article){
    		if(blog[i].article.hasOwnProperty(prop)){
            	lengthArticle[i]++;
            }
    	}

    	for (var k = 0; k < lengthArticle[i]; k++) {
    		 paragraph[i] += "<p>"+blog[i].article[k]+"</p>";
    	}
        var node = document.createElement("DIV");
        node.className += "col col-"+i+" blog";
        node.innerHTML += 
        	  "<div class=\"title-popUp main-color\">Blog Post</div>" +
	    	  "<div class=\"popUp-wrapper-img\">" +
	          	"<img class=\"pop-up-blog-img\" src= '" + blog[i].image + "' alt='" + blog[i].alt + "'>" +
	          	"<div class=\"date main-backgroundColor\">" +
	              "<p>" + blog[i].date +"</p>" +
	            "</div>" +
	          "</div>" +
	          "<div class = \"wrap-blog\">" +
	            "<div class=\"blog-title\">" +
	              "<h3 class=\"post-title\">" +  blog[i].title + "</h3>" +
	            "</div>" +
	            "<div class=\"marginTopText\">" +
	            	"<div></div>" +
	            	paragraph[i] +
	            "</div>" +
	          "</div>";
        document.getElementById("grid-blog").insertAdjacentElement('beforeend',node);
        //remove undefined element 
        var list = document.getElementsByClassName("marginTopText")[i]; 
        list.removeChild(list.childNodes[1]);    
    }
 	nBlogsToShow();
 	var lengthblog = document.getElementsByClassName("blog").length;
	for (var i = 0; i < lengthblog; i++) {
		document.getElementsByClassName("blog")[i].addEventListener("click",function() {
	
		    //copy div of the new clicked:
		    document.getElementById("pop-up-blog").style.display = "block";
		    document.getElementById("inner-popUp").innerHTML = this.innerHTML; 

		    //body overflow hidden:
		    document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
		});
  	}
  	/*Add className on the elements child of each blog except the first child (div)  and  the firat paragraph(0)*/
 
    for (var i = 0; i < document.getElementsByClassName("marginTopText").length; i++) {
      var c = document.getElementsByClassName("marginTopText")[i].childNodes;
      for( var j = 2; j < c.length; j++){
      	if(j == 2){
      		c[j].className += " blockquote borderLeftColor";
      	}
      	c[j].className += " restP";
      }
    }

  	function showMoreBlogs(){
  		itemsForLine();
  		var x = (blog.length - d);
  		console.log(x - g);
  		if (x - g >= 0) {
  			for (var i = 0; i < blog.length; i++) {
  				if(i == x-g){
  					document.getElementsByClassName("blog")[i].style.display = "block";
		  			g++;
  				}
	  		}
  		}
  		if (x - g <0) {
  			document.getElementById("showMore").remove();
  		
	  		var nodeRemove = document.createElement("A");
	    	nodeRemove.setAttribute("id", "showLess");
	    	nodeRemove.setAttribute("class", "main-color");
	    	document.getElementById("grid-blog").appendChild(nodeRemove);
	    	document.getElementById("showLess").innerHTML = "Show less";
	    	document.getElementById("showLess").addEventListener("click", function() {
	    		nBlogsToShow();
	    		document.getElementById('blog').scrollIntoView();
			});
  		}
  		if (x - g < 0){
  			g = 1;
  		}
  	}
}

});