function calc() {
var x1 = 0;
var y1 = 0;
var f1 = getTanDeg(-115);
var b1 = calcB(x1,y1,f1);

var x2 = 10;
var y2 = 10;
var f2 = getTanDeg(115);
var b2 = calcB(x2,y2,f2);

var xr = (b2 - b1)/(f1 - f2);
var yr = (f1 * xr) + b1;

console.log(xr + ',' + yr);
};

function getTanDeg(deg) {
  var rad = deg * Math.PI/180;
  return Math.tan(rad);
};

function calcB(x, y, f) {
var b = y - (f * x)
return b;
};