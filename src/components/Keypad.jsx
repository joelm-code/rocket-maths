import React from "react";

export default function Keypad(props) {
   const keypadButtons = [
      { id: 1, buttonNumber: "1" },
      { id: 2, buttonNumber: "2" },
      { id: 3, buttonNumber: "3" },
      { id: 4, buttonNumber: "4" },
      { id: 5, buttonNumber: "5" },
      { id: 6, buttonNumber: "6" },
      { id: 7, buttonNumber: "7" },
      { id: 8, buttonNumber: "8" },
      { id: 9, buttonNumber: "9" },
      { id: 0, buttonNumber: "0" },
      { id: "del", buttonNumber: "Del" },
      { id: "new", buttonNumber: "New" }
   ];

   const styleClassName = "keypad--button";

   const buildButton = keypadButtons.map((keypadButton) => {
      return (
         <button
            className={styleClassName}
            key={keypadButton.id}
            keyValue={keypadButton.id}
            buttonNumber={keypadButton.buttonNumber}
            onClick={() => props.handleClick(keypadButton.id)}
         >
            {keypadButton.buttonNumber}
         </button>
      );
   });

   return <div className="keypad">{buildButton}</div>;
}
