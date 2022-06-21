import React from "react";

export default function Answer({ displayAnswer }) {
   function typed(event) {
      console.log(event.target.value);
   }

   return (
      <p className="answer" onChange={typed}>
         {displayAnswer}
      </p>
   );
}
