import React, { useState } from 'react';
import './styles.css';

//importing react components
import ProgressBar from './components/ProgressBar';
import Question from './components/Question';
import Answer from './components/Answer';
import Keypad from './components/Keypad';

//importing js logic
import logic from './logic/logic';

export default function App() {
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
        <div className="app--container">
            <div className="display">
                <Question question={quiz.question} />
                <Answer answerDisplay={quiz.answerDisplay} />
            </div>
            <ProgressBar totalSteps={quiz.totalSteps} stepNumber={quiz.history.length} />
            <Keypad upadateQuiz={updateQuiz} />
        </div>
    );
}
