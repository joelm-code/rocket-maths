import zenMode from '../assets/images/mode-zen.svg';
import timerMode from '../assets/images/mode-timer.svg';
import pomodoroMode from '../assets/images/mode-pomodoro.svg';
import extremeMode from '../assets/images/mode-extreme.svg';

import { Flex, Stack, Heading, Text, useColorModeValue, Fade, Wrap, WrapItem, HStack, CircularProgress, CircularProgressLabel, Spacer, Image } from '@chakra-ui/react';
import Card from '../components/Card';

export default function SimpleCard() {
    return (
        <Flex minH="calc(100vh - 3.5rem)" align={'center'} justify={'center'} bgGradient={useColorModeValue('linear(to-br, #faaca8,#ddd6f3)', 'linear(to-br, #c33764,#1d2671)')}>
            <Stack spacing={8} mx={'auto'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading textAlign="center" fontSize={'4xl'}>
                        What do we play today Captain?
                    </Heading>
                    <Text fontSize={'lg'}>Select your game mode</Text>
                </Stack>

                <Wrap justify="center" maxW={'8xl'} spacing={4}>
                    <WrapItem>
                        <Fade in={true} transition={{ enter: { duration: 0.75 } }}>
                            <Card title="Zen" action="Begin" path="/calculator">
                                <Image w={'12rem'} h={'14rem'} src={zenMode} alignSelf="center" />
                                <HStack>
                                    <Text w={'14em'}>Soothing play with numbers take your time, relax, breathe. It's just math!</Text>
                                    <Spacer />
                                    <CircularProgress value={59} size="40px" thickness={10} color="purple.400">
                                        <CircularProgressLabel>40%</CircularProgressLabel>
                                    </CircularProgress>
                                </HStack>
                            </Card>
                        </Fade>
                    </WrapItem>

                    <WrapItem>
                        <Fade in={true} transition={{ enter: { duration: 2.25, delay: 0.5 } }}>
                            <Card title="Pomodoro" action="Locked" path="/calculator" disableAction>
                                <Image w={'12rem'} h={'14rem'} src={timerMode} alignSelf="center" />
                                <HStack>
                                    <Text w={'14em'}>Want more focused practice? Do a pomodoro style timed practice.</Text>
                                    <Spacer />
                                    <CircularProgress value={10} size="40px" thickness={10} color="purple.400">
                                        <CircularProgressLabel>10%</CircularProgressLabel>
                                    </CircularProgress>
                                </HStack>
                            </Card>
                        </Fade>
                    </WrapItem>
                    <WrapItem>
                        <Fade in={true} transition={{ enter: { duration: 3, delay: 0.75 } }}>
                            <Card title="Extreme" action="Locked" path="/calculator" disableAction>
                                <Image w={'12rem'} h={'14rem'} src={extremeMode} alignSelf="center" />
                                <HStack>
                                    <Text w={'14em'}>No distactions, no mistakes. Do you have what it takes to be the best?</Text>
                                    <Spacer />
                                    <CircularProgress value={0} size="40px" thickness={10} color="purple.400">
                                        <CircularProgressLabel>0%</CircularProgressLabel>
                                    </CircularProgress>
                                </HStack>
                            </Card>
                        </Fade>
                    </WrapItem>
                </Wrap>
            </Stack>
        </Flex>
    );
}
