import sampleData from './sampleData';
import updateAnswerDisplay from './updateAnswerDisplay';
import buildQuestion from './buildQuestion';
import updateHistory from './updateHistory';

export default function logic(quiz, keyPress) {
    //intializing newQuiz to be a new object that will be passed around
    //to different functions in the logic to be manipulated
    // !!! This assignment might not be correct figure out the correct way to do this
    let newQuiz = quiz;

    //-----> 1. Check if the keypress is a number using isFinite funtion from JS
    if (isFinite(keyPress) || keyPress === '.') {
        //---> 2. answerDisplay is updated with the fresh value recived as keyPress
        newQuiz = updateAnswerDisplay(newQuiz, keyPress);

        //---> 3. displayAnswer is a string tha will compared to correct answer in the next step
        const displayAnswer = newQuiz.answerDisplay.reduce((a, b) => a + b);

        //---> 4. Check if the answer is correct
        if (newQuiz.answerCorrect === displayAnswer) {
            //-> 5. Log the current question and answer into the history array
            newQuiz = updateHistory(newQuiz);

            //-> 6. Build a new question and answer
            newQuiz = buildQuestion(newQuiz);

            //-> 7. Clear the answerDisplay
            newQuiz.answerDisplay = [];
        }
        //---> 8. Return the newQuiz back
        return {
            ...newQuiz
        };
    }

    // --> This feature needs to be built !!!  if the keypress is backspace then remove the previous key
    else if (keyPress === 'Backspace' || keyPress === 'del') {
        //update the newQuiz.answerDisplay with updated value
        newQuiz = updateAnswerDisplay(newQuiz, keyPress);
        return { ...newQuiz };
    }

    //--> When the keypress is not a number it just sends back the original object with any changes
    else return { ...newQuiz };
}
