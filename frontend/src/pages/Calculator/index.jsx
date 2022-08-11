import React, {useState} from 'react';
import Keypad from '../../components/Keypad';
import logic from '../../logic/logic';

import {
  Flex,
  useColorModeValue,
  VStack,
  Text,
  Spacer,
  Fade,
} from '@chakra-ui/react';

export default function CalculatorPage() {
  const [quiz, setQuiz] = useState({
    totalSteps: 10,
    history: [
      {
        stepNumber: 1,
        question: [''],
        answerCorrect: '',
      },
    ],
    question: ['5', '+', '3'],
    answerCorrect: '8',
    answerDisplay: 'Ready',
    level: '1',
  });

  function updateQuiz(keyPress) {
    setQuiz(logic(quiz, keyPress));
  }

  return (
    <Flex
      minH="calc(100vh - 3.5rem)"
      align={'center'}
      justify={'center'}
      bgGradient={useColorModeValue(
        'linear(to-br, #faaca8,#ddd6f3)',
        'linear(to-br, #c33764,#1d2671)'
      )}
      tabIndex={0}
      onKeyDown={event => updateQuiz(event.key)}
    >
      <VStack minH={'80vh'}>
        {/* Question */}
        <Fade in transition={{enter: {duration: 0.5, delay: 1}}}>
          <Text
            fontSize={'5xl'}
            color={useColorModeValue('gray.700', 'gray.300')}
          >
            {quiz.question}
          </Text>
        </Fade>
        {/* Answer */}
        <Spacer />
        <Fade in transition={{enter: {duration: 0.5}}}>
          <Text fontSize={'7xl'}>{quiz.answerDisplay}</Text>
        </Fade>
        <Spacer />
        <Keypad upadateQuiz={updateQuiz} />
      </VStack>
    </Flex>
  );
}
