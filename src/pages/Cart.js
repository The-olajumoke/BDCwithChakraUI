import { Button } from '@chakra-ui/button';
import { Box, Flex, HStack, Text } from '@chakra-ui/layout';
import React from 'react';
import CheckoutProduct from '../components/CheckoutProduct';
import Container from '../components/Container';
import { useHistory } from 'react-router-dom';

// import '../components/App.css';

// import Subtotal from '../components/Subtotal';

// import { useStateValue } from '../components/StateProvider';
// import CheckoutProduct from '../components/CheckoutProduct';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

function Cart() {
  const history = useHistory();

  //   const [{ basket }] = useStateValue();
  const basket = ['ehllo', 2, 3, 5, 65, 7];

  return (
    <Container>
      <Box>
        {basket?.length === 0 ? (
          <Flex
            width={['60%', '40%']}
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
            <Button
              size="lg"
              variant="solid"
              color="white"
              colorScheme="purple"
              bgColor="purple"
            >
              Continue Shopping
            </Button>
          </Flex>
        ) : (
          <Box bg="white">
            <Box w={[]} px={['3px', '3px', '4%', '8%']} my={5}>
              <HStack
                width="90vw"
                px={3}
                margin="auto"
                alignItems="center"
                h={['60px', '40px']}
                spacing={0}
                fontWeight="extrabold"
                fontSize={['12px', '20px']}
                bgColor={['purple.200', 'white']}
                fontStyle="italic"
                justifyContent="space-between"
              >
                <Flex w={['30%', '50%']} py={2} px={1}>
                  ITEM
                </Flex>
                <Flex alignItems="center" w={['20%', '10%']}>
                  QTY
                </Flex>

                <Flex
                  width={['15%', '20%']}
                  alignItems="center"
                  justifyContent="center"
                >
                  PRICE
                </Flex>
                <Flex width={'20%'} alignItems="center" justifyContent="center">
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
          <Box
            w={['95%', '85%']}
            display="flex"
            flexDir="column"
            alignItems="flex-end"
            margin="auto"
            textAlign="center"
          >
            <Flex alignItems="center">
              <Text fontWeight="bold" fontSize="2xl">
                Total:
              </Text>
              <Text fontWeight="bold" fontSize="3xl">
                $19.40
              </Text>
            </Flex>

            <Box>
              <Button
                m={5}
                size="lg"
                type="button"
                variant="outline"
                colorScheme="purple"
              >
                Proceed
              </Button>
              <Button
                m={5}
                size="lg"
                variant="outline"
                colorScheme="purple"
                onClick={() => history.push('../')}
              >
                Continue Shoping
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Cart;
