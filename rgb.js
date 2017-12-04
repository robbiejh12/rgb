function update(){
	var r = document.getElementById("red").value;
	var g = document.getElementById("green").value;
	var b = document.getElementById("blue").value;
	draw(r, g, b);
	write(r, g, b);
	toHex(r, g, b);
}

function draw(r, g, b){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillRect(0, 0, 150, 150);
	ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
}

function write(r, g, b){
	document.getElementById('rv').innerHTML = r
	document.getElementById('gv').innerHTML = g
	document.getElementById('bv').innerHTML = b
}

function toHex(r, g, b){
	var hr = ("0" + (+r).toString(16)).substr(-2);
	var hg = ("0" + (+g).toString(16)).substr(-2);
	var hb = ("0" + (+b).toString(16)).substr(-2);
	document.getElementById('hex').innerHTML = "#" + hr + hg + hb;
}