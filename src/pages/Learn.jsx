import zenMode from '../assets/images/mode-zen.svg';
import timerMode from '../assets/images/mode-timer.svg';
import pomodoroMode from '../assets/images/mode-pomodoro.svg';
import extremeMode from '../assets/images/mode-extreme.svg';

import { Flex, Stack, Heading, Text, useColorModeValue, Fade, Wrap, WrapItem, HStack, CircularProgress, CircularProgressLabel, Spacer, Image } from '@chakra-ui/react';
import Card from '../components/Card';

export default function Learn() {
    return (
        <Flex minH="calc(100vh - 3.5rem)" align={'center'} justify={'center'} bgGradient={useColorModeValue('linear(to-br, #faaca8,#ddd6f3)', 'linear(to-br, #c33764,#1d2671)')}>
            <Stack spacing={8} mx={'auto'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading textAlign="center" fontSize={'4xl'}>
                        What do we learn today Captain?
                    </Heading>
                    <Text fontSize={'lg'}>Select your game mode</Text>
                </Stack>

                <Wrap justify="center" maxW={'5xl'} spacing={4}>
                    <WrapItem>
                        <Fade in={true} transition={{ enter: { duration: 0.75 } }}>
                            <Card title="Addition" action="Begin" path="/calculator">
                                <Image w={'8rem'} h={'10rem'} src={zenMode} alignSelf="center" fit={'contain'} />
                            </Card>
                        </Fade>
                    </WrapItem>
                    <WrapItem>
                        <Fade in={true} transition={{ enter: { duration: 1.5, delay: 0.25 } }}>
                            <Card title="Subtraction" action="Begin" path="/calculator">
                                <Image w={'8rem'} h={'10rem'} src={pomodoroMode} alignSelf="center" fit={'contain'} />
                            </Card>
                        </Fade>
                    </WrapItem>

                    <WrapItem>
                        <Fade in={true} transition={{ enter: { duration: 2.25, delay: 0.5 } }}>
                            <Card title="Mulitplication" action="Locked" path="/calculator" disableAction>
                                <Image w={'8rem'} h={'10rem'} src={timerMode} alignSelf="center" fit={'contain'} />
                            </Card>
                        </Fade>
                    </WrapItem>
                    <WrapItem>
                        <Fade in={true} transition={{ enter: { duration: 3, delay: 0.75 } }}>
                            <Card title="Division" action="Locked" path="/calculator" disableAction>
                                <Image w={'8rem'} h={'10rem'} src={extremeMode} alignSelf="center" fit={'contain'} />
                            </Card>
                        </Fade>
                    </WrapItem>
                </Wrap>
            </Stack>
        </Flex>
    );
}
