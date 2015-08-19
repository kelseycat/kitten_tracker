'use strict'
$(document).ready(function(){

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

photoArray.push(new Photo('cat 0',  'img/kittens/0.jpg',  1));
photoArray.push(new Photo('cat 1',  'img/kittens/1.jpg',  1));
photoArray.push(new Photo('cat 2',  'img/kittens/2.jpg',  1));
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



 });//end document ready
