import React, { useState } from 'react';
import CalculatorGame from '../components/CalculatorGame/CalculatorGame';
import SideBar from '../components/CalculatorGame/SideBar';
import logic from '../logic/logic';

export default function CalculatorPage() {
    const [quiz, setQuiz] = useState({
        totalSteps: 10,
        history: [
            {
                stepNumber: 1,
                question: [''],
                answerCorrect: ''
            }
        ],
        question: ['5', '+', '3'],
        answerCorrect: '8',
        answerDisplay: 'Ready',
        level: '1'
    });

    function updateQuiz(keyPress) {
        setQuiz(logic(quiz, keyPress));
    }

    return (
        <div className="calculatorPage">
            <CalculatorGame quiz={quiz} updateQuiz={updateQuiz} />
            <SideBar quiz={quiz} />
        </div>
    );
}
