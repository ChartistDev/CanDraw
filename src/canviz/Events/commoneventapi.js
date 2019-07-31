import TriggerClick from './click';
let eventStore = {
'click' : TriggerClick
}
export default function TriggerEvent(_event,_canvas,ctx_1,ctx_2){
    let event = _event && eventStore[_event],
        canvas = _canvas;
        event && event(canvas,ctx_1,ctx_2);
}