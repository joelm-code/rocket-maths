import soloPlay from '../assets/images/play-solo.svg';
import teamPlay from '../assets/images/play-team.svg';

import { Flex, Stack, Heading, Text, useColorModeValue, Fade, Image, Wrap, WrapItem } from '@chakra-ui/react';
import Card from '../components/Card';

export default function SimpleCard() {
    return (
        <Flex minH="calc(100vh - 3.5rem)" align={'center'} justify={'center'} bgGradient={useColorModeValue('linear(to-br, #faaca8,#ddd6f3)', 'linear(to-br, #c33764,#1d2671)')}>
            <Stack spacing={8} mx={'auto'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading textAlign="center" fontSize={'4xl'}>
                        Welcome Captain 🚀
                    </Heading>
                    <Text fontSize={'lg'}>Choose your adventure</Text>
                </Stack>
                <Wrap justify="center" maxW={'5xl'} spacing={4}>
                    <WrapItem>
                        <Fade in transition={{ enter: { duration: 0.5 } }}>
                            <Card title="Play" action="Play Now" path="/levels">
                                <Stack maxW={'xs'}>
                                    <Image w={'xs'} h={'20rem'} src={soloPlay} />
                                    <Text maxW={'xs'}>Sharpen your skills and become a legend</Text>
                                </Stack>
                            </Card>
                        </Fade>
                    </WrapItem>
                    <WrapItem>
                        <Fade in transition={{ enter: { duration: 1 } }}>
                            <Card title="Learn" action="Learn Now" path="/learn">
                                <Stack maxW={'xs'}>
                                    <Image w={'xs'} h={'20rem'} src={teamPlay} />
                                    <Text maxW={'xs'}>A fun way to learn maths</Text>
                                </Stack>
                            </Card>
                        </Fade>
                    </WrapItem>
                </Wrap>
            </Stack>
        </Flex>
    );
}
