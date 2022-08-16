import { Box, Stack, Button, Heading, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Card = ({ title, action, path, disableAction, children }) => {
    return (
        <Box rounded={'lg'} bg={useColorModeValue('whiteAlpha.600', 'rgba(	26, 32, 44,0.85)')} boxShadow={'lg'} minW={'60'} p={8}>
            <Stack spacing={4}>
                <Heading fontSize={'2xl'}>{title}</Heading>
                {children}
                <Stack spacing={10}>
                    <Link to={path}>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            width="100%"
                            disabled={disableAction}
                            _hover={{
                                bg: 'blue.500'
                            }}
                        >
                            {action}
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Card;
