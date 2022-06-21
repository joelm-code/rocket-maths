import React from 'react';

export default function Question(props) {
    //map over all the questions and display them
    // const displayQuestion = props.question.map((singleQuestion) => {
    //     return;
    // });
    return (
        <div className="question--card">
            <span className="question--text">{[...props.question]}</span>
        </div>
    );
}
