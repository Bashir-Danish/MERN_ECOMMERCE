import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function Price({value,changePrice}) {
   return (
      <div className="f-buttons">
         <Slider
            range
            min={1}
            max={1000}
            defaultValue={[1, 1000]}
            marks={{ 1: `$${value[0]}`, 1000: `$${value[1]}` }}
            tipForrmater={value =>`$${value}`}
            value={value}
            onChange={changePrice}

         />
      </div>
   );
}

export default Price;
