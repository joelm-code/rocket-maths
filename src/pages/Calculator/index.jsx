import Lottie from 'lottie-react';
import levelUp from '../../assets/lottie/level-up.json';
import React, { useEffect, useState } from 'react';
import Keypad from '../../components/Keypad';
import logic from '../../logic/logic';

import { Flex, useColorModeValue, HStack, VStack, Text, Spacer, Fade, Progress, Switch, Collapse, useDisclosure, Button, Badge, useBoolean, SlideFade } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function CalculatorPage() {
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
    const [success, setSuccess] = useBoolean();
    const [incorrect, setIncorrect] = useBoolean();
    const [levelDone, setLevelDone] = useBoolean();
    const [hint, setHint] = useBoolean();

    const [quiz, setQuiz] = useState({
        level: '1',

        skill: {
            add: '0.8',
            subtract: '0.8',
            multiply: '0.8',
            divide: '0.1'
        },

        skillStatus: {
            add: false,
            subtract: false,
            multiply: false,
            divide: false
        },

        question: ['5', '+', '3'],
        answerCorrect: '8',
        answerDisplay: 'Ready',
        totalSteps: 100,

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

        console.log(`
        newQuiz level ${newQuiz.level}
        quizlevel: ${quiz.level}`);

        if (newQuiz.level !== quiz.level) {
            setLevelDone.on();
            setQuiz(newQuiz);
        }
        //check if a new quiz is created
        else if (newQuiz.history.length !== quiz.history.length) {
            setSuccess.on();
            setIncorrect.off();
            setHint.off();
            setTimeout(() => {
                setQuiz(newQuiz);
            }, 800);
        } else if (quiz.answerDisplay.length >= quiz.answerCorrect.length) {
            setIncorrect.on();

            setQuiz(newQuiz);
        } else {
            setIncorrect.off();
            setHint.off();
            setQuiz(newQuiz);
        }
    }

    const handleUpgradeLevel = () => {
        setLevelDone.off();
        updateQuiz();
    };

    useEffect(() => setSuccess.off(), [quiz.history]);

    const progress = (quiz.history.length / quiz.totalSteps) * 100;
    const levelCleared = levelDone;

    const answerTextColor = useColorModeValue(success && 'green.500', success && 'green.400');
    const questionColor = useColorModeValue('gray.700', 'gray.300');
    const answerTextShadow = useColorModeValue('0px 0px 2px rgba(255,255,255,0.1)', '0px 0px 2px rgba(255,255,255,0.4)');

    /* 
        !!! New Feature 
        -> If the level is cleared
     */

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
                <HStack w="100%">
                    {/* 
                    // Combo badge --->  need to implement a combo tracker

                    <Collapse in={true} animateOpacity>
                        <Badge fontSize="0.6rem" rounded={'md'} variant="outline" p={1} colorScheme="pink">
                            🚀 Combo x3
                        </Badge>
                    </Collapse> */}
                </HStack>
                {/* Progress Bar */}
                {!levelCleared && (
                    <VStack>
                        <VStack rounded={'lg'} bg={'whiteAlpha.700'} boxShadow={'lg'} minW={'60'} p={3} gap={2}>
                            <HStack w={'100%'} justifyContent={'space-between'}>
                                <Text fontWeight={'semibold'} fontSize={'xs'} color={'gray.700'}>
                                    {`Level ${quiz.level}`}
                                </Text>

                                <Text fontWeight={'semibold'} fontSize={'xs'} color={'gray.700'}>
                                    {`${quiz.history.length} of ${quiz.totalSteps}`}
                                </Text>
                            </HStack>
                            <Progress w={56} size="sm" colorScheme={success ? 'green' : 'pink'} value={progress} hasStripe isAnimated />
                        </VStack>
                        <HStack w={'100%'}>
                            <Collapse in={incorrect} animateOpacity>
                                <Button size={'xs'} fontSize="0.6rem" rounded={'md'} onClick={() => setHint.toggle()}>
                                    Hint
                                </Button>
                            </Collapse>
                            <SlideFade color={answerTextColor} in={hint} offsetX="-20px" offsetY="0px" animateOpacity>
                                <Text fontSize={'0.8rem'} fontWeight={'semibold'}>{`${quiz.answerCorrect}`}</Text>
                            </SlideFade>
                            <Spacer />
                            <Collapse in={incorrect} animateOpacity>
                                <Badge fontSize="0.6rem" rounded={'md'} variant="subtle" p={1} colorScheme="red">
                                    🚫 Incorrect
                                </Badge>
                            </Collapse>
                            <Collapse in={success} animateOpacity>
                                <Badge fontSize="0.6rem" rounded={'md'} variant="subtle" p={1} colorScheme="green">
                                    ✅ Correct
                                </Badge>
                            </Collapse>
                        </HStack>
                    </VStack>
                )}

                <Spacer />
                {/* Question */}
                {!levelCleared && (
                    <Fade in transition={{ enter: { duration: 0.5, delay: 1 } }}>
                        <Text fontSize={'5xl'} color={questionColor} textAlign="center">
                            {quiz.question}
                        </Text>
                    </Fade>
                )}
                {/* Answer */}
                <Spacer />
                {!levelCleared && (
                    <Fade in transition={{ enter: { duration: 0.5 } }}>
                        <Text fontSize={'7xl'} color={answerTextColor} textShadow={answerTextShadow}>
                            {!quiz.answerDisplay[0] ? '?' : quiz.answerDisplay}
                        </Text>
                    </Fade>
                )}

                {/* Can be turned into a modal if needed */}
                {levelCleared && (
                    <Fade in={levelCleared} transition={{ enter: { duration: 1 } }}>
                        <Text align="center" fontWeight={'semibold'} fontSize={'3xl'}>{`Good Job, Captain! 👏`}</Text>
                        <Lottie animationData={levelUp} loop={true} style={{ width: 300 }} />
                        <Text align="center" fontSize={'xl'}>{`Level Complete`}</Text>
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
                                {`Next Round`}
                            </Text>
                            <Spacer />
                            <Button rightIcon={<ArrowForwardIcon />} colorScheme="purple" variant="solid" onClick={handleUpgradeLevel}>
                                Continue
                            </Button>
                        </HStack>
                    </Fade>
                )}
            </VStack>
        </Flex>
    );
}
