const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const point1=input[0].split(' ').map(x=>parseInt(x)),
      point2=input[1].split(' ').map(x=>parseInt(x)),
      point3=input[2].split(' ').map(x=>parseInt(x));
let point4 = [];

function getRemainder(x,y,z){
  if(x[0]==y[0]){
    if(x[1]==z[1]){
      point4.push(z[0]);
      point4.push(y[1]);
    }
  }
  if(x[1]==y[1]){
    if(x[0]==z[0]){
      point4.push(y[0]);
      point4.push(z[1]);
    }
  }
}

getRemainder(point1,point2,point3);
getRemainder(point2,point1,point3);
getRemainder(point3,point1,point2);

console.log(point4[0], point4[1]);