canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("onmouse",mousehold);

function mousehold() {
    x = e.clientX;
    y = e.clientY;
    console.log(x,y);
    circle(x,y)
}

function circle(x,y) {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.arc(x,y,30,0,2*Math.PI);
    ctx.stroke();
}