function getFrequency(string) {
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

console.log(list);

for( i=0; i<words.length; i++ ) {
 console.log(list[i]);
 // /implement wordsize function
}}

console.log(getFrequency("jon, james, james, jim"));