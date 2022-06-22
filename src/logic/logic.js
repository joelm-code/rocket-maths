import updateAnswerDisplay from './updateAnswerDisplay';
import buildQuestion from './buildQuestion';
import updateHistory from './updateHistory';

export default function logic(quiz, keyPress) {
    let newQuiz = quiz;

    //update the newQuiz.answerDisplay with updated value
    newQuiz = updateAnswerDisplay(quiz, keyPress);

    //check if answer is correct and build a new question
    const displayAnswer = newQuiz.answerDisplay.reduce((a, b) => a + b);

    if (newQuiz.answerCorrect === displayAnswer) {
        //logs the history
        newQuiz = updateHistory(newQuiz);
        //builds a new question and sets a new answer
        newQuiz = buildQuestion(newQuiz, keyPress);
        newQuiz.answerDisplay = [''];
    }

    //console.log(displayAnswer, newQuiz.answerCorrect);

    return {
        ...newQuiz
    };
}
