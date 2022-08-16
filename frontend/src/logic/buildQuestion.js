export default function buildQuestion(quiz) {
    // The building of a new question should be based on
    // 1. The students current difficuly
    // 2. Don't give weaker students difficulty questions it will demotivate them
    // 3. The speed at which a student is answering should be taken into account
    // 4. Filter for bots (ask a random question which is 5x more difficult to solve)
    // 5. If the bot answers the question too fast -> Botscore++

    let newQuiz = { ...quiz };

    const q1 = Math.floor(Math.random() * 100);
    const q2 = Math.floor(Math.random() * 10);
    const a = q1 + q2;

    //check current level

    //

    newQuiz.question = [q1, '+', q2];
    newQuiz.answerCorrect = `${a}`;

    return {
        ...newQuiz
    };
}
