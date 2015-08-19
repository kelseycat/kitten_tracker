'use strict';

var Photo = function(catName, fileLocation, votes){ //constructor
    this.catName = catName;
    this.path = fileLocation;
    this.votes = 1;
};

var Tracker = function(){
    this.leftPhoto;
    this.rightPhoto;
};

var photoArray = [ ];
photoArray.push(new Photo('cat 0',  'img/kittens/0.jpg',  1));
photoArray.push(new Photo('cat 1',  'img/kittens/1.jpg',  1));
photoArray.push(new Photo('cat 2',  'img/kittens/2.jpg',  1));
photoArray.push(new Photo('cat 3',  'img/kittens/3.jpg',  1));
photoArray.push(new Photo('cat 4',  'img/kittens/4.jpg',  1));
photoArray.push(new Photo('cat 5',  'img/kittens/5.jpg',  1));
photoArray.push(new Photo('cat 6',  'img/kittens/6.jpg',  1));
photoArray.push(new Photo('cat 7',  'img/kittens/7.jpg',  1));
photoArray.push(new Photo('cat 8',  'img/kittens/8.jpg',  1));
photoArray.push(new Photo('cat 9',  'img/kittens/9.jpg',  1));
photoArray.push(new Photo('cat 10', 'img/kittens/10.jpg', 1));
photoArray.push(new Photo('cat 11', 'img/kittens/11.jpg', 1));
photoArray.push(new Photo('cat 12', 'img/kittens/12.jpg', 1));
photoArray.push(new Photo('cat 13', 'img/kittens/13.jpg', 1));
console.log(photoArray);

//generate random images
var randInt1; //left
var randInt2; //right

Tracker.prototype.displayWinnerLeft = function(){
    document.getElementById("leftPhoto").style.cssText = "border: 5px solid #BEEB9F"; //jquery
    document.getElementById("nextButton").style.cssText = "visibility: visible;"; //jquery
    document.getElementById("rightPhoto").style.cssText = "border: none"; //jquery
    photoArray[randInt1].votes = photoArray[randInt1].votes + 1;
    console.log("This cat has " + photoArray[randInt1].votes + " votes");
    //updateChart/votes
};

Tracker.prototype.displayWinnerRight = function(){
	document.getElementById("rightPhoto").style.cssText = "border: 5px solid #00A388"; //jquery
	document.getElementById("nextButton").style.cssText = "visibility: visible;"; //jquery
    document.getElementById("leftPhoto").style.cssText = "border: none";//jquery
    photoArray[randInt2].votes = photoArray[randInt2].votes + 1;
    console.log("This cat has " + photoArray[randInt2].votes + " votes");
    //updateChart/votes
};

Tracker.prototype.displayPhotos = function(){
	document.getElementById("nextButton").style.cssText = "visibility: hidden;";
	document.getElementById("leftPhoto").style.cssText = "border: none";
	document.getElementById("rightPhoto").style.cssText = "border: none";

    randInt1 = Math.floor(Math.random() * photoArray.length);
	randInt2 = Math.floor(Math.random() * photoArray.length);

    while(randInt1 === randInt2){
		randInt2 = Math.floor(Math.random() * photoArray.length);
	};

	var leftPhoto = document.getElementById("leftPhoto"); //add jquery
	var rightPhoto = document.getElementById("rightPhoto"); //add jquery
	document.getElementById("rightPhoto").src = "img/kittens/" + randInt1 + ".jpg"; //add jquery
	document.getElementById("leftPhoto").src = "img/kittens/" + randInt2 + ".jpg"; // add jquery

    //using chart.js
    this.Pie = function(data, options){
            chart.Pie.defaults = {
                segmentShowStroke : true,
                segmentStrokeColor : "#fff",
                segmentStrokeWidth : 2,
                percentageInnerCutout : 50,
                animation : true,
                animationSteps : 100,
                animationEasing : "easeOutBounce",
                animateRotate : true,
                animateScale : false,
                onAnimationComplete : null,

            };
            var config = (options)? mergeChartConfig(chart.Pie.defaults,options) : chart.Pie.defaults;
            return new Pie(data,config,context);
        };
        var data = [
            {
                value : photoArray[randInt2].votes,
                color : "#00A388",
            },

            {
                value: photoArray[randInt1].votes,
                color:"#BEEB9F",
            },

        ];
        var canvas = document.getElementById("catChart");
        var catChart = canvas.getContext("2d");
        new Chart(catChart).Pie(data);
}

//new instance of project
var track1 = new Tracker();
track1.displayPhotos();
var chooseLeft = document.getElementById('leftPhotoDiv'); //jquery
chooseLeft.addEventListener('click', track1.displayWinnerLeft);

var chooseRight = document.getElementById('rightPhotoDiv'); //jquery
chooseRight.addEventListener("click", track1.displayWinnerRight);

document.getElementById("nextButton").addEventListener('click', track1.displayPhotos); //jquery
document.getElementById("nextButton").style.cssText = "visibility: hidden;"; //jquery

