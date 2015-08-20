'use strict';

$(document).ready(function(){

    var photoArray = [ ];

    var Photo = function(catName, path, votes){ //constructor
    this.catName = catName;
    this.path = path;
    this.votes = 1;
    };

$.ajax({
  url : 'https://api.imgur.com/3/album/DDoWy.json',
  method: 'GET',
  headers: {
    'Authorization' : 'Client-ID 7e9fbbc095aa5a9'
  }
})
.done(function(response){
    photoArray = response.data.images;
    console.log(photoArray);

    for (var i = 0; i < photoArray.length; i++){
        photoArray[i].path = photoArray[i].link;
        photoArray[i].votes = photoArray[i].votes++;
    };

    displayPhotos();
}) //response
.fail(function(error){
    console.log(error);
}) //fail

var Tracker = function(){
    this.leftPhoto;
    this.rightPhoto;
    };


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
  document.getElementById("rightPhoto").src = photoArray[randInt1].path; //add jquery
  document.getElementById("leftPhoto").src = photoArray[randInt2].path; // add jquery

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

}); //end doc ready
