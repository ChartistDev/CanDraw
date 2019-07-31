import Rect from './Rect/rect';
import Circle from './Circle/circle';
import ShapeCounter from './shapecounter';
import TriggerEvent from './Events/commoneventapi';
let shapeStore = {
    "rect" : Rect,
    "circle" : Circle
};
class CanViz extends ShapeCounter{
    constructor(_settings){
        super();
        this.settings = {};
        this.shapeInstance = [];
        if(_settings){
            this.settings = _settings;
        }
        let containerId = this.settings.container;
        this.canvas_2 = document.createElement('canvas');
        this.ctx_2 = this.canvas_2.getContext('2d');
        this.canvas_1 = document.createElement('canvas');
        this.canvas_1.setAttribute('width' , this.settings.width);
        this.canvas_1.setAttribute('height',this.settings.height);
        this.canvas_2.setAttribute('width' , this.settings.width);
        this.canvas_2.setAttribute('height',this.settings.height);
        this.ctx_1 = this.canvas_1.getContext('2d');
        this.container = document.getElementById(containerId);
        this.container.appendChild(this.canvas_1);
        this.settings.events && this.settings.events.forEach((value) => {
            TriggerEvent(value,this.canvas_1,this.ctx_1,this.ctx_2);
        })
        return(this);
    }
    drawShape = (_shapeObject) => {
        let callingObject = this;
        let shapeObject = _shapeObject;
        let shapeApi = shapeStore[shapeObject.type];
        callingObject.addCounter(new shapeApi(shapeObject));
    }
    render  = () => {
        let callingObject = this,
            shadowrgb,
            shadowShape,
            shadowShapeColor,
            shapeObjects = callingObject.getAllAPi(),
            rgba = callingObject.getRGB();

        /*----Calling Draw Api For Each Shape ... Also draw the shadow shapes on the second canvas after getting the generated color codes----*/

        shapeObjects && shapeObjects.forEach((value)=>{
            value.draw(callingObject.ctx_1);
            shadowrgb = callingObject.incrementColorCode(rgba);
            rgba = shadowrgb;
            shadowShape = value;
            shadowShapeColor = callingObject.gnerateColorCode(shadowrgb);
            shadowShape.fillcolor = shadowShape.strokecolor = shadowShapeColor;
            shadowShape.draw(callingObject.ctx_2);
        })
    }
}
export default CanViz;