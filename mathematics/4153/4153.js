const input = require('fs').readFileSync('./input.txt').toString().split('\n');

let i = 0
let isTrue = '';
let location = 0;

function getLarger(arr){
  if(arr[0]>arr[1]){
    if(arr[0]>arr[2]){
      location = 0;
    }else{
      location = 2;
    }
  }else{
    if(arr[1]>arr[2]){
      location = 1;
    }else{
      location = 2;
    }
  }
}

function isTri(arr,num){
  if(num==0){
   if(Math.pow(arr[location],2)==Math.pow(arr[1],2)+Math.pow(arr[2],2)){
     isTrue += 'right';
   }else{
     isTrue += 'wrong';
   }
  }
  if(num==1){
   if(Math.pow(arr[location],2)==Math.pow(arr[0],2)+Math.pow(arr[2],2)){
     isTrue += 'right';
   }else{
     isTrue += 'wrong';
   }
  }
  if(num==2){
   if(Math.pow(arr[location],2)==Math.pow(arr[1],2)+Math.pow(arr[0],2)){
     isTrue += 'right';
   }else{
     isTrue += 'wrong';
   }
  }
}
while(input[i]!='0 0 0'){
  isTrue = '';
  arr = input[i].split(' ').map(x=>parseInt(x))
  getLarger(arr);
  isTri(arr,location);
  console.log(isTrue);
  i++;
}