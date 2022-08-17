import { skill as questionSkill } from './LevelAndSkill';

//---> function that builds the question based on the operator and skill stage
const buildQuestion = (operator, skill) => {
    const maxSkill = Math.ceil(skill);
    const questionCode = questionSkill.add.stage[maxSkill];

    console.log(`Building Question \nQuestion Code: ${questionCode}\nOperator: ${operator}\nSkill: ${skill}`);

    const q1 = Math.floor(Math.random() * 10 ** questionCode[0]);
    const q2 = Math.floor(Math.random() * 10 ** questionCode[2]);
    let a = 0;

    switch (operator) {
        case 'add':
            a = q1 + q2;
            break;
        case 'subtract':
            a = q1 - q2;
            break;
        case 'multiply':
            a = q1 * q2;
            break;
        case 'divide':
            a = q1 / q2;
            break;
        default:
            console.log(`Sorry, wrong operator ${operator}.`);
    }

    console.log(`${q1} ${operator} ${q2} = ${a}`);

    return { q1, q2, a };
};

export default buildQuestion;
