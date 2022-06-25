import React from 'react';
import '../../styles.css';

//importing react components
import Question from './components/Question';
import Answer from './components/Answer';
import Keypad from './components/Keypad';

//importing js logic

export default function CalculatorGame({ quiz, updateQuiz }) {
    return (
        <div className="calculatorGame--container">
            <div className="display">
                <Question question={quiz.question} />
                <Answer answerDisplay={quiz.answerDisplay} />
            </div>
            <Keypad upadateQuiz={updateQuiz} />
        </div>
    );
}
