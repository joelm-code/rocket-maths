import React, { useState } from "react";
import Question from "./components/Question";
import Keypad from "./components/Keypad";
import "./styles.css";
import Answer from "./components/Answer";

export default function App() {
   const [displayAnswer, setDisplayAnswer] = useState(["0"]);

   function keypadClicked(keyValue) {
      if (keyValue === "del" || keyValue === "new") {
         setDisplayAnswer(["0"]);
      } else {
         setDisplayAnswer([...displayAnswer, keyValue]);
      }
   }

   return (
      <div>
         <Question displayAnswer={displayAnswer} />
         <Answer displayAnswer={displayAnswer} />
         <Keypad displayAnswer={displayAnswer} handleClick={keypadClicked} />
      </div>
   );
}
