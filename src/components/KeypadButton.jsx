import React from "react";

export default function KeypadButton(props) {
   const styleClassName = "keypad--button";

   return (
      <button
         className={styleClassName}
         onClick={() => props.handleClick(props.keyValue)}
      >
         {props.buttonNumber}
      </button>
   );
}
