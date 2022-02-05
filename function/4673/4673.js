let arr = [];
function d(num){
  if(typeof num == "number"){
    num = num.toString();
  }
  list = num.split('');
  let selfNumber = parseInt(num);
  for(i=0;i<list.length;i++){
    selfNumber += parseInt(list[i]);
  };
  if(selfNumber>10000){
    return 0;
  }
  if(!arr.includes(selfNumber)){
    arr.push(selfNumber);
  }
  d(selfNumber);
}

for(j=1;j<10000;j++){
  if(!arr.includes(j)){
    console.log(j);
    d(j);
  }
}