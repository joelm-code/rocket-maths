import zenMode from '../assets/mode-zen.svg';
import timerMode from '../assets/mode-timer.svg';
import pomodoroMode from '../assets/mode-pomodoro.svg';
import extremeMode from '../assets/mode-extreme.svg';

import {
    Flex,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    Fade,
    Wrap,
    WrapItem,
    HStack,
    CircularProgress,
    CircularProgressLabel,
    Spacer,
    Image
} from '@chakra-ui/react';
import Card from '../components/Card';

export default function SimpleCard() {
    return (
        <Flex
            minH="calc(100vh - 3.5rem)"
            align={'center'}
            justify={'center'}
            bgGradient={useColorModeValue('linear(to-br, #faaca8,#ddd6f3)', 'linear(to-br, #c33764,#1d2671)')}
        >
            <Stack spacing={8} mx={'auto'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading textAlign="center" fontSize={'4xl'}>
                        What do we play today Captain?
                    </Heading>
                    <Text fontSize={'lg'}>Select your game mode</Text>
                </Stack>

                <Wrap justify="center" maxW={'5xl'} spacing={4}>
                    <WrapItem>
                        <Fade in={true} transition={{ enter: { duration: 0.75 } }}>
                            <Card title="Zen" action="Begin" path="/calculator">
                                <Image h={'12rem'} src={zenMode} />
                                <HStack>
                                    <Text maxW={'xs'}>Soothing play with numbers take your time, relax, breathe. It's just math!</Text>
                                    <Spacer />
                                    <CircularProgress value={59} size="40px" thickness={10} color="purple.400">
                                        <CircularProgressLabel>40%</CircularProgressLabel>
                                    </CircularProgress>
                                </HStack>
                            </Card>
                        </Fade>
                    </WrapItem>
                    <WrapItem>
                        <Fade in={true} transition={{ enter: { duration: 1.5, delay: 0.25 } }}>
                            <Card title="Focus" action="Begin" path="/calculator">
                                <Image h={'12rem'} src={pomodoroMode} />
                                <HStack>
                                    <Text maxW={'xs'}>It's time to beat the clock one sum at a time! You only have 3 lives</Text>
                                    <Spacer />
                                    <CircularProgress value={30} size="40px" thickness={10} color="purple.400">
                                        <CircularProgressLabel>30%</CircularProgressLabel>
                                    </CircularProgress>
                                </HStack>
                            </Card>
                        </Fade>
                    </WrapItem>

                    <WrapItem>
                        <Fade in={true} transition={{ enter: { duration: 2.25, delay: 0.5 } }}>
                            <Card title="Pomodoro" action="Locked" path="/calculator" disableAction>
                                <Image h={'12rem'} src={timerMode} />
                                <HStack>
                                    <Text maxW={'xs'}>Want more focused practice? Do a pomodoro style timed practice.</Text>
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
                            <Card title="Exteme" action="Locked" path="/calculator" disableAction>
                                <Image h={'12rem'} src={extremeMode} />
                                <HStack>
                                    <Text maxW={'xs'}>No distactions, no mistakes. Do you have what it takes to be the best?</Text>
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
