class ColorApi {
    constructor(){
        this.rgba = {
            'r' : 0,
            'g' : 0,
            'b' : 0,
            'a' : 1
        }
    }
    getRGB = () => {
        return(this.rgba);
    }
    setRGB = (_rgba) => {
        let rgba = _rgba
        this.rgba = rgba;
    }
    incrementColorCode = (_rgba) => {
        let rgba = _rgba,
            r = rgba.r,
            g = rgba.g,
            b = rgba.b,
            a = rgba.a;
        b = Number(b)+1;
      if(Number(b)===256){
          r = Number(r)+1;
        if(Number(r)===256){
            g = Number(g)+1;
          if(Number(g)===256)
          {
              console.log("cannot add more");
          }
          else{
          r = 0;
          b = 0;
          }
        }
        else {
            g = 0;
            b = 0;
        }
      }
      rgba = {
          'r' : r,
          'g' : g,
          'b' : b,
          'a' : a
      }
      return(rgba);
    }
    gnerateColorCode = (_rgba) => {
        let rgba = _rgba,
            r = rgba.r,
            g = rgba.g,
            b = rgba.b,
            a = rgba.a;
            return('rgba('+r.toString()+', '+g.toString()+', '+b.toString()+', '+a.toString()+')')
    }
}
export default ColorApi;