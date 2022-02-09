let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

const N = parseInt(input[0]);
let countGroupWord = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const letter = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }

  if (isGroupWord) {
    countGroupWord += 1;
  }
}

console.log(countGroupWord);