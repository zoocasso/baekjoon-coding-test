const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(x=>parseInt(x));
const N = input.shift();
const result = input.sort((a, b) => a - b);
console.log(result.join('\n'));