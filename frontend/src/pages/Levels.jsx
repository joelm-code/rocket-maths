import {
  Flex,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  HStack,
  VStack,
  Fade,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Card from '../components/Card';

// Need to make this into a wrap

export default function SimpleCard() {
  return (
    <Flex
      minH="calc(100vh - 3.5rem)"
      align={'center'}
      justify={'center'}
      bgGradient={useColorModeValue(
        'linear(to-br, #faaca8,#ddd6f3)',
        'linear(to-br, #c33764,#1d2671)'
      )}
    >
      <Stack spacing={8} mx={'auto'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading textAlign="center" fontSize={'4xl'}>
            Captain, Choose your Adventure ☄️
          </Heading>
          <Text fontSize={'lg'}>Select a level</Text>
        </Stack>

        <Wrap justify="center" maxW={'5xl'}>
          <WrapItem>
            <Fade in={true} transition={{enter: {duration: 0.5}}}>
              <Card title="Easiest" action="Begin" path="/calculator">
                <Text>Addition</Text>
              </Card>
            </Fade>
          </WrapItem>
          <WrapItem>
            <Fade in={true} transition={{enter: {duration: 1}}}>
              <Card title="Medium" action="Begin" path="/calculator">
                <Text>Mulitplication</Text>
              </Card>
            </Fade>
          </WrapItem>

          <WrapItem>
            <Fade in={true} transition={{enter: {duration: 1.5}}}>
              <Card title="Hard" action="Begin" path="/calculator">
                <Text>Addition</Text>
              </Card>
            </Fade>
          </WrapItem>
          <WrapItem>
            <Fade in={true} transition={{enter: {duration: 2}}}>
              <Card title="Exteme" action="Begin" path="/calculator">
                <Text>Division</Text>
              </Card>
            </Fade>
          </WrapItem>

          <WrapItem>
            <Fade in={true} transition={{enter: {duration: 0.5}}}>
              <Card title="Easy" action="Begin" path="/calculator">
                <Text>Addition</Text>
              </Card>
            </Fade>
          </WrapItem>
          <WrapItem>
            <Fade in={true} transition={{enter: {duration: 1}}}>
              <Card title="Medium" action="Begin" path="/calculator">
                <Text>Multiplication</Text>
              </Card>
            </Fade>
          </WrapItem>

          <WrapItem>
            <Fade in={true} transition={{enter: {duration: 1.5}}}>
              <Card title="Hard" action="Begin" path="/calculator">
                <Text>Addition</Text>
              </Card>
            </Fade>
          </WrapItem>
          <WrapItem>
            <Fade in={true} transition={{enter: {duration: 2}}}>
              <Card title="Exteme" action="Begin" path="/calculator">
                <Text>Division</Text>
              </Card>
            </Fade>
          </WrapItem>
        </Wrap>
      </Stack>
    </Flex>
  );
}
