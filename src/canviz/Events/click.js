
let findPos = (obj) => {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
},
generatePropertyAlert = (event) => {
    var pos = findPos(event.target);
        var x = event.pageX - pos.x;
        var y = event.pageY - pos.y;
        var imgd = ctx2.getImageData(x, y, 1, 1);
        console.log(imgd.data);
},ctx1,ctx2;
export default function TriggerClick(_canvas,_ctx1,_ctx2){
    let canvas = _canvas;
        ctx1 = _ctx1,
        ctx2 = _ctx2;  
    canvas.addEventListener("click",generatePropertyAlert);
}