class Circle{
    constructor(_shapeObject){
        let circle = this;
        let shapeObject = _shapeObject;
        circle.radius = shapeObject.radius || 50;
        circle.x = shapeObject.x;
        circle.y = shapeObject.y;
        circle.strokecolor = shapeObject.strokecolor || "#ff0000";
        circle.fillcolor = shapeObject.fillcolor || "#ff0000";
    }
    draw = (ctx) => {
        let circle = this;
        ctx.strokeStyle = circle.strokecolor;
        ctx.fillStyle = circle.fillcolor;
        ctx.beginPath();
        ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
        //ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}
export default Circle;