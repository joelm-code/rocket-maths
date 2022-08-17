import updateAnswerDisplay from './updateLogic/updateAnswerDisplay';
import generateQuestion from './generateQuestion/index';
import updateHistory from './updateLogic/updateHistory';
import { skill, level } from './generateQuestion/LevelAndSkill';

export default function logic(quiz, keyPress) {
    console.log('Skill: ', skill);
    console.log('Level: ', level);

    /* 
        Intializing newQuiz to be a new object that will be passed around
        to different functions in the logic to be manipulated
        !!! This assignment might not be correct figure out the correct way to do this 
    */
    let newQuiz = quiz;

    //      ---> 1. Check if the keypress is a number using isFinite funtion from JS or a . (dot)
    if (isFinite(keyPress) || keyPress === '.') {
        /*  ---> 2. answerDisplay is updated depending on the keyPress recived
                    -------
                    ( . ) dot  : Check for duplicate 
                    Number     : Added to the end of the array
                    -------
        */
        newQuiz = updateAnswerDisplay(newQuiz, keyPress);

        /*  ---> 3. displayAnswer is a string that will be compared to correct answer in the next step
                    -------
                    input = ['1','2','3','4']   : type -> array of strings
                    output = '1234'             : type -> string
                    -------
        */
        const displayAnswer = newQuiz.answerDisplay.reduce((a, b) => a + b);

        /*   ---> 4. Check if the answer is correct
                    -------
                    'string ' === 'string' 
                    -------
        */
        if (newQuiz.answerCorrect === displayAnswer) {
            /* 
               -->  !!! ADD ANY NEW LOGIC INSIDE THIS BLOCK
                        -------
                        [x]  Update History 
                        [ ]  Update Skills  
                        [ ]  Update Level 
                        [x]  Generate Questions
                        [x]  Update Answer Display
                        -------

             */
            //-> 5. Log the current question and answer into the history array
            newQuiz = updateHistory(newQuiz);

            //-> 6. Build a new question and answer
            newQuiz = generateQuestion(newQuiz);

            //-> 7. Clear the answerDisplay
            newQuiz.answerDisplay = [];
        }
        //  ---> 8. Return the newQuiz back
        return { ...newQuiz };
    }

    //     ---> 9. Check if the keypress is a Backspace or delete
    else if (keyPress === 'Backspace' || keyPress === 'del') {
        newQuiz = updateAnswerDisplay(newQuiz, keyPress);
        return { ...newQuiz };
    }
    //    ---> 10. When the keypress is not a Number or Del or .
    //             it just sends back the original object without any changes
    else return { ...newQuiz };
}
