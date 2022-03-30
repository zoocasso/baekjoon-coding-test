const input = require('fs').readFileSync('./input.txt').toString().trim().split('').map(x=>parseInt(x));
console.log(input.sort().reverse().join(''));