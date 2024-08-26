import { Box , Container , VStack , Button, Input, HStack } from '@chakra-ui/react'
import Message from './components/Message';

function App() {
  return (
    <>
      <Box bg={"red.50"}>
        <Container height={"100vh"} bg={"white"}>
          <VStack height={"full"} p={4} bg={"telegram.100"}>
            <Button colorScheme='red' w={"full"}>
              LogOut
            </Button>
          <VStack h={"full"} w={"full"} overflowY={'auto'}>
            <Message user={'other'} text={"sample text"}/>
            <Message user={'me'} text={"sample text"}/>
            <Message text={"sample text"}/>
            <Message user={'other'} text={"sample text"}/>
            <Message user={'me'} text={"sample text"}/>
            <Message text={"sample text"}/>
            <Message user={'other'} text={"sample text"}/>
            <Message user={'me'} text={"sample text"}/>
            <Message text={"sample text"}/>
            <Message user={'other'} text={"sample text"}/>
            <Message user={'me'} text={"sample text"}/>
            <Message text={"sample text"}/>
          </VStack>
          <form style={{width:"100%"}}>
            <HStack>
              <Input placeholder='Enter A Messsage...'/>
              <Button colorScheme='purple'>Send</Button>
            </HStack>
          </form>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export default App;
