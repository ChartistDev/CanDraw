class Rect{
    constructor(_shapeObject){
        let rect = this;
        let shapeObject = _shapeObject;
        rect.width = shapeObject.width;
        rect.height = shapeObject.height;
        rect.x = shapeObject.x;
        rect.y = shapeObject.y;
        rect.strokecolor = shapeObject.strokecolor || "#ff0000";
        rect.fillcolor = shapeObject.fillcolor || "#ff0000";
    }
    draw = (ctx) => {
        let rect = this;
        ctx.strokeStyle = rect.strokecolor;
        ctx.fillStyle = rect.fillcolor;
        ctx.beginPath();
        ctx.strokeRect(rect.x,rect.y,rect.width,rect.height);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}
export default Rect;