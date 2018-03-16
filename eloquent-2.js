// Looping a triangle
for (var i = 1; i < 8; i++) {
  console.log('#'.repeat(i));
}

// FizzBuzz
for (var i = 1; i < 101; i++) {
  var result = '' + i;
  if (i%5 == 0) {
    result = 'Buzz';
  }
  if (i%3 == 0) {
    result = 'Fizz';
    if (i%5 == 0) {
      result += 'Buzz';
    }
  }
  console.log(result);
}

//Chessboard
var size = 8;

var cellA = ' #',
    cellB = '# ';

var lineA = cellA.repeat(size/2);
if (size%2 ==1) lineA += ' ';

var lineB = cellB.repeat(size/2);
if (size%2 ==1) lineB += '#';

for (var i = 0; i < size; i++) {
  if (i%2 == 0) {
    console.log(lineA);
  } else {
    console.log(lineB);
  }
}