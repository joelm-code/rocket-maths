import {
  Flex,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Fade,
} from '@chakra-ui/react';
import Card from '../components/Card';

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
            Welcome Captain 🚀
          </Heading>
          <Text fontSize={'lg'}>Choose your adventure</Text>
        </Stack>

        <Fade in transition={{enter: {duration: 0.5}}}>
          <Card title="Solo Adventure 👨‍🚀" action="Begin" path="/levels">
            <Text>Sharpen your skills and become a legend</Text>
          </Card>
        </Fade>

        <Fade in transition={{enter: {duration: 1}}}>
          <Card
            title="Team Adventure 🧑‍🚀 👨‍🚀 👩🏾‍🚀"
            action="Coming Soon"
            path="/"
            disableAction
          >
            <Text>Build your team and conqure the world</Text>
          </Card>
        </Fade>
      </Stack>
    </Flex>
  );
}
