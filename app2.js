

var frequentNumbers = function getFrequency(string) {
  var cleanString = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""),
  words = cleanString.split(' '),
  frequencies = {},
  word, frequency, i;

  for( i=0; i<words.length; i++ ) {
    word = words[i];
    frequencies[word] = frequencies[word] || 0;
    frequencies[word]++;
  }

  words = Object.keys( frequencies );

  var list=  words.sort(function (a,b) { return frequencies[b] -frequencies[a];})

// new code
// returning the first word from the list
  // var word = biggestword(list);

  return list;
}



document.getElementById("word_list");
// $('#word_list') //= [ element ]

function writeWords(){
  var word_cloud = document.getElementById("word_list");
  var paragraph = document.getElementById("paragraph");
  var wordArray = frequentNumbers(paragraph.value);
  sizeWords(wordArray);

  // word_cloud.innerHTML = frequentNumbers(paragraph.value);

}

// new code for biggest word
function positionbiggestword(theword){
  var word = theword;
  var para = document.createElement("p");
  var node = document.createTextNode(word);
  para.appendChild(node);m
  word = document.getElementById('word_list').appendChild(para);

  // var para = $('#word_list').append('<p>' + word + '</p>');

  word.style.marginTop = 35 +"px";
  word.style.marginLeft = 380 +"px";
  word.style.zIndex = 1000;
  return word;
}

function biggestword(word){
  // var array = array;
  // var word =  ;
  return positionbiggestword(word);
}




function sizeWords(array){
  var number = 100;


  for (var i = 0; i < array.length; i++){
    if (i == 0){
     biggestword = biggestword(array[i]);
     biggestword.style.color = "black";
     biggestword.style.fontSize = ( 150 + "px")

    }
    else{

    var para = document.createElement("p");
    var node = document.createTextNode(array[i]);
    para.appendChild(node);
    var smaller = document.getElementById('word_list').appendChild(para);
    number -= 1;
    smaller.style.fontSize = ( number + "px")


    smaller.style.color = shuffleFunction();


    var position = positionFunction(array.length);

    smaller.style.marginTop = position.margin_top;
    smaller.style.marginLeft = position.margin_left;
    smaller.style.zIndex = position.z_index;

}

 // smaller.position.placement = positionFunction();
}
}


// function domElements(array){

//   for (var i = 0; i < array.length; i++){
//     var para = document.createElement("p");
//     var node = document.createTextNode(array[i]);
//     para.appendChild(node);
//     return document.getElementById('word_list').appendChild(para);
//  // smaller.position.placement = positionFunction();
// }
// }


// function sizeWords(array){
//   var fontSize = 100;
//   for (var i = 0; i < array.length; i++){
//   fontSize = fontSize -= 1
//  var element = domElements(array).style.fontSize
//  element = ( fontSize + "px")
// }
// return element

// }

// function colorWords(array){

//   smaller.style.color = shuffleFunction();
// }

// function positionWords(array){
// smaller.style.marginTop = position.margin_top;
// smaller.style.marginLeft = position.margin_left;
// smaller.style.zIndex = position.z_index;

// var position = positionFunction(array.length);
// }

// function overLap(array){}



function shuffleFunction(){
  colorArray = ["red", "green", "yellow", "pink", "gray", "purple", "maroon", "orange", "blue"];
  newArray = shuffle(colorArray);
  color = newArray[0];
  return color
}

function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}



function positionFunction(number) {
  var randomtop = Math.floor(Math.random() * 68 - 150);
  var randomleft = Math.floor(Math.random() * 1000 - 150);
  var randomzindex = Math.floor(Math.random() * 450 - 150);
  var positionObject = {
    "margin_top": randomtop + "px",
    "margin_left": randomleft + "px",
    "z_index": randomzindex + "px"
  }
  return positionObject;
}




// NEW CODE for chunk and positioning
// Array.prototype.chunk = function(chunkSize) {
//     var array=this;
//     return [].concat.apply([],
//         array.map(function(elem,i) {
//             return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
//         })
//     );
// }

// function chunkNumber(array){
// var number = array / 5;
// var newArray = array.chunk(number);
// }

// function placeChunks(){

// while ( var i = 0; i < newArray[0].length; i++){


// // }}




var wordCloudManager = {
  repaint: function() {
    // draw the word cloud

  }
};

var windowManager = {
  x: null,
  y: null,
  onResize: function() {
    windowManager.x = $(window).innerWidth();
    windowManager.y = $(window).innerHeight();
    wordCloudManager.repaint();
  }
};

$(window).resize(windowManager.onResize);
