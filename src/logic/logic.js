import updateAnswerDisplay from './updateAnswerDisplay';
import buildQuestion from './buildQuestion';

export default function logic(quiz, keyPress) {
    let newQuiz = quiz;

    //update the newQuiz.answerDisplay with updated value
    newQuiz = updateAnswerDisplay(quiz, keyPress);

    const displayAnswer = newQuiz.answerDisplay.reduce((a, b) => a + b);

    if (newQuiz.answerCorrect === displayAnswer) {
        //builds a new question and sets a new answer
        newQuiz = buildQuestion(quiz, keyPress);
        newQuiz.answerDisplay = [''];
    }
    console.log(displayAnswer, newQuiz.answerCorrect);

    return {
        ...newQuiz
    };
}
