const input = require('fs').readFileSync('./input.txt').toString().trim().split('');

let output = 0;

for(i=0;i<input.length;i++){
  if(65<=input[i].charCodeAt(0) && input[i].charCodeAt(0)<=67){
    output = output + 3;
  }else if(68<=input[i].charCodeAt(0) && input[i].charCodeAt(0)<=70){
    output = output + 4;
  }else if(71<=input[i].charCodeAt(0) && input[i].charCodeAt(0)<=73){
    output = output + 5;
  }else if(74<=input[i].charCodeAt(0) && input[i].charCodeAt(0)<=76){
    output = output + 6;
  }else if(77<=input[i].charCodeAt(0) && input[i].charCodeAt(0)<=79){
    output = output + 7;
  }
  else if(80<=input[i].charCodeAt(0) && input[i].charCodeAt(0)<=83){
    output = output + 8;
  }else if(84<=input[i].charCodeAt(0) && input[i].charCodeAt(0)<=86){
    output = output + 9;
  }else if(87<=input[i].charCodeAt(0) && input[i].charCodeAt(0)<=90){
    output = output + 10;
  }
}

console.log(output);