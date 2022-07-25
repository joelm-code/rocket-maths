import React, { useState } from 'react';
import Question from './Question';
import Answer from './Answer';
import Keypad from '../../components/Keypad';

import ProgressCard from '../../components/ProgressCard';
import logic from '../../logic/logic';
import './styles.css';

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
        <div className="game--container" tabIndex={0} onKeyDown={(event) => updateQuiz(event.key)}>
            <ProgressCard quiz={quiz} />
            <div className="game--display">
                <Question question={quiz.question} />
                <Answer answerDisplay={quiz.answerDisplay} />
            </div>
            <Keypad upadateQuiz={updateQuiz} />
        </div>
    );
}
