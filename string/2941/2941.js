let input = require('fs').readFileSync('./input.txt').toString().trim();

const keyWord = ['c=','c-','dz=','d-','lj','nj','s=','z='];
for (let element of keyWord) {
  input = input.split(element).join('@');
}
console.log(input.length);