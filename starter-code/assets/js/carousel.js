// Solution Inspiration https://stackoverflow.com/questions/16549183/jquery-iterate-through-an-array-by-using-onclick

let images = [
  'me.png',
  'coat-dog.jpg',
  'squirrel.jpg',
  'storm-trooper.jpg',
  'sunglasses-dog.jpg',
  'storm-hair.jpg'
];
counter = 0;
reverseCounter = images.length;

$('#left-button').click(function() {
  reverseCounter = reverseCounter - 1; // decrement your counter
  //resets the reverseCounter
  if (reverseCounter === -1) {
    reverseCounter = images.length - 1;
  }
  console.log('left-button clicked');
  console.log(images[reverseCounter]); // the new incremented value
  $('#top.one.dark.cover').css(
    'background-image',
    'url(' + `./artifacts/${images[reverseCounter]}` + ')'
  );
});

$('#right-button').click(function() {
  console.log('right-button clicked');
  counter = (counter + 1) % images.length; // increment your counter
  // the modulus (%) operator resets the counter to 0
  // when it reaches the length of the array
  console.log(images[counter]); // the new incremented value
  $('#top.one.dark.cover').css(
    'background-image',
    'url(' + `./artifacts/${images[counter]}` + ')'
  );
});

$('#top.one.dark.cover').css(
  'background-image',
  'url(' + `./artifacts/${images[counter]}` + ')'
);
