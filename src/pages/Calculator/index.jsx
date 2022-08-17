import React, { useEffect, useState } from 'react';
import Keypad from '../../components/Keypad';
import logic from '../../logic/logic';

import { Flex, useColorModeValue, HStack, VStack, Text, Spacer, Fade, Progress, Switch, Collapse, useDisclosure, Button, Badge, useBoolean } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function CalculatorPage() {
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
    const [success, setSuccess] = useBoolean();
    const [incorrect, setIncorrect] = useState(false);

    const [quiz, setQuiz] = useState({
        level: '1',

        skill: {
            add: '0.1',
            subtract: '2.1',
            multiply: '1.9',
            divide: '0.1'
        },

        question: ['5', '+', '3'],
        answerCorrect: '8',
        answerDisplay: 'Ready',
        totalSteps: 10,

        history: [
            {
                stepNumber: 1,
                question: [''],
                answerCorrect: ''
            }
        ]
    });

    function updateQuiz(keyPress) {
        // new quiz is created
        const newQuiz = logic(quiz, keyPress);

        //check if a new quiz is created
        if (newQuiz.history.length !== quiz.history.length) {
            setSuccess.on();
            setIncorrect(false);
            setTimeout(() => {
                setQuiz(newQuiz);
            }, 800);
        } else if (quiz.answerDisplay.length >= quiz.answerCorrect.length) {
            setIncorrect(true);
            setQuiz(newQuiz);
        } else {
            setIncorrect(false);
            setQuiz(newQuiz);
        }
    }

    useEffect(() => setSuccess.off(), [quiz.history]);

    const progress = (quiz.history.length / quiz.totalSteps) * 100;
    const levelCleared = quiz.history.length >= quiz.totalSteps;
    const answerTextColor = useColorModeValue(success && 'green.500', success && 'green.400');
    const answerTextShadow = useColorModeValue('0px 0px 2px rgba(255,255,255,0.1)', '0px 0px 2px rgba(255,255,255,0.4)');

    return (
        <Flex
            minH="calc(100vh - 3.5rem)"
            align={'center'}
            justify={'center'}
            bgGradient={useColorModeValue('linear(to-br, #faaca8,#ddd6f3)', 'linear(to-br, #c33764,#1d2671)')}
            tabIndex={0}
            onKeyDown={(event) => updateQuiz(event.key)}
        >
            <VStack minH={'80vh'}>
                {/* Progress Bar */}
                {!levelCleared && (
                    <VStack>
                        <HStack rounded={'lg'} bg={'whiteAlpha.700'} boxShadow={'lg'} minW={'60'} p={3} gap={2}>
                            <Text fontWeight={'semibold'} fontSize={'xs'} color={'gray.700'}>
                                {`${quiz.history.length} of ${quiz.totalSteps}`}
                            </Text>
                            <Progress w={56} size="sm" colorScheme={success ? 'green' : 'pink'} value={progress} hasStripe isAnimated />
                        </HStack>
                        <Collapse in={success} animateOpacity>
                            <Badge rounded={'md'} variant="subtle" p={1} colorScheme="green">
                                ✅ Correct
                            </Badge>
                        </Collapse>
                        <Collapse in={incorrect} animateOpacity>
                            <Badge rounded={'md'} variant="subtle" p={1} colorScheme="red">
                                🚫 Incorrect
                            </Badge>
                        </Collapse>
                    </VStack>
                )}

                <Spacer />
                {/* Question */}
                <Fade in transition={{ enter: { duration: 0.5, delay: 1 } }}>
                    <Text fontSize={'5xl'} color={useColorModeValue('gray.700', 'gray.300')} textAlign="center">
                        {levelCleared ? 'Congratulations Captain!' : quiz.question}
                    </Text>
                </Fade>
                {/* Answer */}
                <Spacer />
                {!levelCleared && (
                    <Fade in transition={{ enter: { duration: 0.5 } }}>
                        <Text fontSize={'7xl'} color={answerTextColor} textShadow={answerTextShadow}>
                            {!quiz.answerDisplay[0] ? '?' : quiz.answerDisplay}
                        </Text>
                    </Fade>
                )}

                {levelCleared && (
                    <Fade in={levelCleared} transition={{ enter: { duration: 1 } }}>
                        <Text fontSize={'7xl'}>🥳</Text>
                    </Fade>
                )}
                <Spacer />
                {/* Keypad */}
                <Collapse in={isOpen && !levelCleared} animateOpacity>
                    <Keypad upadateQuiz={updateQuiz} />
                </Collapse>
                <HStack>
                    <Text fontWeight={'semibold'} fontSize={'xs'}>
                        Keypad
                    </Text>
                    <Switch onChange={onToggle} colorScheme={'purple'} isDisabled={levelCleared} />
                </HStack>
                {/* Action */}
                {levelCleared && (
                    <Fade in={levelCleared} transition={{ enter: { delay: 1, duration: 0.5 } }}>
                        <HStack rounded={'lg'} bg={'whiteAlpha.600'} boxShadow={'lg'} minW={'60'} p={3} gap={2}>
                            <Text color={'blackAlpha.800'} fontWeight={'semibold'}>
                                Level Cleared
                            </Text>
                            <Spacer />
                            <Link to="../levels">
                                <Button rightIcon={<ArrowForwardIcon />} colorScheme="purple" variant="solid">
                                    Next Level
                                </Button>
                            </Link>
                        </HStack>
                    </Fade>
                )}
            </VStack>
        </Flex>
    );
}
