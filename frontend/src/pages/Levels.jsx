import {
  Flex,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  HStack,
  VStack,
  Fade,
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

        <VStack>
          <HStack spacing={10}>
            <Fade in={true} transition={{enter: {duration: 0.5}}}>
              <Card title="Easy" action="Begin" path="/calculator">
                <Text>Add image here</Text>
              </Card>
            </Fade>

            <Fade in={true} transition={{enter: {duration: 1}}}>
              <Card title="Medium" action="Begin" path="/calculator">
                <Text>image here</Text>
              </Card>
            </Fade>
          </HStack>
        </VStack>

        <VStack>
          <HStack spacing={10}>
            <Fade in={true} transition={{enter: {duration: 1.5}}}>
              <Card title="Hard" action="Begin" path="/calculator">
                <Text>Hard</Text>
              </Card>
            </Fade>

            <Fade in={true} transition={{enter: {duration: 2}}}>
              <Card title="Exteme" action="Begin" path="/calculator">
                <Text>Extreme</Text>
              </Card>
            </Fade>
          </HStack>
        </VStack>
      </Stack>
    </Flex>
  );
}