import buildQuestion from './buildQuestion';

export default function generateQuestion(quiz) {
    //
    // -----> Functionality that needs to be added
    // The building of a new question should be based on
    // 1. The students current difficuly
    // 2. Don't give weaker students difficulty questions it will demotivate them
    // 3. The speed at which a student is answering should be taken into account
    // 4. Filter for bots (ask a random question which is 5x more difficult to solve)
    // 5. If the bot answers the question too fast -> Botscore++

    /*
    //----> Object recived from client quiz has a skill object as below
            ------
            skill: {
                add: '4',
                subtract: '2.1',
                multiply: '1.9',
                divide: '0.1'
            }
            ------
    */

    //---> Function Returns back the operator symbol ( + , - , x , ÷ )
    const findSymbol = (operator) => {
        switch (operator) {
            case 'add':
                return '+';
                break;
            case 'subtract':
                return '-';
                break;
            case 'multiply':
                return 'x';
                break;
            case 'divide':
                return '÷';
                break;
            default:
                console.log(`Sorry, wrong operator ${operator}.`);
        }
    };

    //------> Logic Begins here

    // 1. Initialize newQuiz to store the new values
    let newQuiz = { ...quiz };

    // 2. Assign the question difficulty based on the question
    const questionDifficulty = 0.4;

    // 3. Find the Symbol needed to be displayed
    const operatorSumbol = findSymbol('add');

    // 4. Build the 2 questions and 1 answer based on the skill level
    const { q1, q2, a } = buildQuestion('add', quiz.skill.add);

    // 5. Assign all the values generated to newQuiz
    newQuiz.question = [q1, operatorSumbol, q2];
    newQuiz.answerCorrect = `${a}`;
    newQuiz.skill.add = Number(newQuiz.skill.add) + Number(questionDifficulty);

    // 6. Return the final generated quiz to the client
    return {
        ...newQuiz
    };
}
