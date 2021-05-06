canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
colour = "red";
width = "2";
radius = "20";
mouseEvent = "empty";
var mouse_x;
var mouse_y;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
    console.log("Current Mouse Positions, X = " + mouse_x + " and Y = " + mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = width;
    ctx.arc(mouse_x, mouse_y, radius , 0 , 2*Math.PI);
    ctx.stroke();
    }
}