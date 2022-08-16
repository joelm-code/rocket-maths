import updateAnswerDisplay from './updateAnswerDisplay';
import buildQuestion from './buildQuestion';
import updateHistory from './updateHistory';

export default function logic(quiz, keyPress) {
    // console.log(keyPress, 'keyPress');
    //check if the keypress is a number using isFinite funtion from JS
    let newQuiz = quiz;
    if (isFinite(keyPress) || keyPress === '.') {
        //update the newQuiz.answerDisplay with updated value
        newQuiz = updateAnswerDisplay(quiz, keyPress);

        //check if answer is correct and build a new question
        const displayAnswer = newQuiz.answerDisplay.reduce((a, b) => a + b);

        if (newQuiz.answerCorrect === displayAnswer) {
            //logs the history
            newQuiz = updateHistory(newQuiz);
            //builds a new question and sets a new answer
            newQuiz = buildQuestion(newQuiz, keyPress);
            newQuiz.answerDisplay = [];
        }

        //console.log(displayAnswer, newQuiz.answerCorrect);

        return {
            ...newQuiz
        };
    }
    // if the keypress is backspace then remove the previous key
    else if (keyPress === 'Backspace' || keyPress === 'del') {
        //update the newQuiz.answerDisplay with updated value
        newQuiz = updateAnswerDisplay(quiz, 'del');
        return { ...quiz };
    }

    //just reutrn the old quiz data back if the keypress is not a number
    else return { ...quiz };
}
