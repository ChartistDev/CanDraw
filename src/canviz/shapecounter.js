import ColorApi from './colorapi';
class ShapeCounter extends ColorApi
{
    constructor(){
        super();
        this.counter = {};
        this.shapeApiCounter = [];
    }
    addCounter = (_api)=> {
        let api = _api;
            this.shapeApiCounter.push(api);
            this.counter++;
    }
    getCount = () => {
        return(counter);
    }
    getAllAPi = () => {
        return(this.shapeApiCounter);
    }
    getCounterApi = (_index) => {
        let index = _index;
            if(Number(index) && typeof(index) !== 'undefined') {
                return(this.shapeApiCounter[index]);
            }
    }
    deleteCounter = (_index) => {
        let index = _index;
            if(Number(index)){
                this.shapeApiCounter.splice(index);
                this.counter--;
            }
    }
}
export default ShapeCounter;