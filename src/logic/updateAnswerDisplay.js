export default function updateAnswerDisplay(quiz, keyPress) {
    let newQuiz = quiz;

    //first time the quiz is loaded
    if (newQuiz.answerDisplay === 'Ready') {
        newQuiz.answerDisplay = [''];
    }

    //check for . reapeat and del
    switch (keyPress) {
        case '.': {
            if (!quiz.answerDisplay.find((item) => item === '.')) {
                newQuiz.answerDisplay = [...newQuiz.answerDisplay, keyPress];
            }
            //console.log('dot');
            break;
        }
        case 'del': {
            newQuiz.answerDisplay = [''];
            //console.log('del');
            break;
        }
        default: {
            newQuiz.answerDisplay = [...newQuiz.answerDisplay, keyPress];
            //console.log(keyPress);
        }
    }

    return {
        ...newQuiz
    };
}
