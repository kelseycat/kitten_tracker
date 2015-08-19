'use strict'

// Client ID : 7e9fbbc095aa5a9
// secret    : 40baa711baf9176200986315daf4c3501b177326
// kitten album https://api.imgur.com/3/album/DDoWy

$(document).ready(function(){

$.ajax({
  url : 'https://api.imgur.com/3/album/DDoWy.JSON';
  method: 'GET';
  headers: {
    'Authorization' : 'Client-ID 7e9fbbc095aa5a9'
  }

});


var Photo = function(catName, filePath, votes){
  this.catName  = catName;
  this.filePath = filePath;
  this.votes    = 1;
};

//new object
var Tracker = function(){
  this.leftPhoto;
  this.rightPhoto;
};

//array of cat pictures
var photoArray = [ ];

photoArray.push(new Photo('bob',  'img/kittens/0.jpg',  1));
photoArray.push(new Photo('jim',  'img/kittens/1.jpg',  1));
photoArray.push(new Photo('fred',  'img/kittens/2.jpg',  1));
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

var randomInt1 = Math.floor((Math.random()* photoArray.length)+1);
var randomInt2 = Math.floor((Math.random()* photoArray.length)+1);

Tracker.prototype.displayWinnerLeft = function(){
  $('#leftPhoto').css({'border': '5px solid #BEEB9F'});
  $('#nextButton').css({'visibility': 'visible'});
  $('#rightPhoto').css({'border': 'none'});
  photoArray[randomInt1].votes = (photoArray[randomInt1].votes)++;
  console.log("This cat has " + photoArray[randomInt1].votes + " votes.");
};


Tracker.prototype.displayWinnerRight = function(){
  $('#rightPhoto').css({'border': '5px solid #00A388'});
  $('#nextButton').css({'visibility': 'visible'});
  $('#leftPhoto').css({'border': 'none'});
  photoArray[randomInt2].votes = (photoArray[randomInt2].votes)++;
  console.log("This cat has " + photoArray[randomInt2].votes + " votes.");
};


Tracker.prototype.displayPhotos = function(){
  $('#nextButton').css({'visibility': 'hidden'});
  $('.cat-photo').css({'border': 'none'});
  console.log(randomInt1);
  console.log(randomInt2);

  while(randomInt1 === randomInt2){
    randomInt2 = Math.floor((Math.random()* photoArray.length)+1);
  };

  var leftPhoto = document.getElementById("leftPhoto");
  var rightPhoto = document.getElementById("rightPhoto");
  document.getElementById("rightPhoto").src = photoArray[randomInt1].filePath;
  document.getElementById("leftPhoto").src = photoArray[randomInt2].filePath;

  //chart.js
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
    return new Pie(data, config, context);
  };
  var data = [
    {
      value : photoArray[randomInt1].votes,
      color : "#00A388",
    },
    {
      value : photoArray[randomInt2].votes,
      color : "#BEEB9F" ,
    },

  ];

  var canvas = document.getElementById("catChart");
  var catChart = canvas.getContext("2d");
  new Chart(catChart).Pie(data);

}

var startBrawl = new Tracker();
startBrawl.displayPhotos();

var leftKitty = document.getElementById('leftPhotoDiv');
leftKitty.addEventListener('click', startBrawl.displayWinnerLeft);

var rightKitty = document.getElementById('rightPhotoDiv');
rightKitty.addEventListener('click', startBrawl.displayWinnerRight);

document.getElementById('nextButton').addEventListener('click', startBrawl.displayPhotos);
document.getElementById('nextButton').style.cssText = "visibility: hidden;"

 });//end document ready
