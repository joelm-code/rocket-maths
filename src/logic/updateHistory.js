export default function updateHistory(quiz) {
    let newQuiz = quiz;

    const lastStep = quiz.history.length;

    console.log(quiz, lastStep);

    newQuiz.history = [
        ...quiz.history,
        {
            stepNumber: lastStep + 1,
            question: quiz.question,
            answerCorrect: quiz.answerCorrect
        }
    ];
    return { ...newQuiz };
}

// console.log(newQuiz.history);
