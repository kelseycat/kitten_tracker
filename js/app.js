'use strict';

var photoArray = [ ];
var randInt1; //left
var randInt2; //right

var Photo = function(fileLocation, votes){ //constructor
	this.path = fileLocation;
	this.votes = 1;
}

//instances of your photos
var photo0 = new Photo('img/kittens/0.jpg', 1);
var photo1 = new Photo('img/kittens/1.jpg', 1);
var photo2 = new Photo('img/kittens/2.jpg', 1);
var photo3 = new Photo('img/kittens/3.jpg', 1);
var photo4 = new Photo('img/kittens/4.jpg', 1);
var photo5 = new Photo('img/kittens/5.jpg', 1);
var photo6 = new Photo('img/kittens/6.jpg', 1);
var photo7 = new Photo('img/kittens/7.jpg', 1);
var photo8 = new Photo('img/kittens/8.jpg', 1);
var photo9 = new Photo('img/kittens/9.jpg', 1);
var photo10 = new Photo('img/kittens/10.jpg', 1);
var photo11 = new Photo('img/kittens/11.jpg', 1);
var photo12 = new Photo('img/kittens/12.jpg', 1);
var photo13 = new Photo('img/kittens13.jpg', 1);

photoArray.push(photo0);
photoArray.push(photo1);
photoArray.push(photo2);
photoArray.push(photo3);
photoArray.push(photo4);
photoArray.push(photo5);
photoArray.push(photo6);
photoArray.push(photo7);
photoArray.push(photo8);
photoArray.push(photo9);
photoArray.push(photo10);
photoArray.push(photo11);
photoArray.push(photo12);
photoArray.push(photo13);
console.log(photoArray)

var Tracker = function(){
	this.leftPhoto;
	this.rightPhoto;
};

Tracker.prototype.displayWinnerLeft = function(){
    document.getElementById("leftPhoto").style.cssText = "border: 5px solid #BEEB9F";
    document.getElementById("nextButton").style.cssText = "visibility: visible;";
    photoArray[randInt1].votes = photoArray[randInt1].votes++;
    console.log("This cat has " + photoArray[randInt1].votes + " votes");
    //updateChart/votes
};

Tracker.prototype.displayWinnerRight = function(){
	document.getElementById("rightPhoto").style.cssText = "border: 5px solid #00A388";
	document.getElementById("nextButton").style.cssText = "visibility: visible;";
    photoArray[randInt2].votes = photoArray[randInt2].votes++;
    console.log("This cat has " + photoArray[randInt2].votes + " votes");
    //updateChart/votes
};

Tracker.prototype.displayPhotos = function(){
	document.getElementById("nextButton").style.cssText = "visibility: hidden;";
	document.getElementById("leftPhoto").style.cssText = "border: none";
	document.getElementById("rightPhoto").style.cssText = "border: none";
	randInt1 = Math.floor(Math.random() * 14);
	randInt2 = Math.floor(Math.random() * 14);
	while(randInt1 == randInt2){
		randInt2 = Math.floor(Math.random() * 14);
	};
	var leftPhoto = document.getElementById('leftPhoto');
	var rightPhoto = document.getElementById('rightPhoto');
	document.getElementById("rightPhoto").src = "img/kittens/" + randInt1 + ".jpg";
	document.getElementById("leftPhoto").src = "img/kittens/" + randInt2 + ".jpg";

    this.Pie = function(data,options){

            chart.Pie.defaults = {
                segmentShowStroke : true,
                segmentStrokeColor : "#fff",
                segmentStrokeWidth : 2,
                animation : true,
                animationSteps : 100,
                animationEasing : "easeOutBounce",
                animateRotate : true,
                animateScale : false,
                percentageInnerCutout : 50,
                onAnimationComplete : null

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

var track1 = new Tracker();
track1.displayPhotos();
var chooseLeft = document.getElementById('leftPhotoDiv');
chooseLeft.addEventListener('click', track1.displayWinnerLeft);
var chooseRight = document.getElementById('rightPhotoDiv');
chooseRight.addEventListener("click", track1.displayWinnerRight);

document.getElementById("nextButton").addEventListener('click', track1.displayPhotos);
document.getElementById("nextButton").style.cssText = "visibility: hidden;";

