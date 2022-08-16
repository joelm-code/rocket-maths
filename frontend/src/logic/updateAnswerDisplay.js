export default function updateAnswerDisplay(quiz, keyPress) {
    let newQuiz = quiz;

    //first time the quiz is loaded
    if (newQuiz.answerDisplay === 'Ready') {
        newQuiz.answerDisplay = [];
    }

    //check for . reapeat and del
    switch (keyPress) {
        case '.': {
            if (!quiz.answerDisplay.find((item) => item === '.')) {
                //add the keypress to the end of the newquiz
                newQuiz.answerDisplay = [...newQuiz.answerDisplay, keyPress];
            }
            //console.log('dot');
            break;
        }
        case 'del': {
            //clear the answer
            newQuiz.answerDisplay = [];
            break;
        }
        default: {
            newQuiz.answerDisplay = [...newQuiz.answerDisplay, keyPress];
        }
    }

    return {
        ...newQuiz
    };
}
