'use strict'

// Client ID : 7e9fbbc095aa5a9
// secret    : 40baa711baf9176200986315daf4c3501b177326
// kitten album https://api.imgur.com/3/album/DDoWy

$(document).ready(function(){

var photoArray = [ ];

$.ajax({
  url : 'https://api.imgur.com/3/album/DDoWy.json',
  method: 'GET',
  headers: {
    'Authorization' : 'Client-ID 7e9fbbc095aa5a9'
  }
})
.done(function(res){
  photoArray = res.data.images;
  console.log(photoArray);

  // for( var i = 0; i < photoArray.length; i++){
  //   photoArray[i].filePath = photoArray[i].link;
  // }
  showFromImgur();


})
.fail(function(err){
  console.log(err);
});

function showFromImgur(){
  $('#nextButton').css({'visibility': 'hidden'});
  $('.cat-photo').css({'border': 'none'});

  var random1 = Math.floor(Math.random()* photoArray.length + 1);
  var displayPic1 = '<img src" ' + photoArray[random1].link + '">';
  $('#leftPhotoDiv').html(displayPic1);

  var random2 = Math.floor(Math.random()* photoArray.length + 1);
  var displayPic2 = '<img src" ' + photoArray[random2].link + '">';
  $('#rightPhotoDiv').html(displayPic1);

  while(random1 === random2){
    random2 = Math.floor((Math.random()* photoArray.length)+1);
  }
    //chart.js
    Pie = function(data, options){
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
        value : 1,
        color : "#00A388",
      },
      {
        value : 1,
        color : "#BEEB9F" ,
      },

    ];

    var canvas = document.getElementById("catChart");
    var catChart = canvas.getContext("2d");
    new Chart(catChart).Pie(data);


    var startBrawl = new Tracker();
    startBrawl.displayPhotos();

    var leftKitty = document.getElementById('leftPhotoDiv');
    leftKitty.addEventListener('click', startBrawl.displayWinnerLeft);

    var rightKitty = document.getElementById('rightPhotoDiv');
    rightKitty.addEventListener('click', startBrawl.displayWinnerRight);

    document.getElementById('nextButton').addEventListener('click', startBrawl.displayPhotos);
    document.getElementById('nextButton').style.cssText = "visibility: hidden;"
  };



// $('anotherPic').click(function(){
//   showFromImgur();
//   console.log('hello');
// });



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
  photoArray[randomInt2].votes = parseInt(photoArray[randomInt2].votes)++;
  console.log("This cat has " + photoArray[randomInt2].votes + " votes.");
};


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
      value : 1,
      color : "#00A388",
    },
    {
      value : 1,
      color : "#BEEB9F" ,
    },

  ];

  var canvas = document.getElementById("catChart");
  var catChart = canvas.getContext("2d");
  new Chart(catChart).Pie(data);

});//end document ready

