import React from 'react';
import ProgressBar from './ProgressBar';

export default function ProgressCard({quiz}) {
  //console.log(...quiz.history);
  //console.log(quiz.totalSteps);

  // const displayHistory = quiz.history.map((item) => {
  //     return (
  //         <div>
  //             <p>Question {item.stepNumber}: Solved</p>
  //         </div>
  //     );
  // });

  const currentStep = quiz.history.length;

  return (
    <div className="card">
      <p className="card-component-1">Progress</p>
      <p className="card-component-2">{quiz.level}</p>
      <p className="card-component-3">Questions: {quiz.totalSteps}</p>
      <p className="card-component-4">Level</p>
      <div className="card-component-5">
        <ProgressBar totalSteps={quiz.totalSteps} stepNumber={currentStep} />
      </div>
      <p className="card-component-6">
        {quiz.totalSteps === currentStep ? 'Success' : ''}
      </p>
    </div>
  );
}
