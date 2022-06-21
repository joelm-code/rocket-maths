import React, { useState } from 'react';
import './styles.css';
import Answer from './components/Answer';
import Keypad from './components/Keypad';
import logic from './logic/logic';
import Question from './components/Question';

export default function App() {
    const [quiz, setQuiz] = useState({
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
            <Keypad upadateQuiz={updateQuiz} />
        </div>
    );
}
