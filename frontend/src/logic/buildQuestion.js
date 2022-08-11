export default function buildQuestion(quiz, keyPress) {
    let newQuiz = quiz;

    const q1 = Math.floor(Math.random() * 100);
    const q2 = Math.floor(Math.random() * 10);
    const a = q1 + q2;

    newQuiz.question = [q1, '+', q2];
    newQuiz.answerCorrect = `${a}`;

    return {
        ...newQuiz
    };
}
