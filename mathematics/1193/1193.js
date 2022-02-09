let input = parseInt(require('fs').readFileSync('./input.txt').toString());

let line = 0;
while(input > 0){
  line++;
  input -= line;
}

let num = line + input - 1;

if(line%2==0){
  console.log(`${1+num}/${line-num}`);
}else{
  console.log(`${line-num}/${1+num}`);
}