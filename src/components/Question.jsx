import React, { useState } from "react";

export default function Question(props) {
   const [quiz, setQuiz] = useState({
      question: ["Ready", ""],
      operator: "",
      answer: ""
   });

   function generateQuestion() {
      const q1 = Math.floor(Math.random() * 100);
      const q2 = Math.floor(Math.random() * 10);
      const a = q1 + q2;

      setQuiz({
         question: [q1, q2],
         operator: "+",
         answer: a
      });
   }

   return (
      <div className="card">
         <div className="question">
            <p>{quiz.question[0]}</p>
            <p>
               {quiz.operator}
               {quiz.question[1]}
            </p>
         </div>
         <button onClick={generateQuestion}>Build New Quiz</button>
      </div>
   );
}
