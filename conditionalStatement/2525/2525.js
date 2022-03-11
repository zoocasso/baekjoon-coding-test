const input = require('fs').readFileSync("./input.txt").toString().trim().split("\n");
const currentTime = input.shift().split(' ').map(x=>parseInt(x));
const currentHour = currentTime[0],
      currentMinute = currentTime[1];
const lapseTime = parseInt(input.shift()),
      lapseHour = Math.floor(lapseTime/60),
      lapseMinute = lapseTime%60;
let endHour = currentHour + lapseHour,
    endMinute = currentMinute + lapseMinute;

if(endMinute>59){
  endMinute -= 60;
  endHour += 1;
}
if(endHour>23){
  endHour %= 24;
}

console.log(endHour, endMinute);