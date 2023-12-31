import { Textarea, Input, Box, ChakraProvider, Heading, Button, CardFooter, Text, VStack, Card, CardHeader, CardBody, OrderedList, ListItem } from '@chakra-ui/react'
import Header from './components/Header.js'
export default function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header></Header>
        <VStack>
          <Card size="lg">
            <CardHeader>
              <Heading size="md">September 30, 2023</Heading>
            </CardHeader>
            <CardBody>
              <OrderedList>
                <ListItem>My loved ones</ListItem>
                <ListItem>Ice cream</ListItem>
                <ListItem>Pizza</ListItem>
              </OrderedList>
            </CardBody>
            <CardFooter>
                <Button>Edit</Button>
              </CardFooter>
          </Card>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}
