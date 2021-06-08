import { Button } from '@chakra-ui/button';
import { Box, Flex, HStack, Link, Text } from '@chakra-ui/layout';
import React from 'react';
import CheckoutProduct from '../components/CheckoutProduct';
import Container from '../components/Container';
import Header from '../components/Header';
import SubTotal from '../components/SubTotal';
// import '../components/App.css';

// import Subtotal from '../components/Subtotal';

// import { useStateValue } from '../components/StateProvider';
// import CheckoutProduct from '../components/CheckoutProduct';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

function Cart() {
//   const [{ basket }] = useStateValue();
      const basket = ["ehllo",2,3,5,65,7,];

  return (
    <Container>
      <Box>
        {basket?.length === 0 ? (
          <Flex 
          width={["60%","40%"]}
          direction="column"
            py={5}
            h="60vh"
            flexGrow={1}
            className="py-5 h-50"
            alignItems="center"
            justifyContent="space-around"
            margin="auto"
          >
            <Text fontWeight="bold" fontSize="4xl" textAlign="center">
              Your Cart is empty
            </Text>
            <Button size="lg" variant="solid" color="white" colorScheme="purple" bgColor="purple">Continue Shopping</Button>
          </Flex>
        ) : (
          <Box bg="white">
            <Box w={[]} px={['3px', '3px', '4%', '8%']} my={5}>
              <HStack
                width="100%"
                h={['60px', '40px']}
                spacing={0}
                fontWeight="extrabold"
                fontSize={['15px', '20px']}
              >
                <Flex w={['50%']} h="100%" py={2} px={1}>
                  ITEM
                </Flex>
                <Flex alignItems="center" w={['20%', '10%']} h="100%">
                  QTY
                </Flex>

                <Flex
                  width={['15%', '20%']}
                  h="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  UNIT PRICE
                </Flex>
                <Flex
                  width={['15%', '20%']}
                  h="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  SUBTOTAL
                </Flex>
              </HStack>
            </Box>

            <Box className="cart_items">
              <Box>
                {basket.map(item => (
                  <CheckoutProduct
                  key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    quantity={item.quantity}
                    Subtotal={item.Subtotal}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        )}

        {basket?.length > 0 && (
         <SubTotal/>
        )}
      </Box>
    </Container>
  );
}

export default Cart;
