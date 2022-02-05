const input = require('fs').readFileSync('.input.txt').toString().trim();

let count = 0;

function d(num){
  if(typeof num == 'number'){
    num = num.toString();
  }
  let element = num.split('');
  if(num<100){
    count = count + 1;
  }else{
    let isTrue = 0;
    for(i=0;i<element.length-2;i++){
      if(element[i] - element[i+1] == element [i+1] - element[i+2]){
        isTrue = isTrue + 1;
      }
    }
    if(isTrue == i){
      count = count + 1;
    }
  }
}

for(j=1;j<=input;j++){
  d(j);
}

console.log(count);