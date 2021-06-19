import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/image';
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import { useHistory } from 'react-router-dom';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/number-input';
import React, { useState } from 'react';
// import './Cart.css';
// import Love from '@material-ui/icons/FavoriteBorder';
// import Bin from '@material-ui/icons/Delete';
// import { useStateValue } from './StateProvider';
import image from '../newImg/blanket-2593141_1920.jpg';
import { FaHeart } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';
import { GiCancel, GiHeartNecklace } from 'react-icons/gi';
import { FiHeart } from 'react-icons/fi';
function CheckoutProduct({ id, name, description, price, quantity }) {
  const [likeState, setLikeState] = useState(false);
  const history = useHistory();

  //   const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // dispatch({
    //   type: 'REMOVE_FROM_BASKET',
    //   id: id,
    // });
  };

  const handleChange = e => {
    // dispatch({
    //   type: 'SET_QUANTITY',
    //   payload: { id: id, quantity: +e.target.value },
    // });
  };
  return (
    <Box w={[]} px={['3px', '3px', '4%', '8%']} my={5}>
      <Flex
        width={['98%', '100%']}
        h={['200px', '160px']}
        borderRadius="xl"
        border="2px"
        spacing={0}
        position="relative"
        direction={['column', 'row']}
        margin="auto"
      >
        <GiCancel
          style={{
            position: 'absolute',
            top: '-15px',
            right: '-7px',
            backgroundColor: 'red',
            borderRadius: '50%',
            fontSize: '25px',
            cursor: 'pointer',
            color: 'white',
          }}
        />

        <Flex
          direction="row"
          w={['100%', '55%']}
          h="100%"
          borderLeft={0}
          py={['1', '2']}
          px={1}
          justifyContent={[' space-between', 'space-around']}
        >
          <Img
            w={['40%', '40%']}
            h="auto"
            src={image}
            onClick={() => history.push(`./about/${id}`)}
          />
          <VStack textAlign="left">
            <Text
              fontWeight="bold"
              flexWrap="wrap"
              fontStyle="italic"
              fontFamily="cursive"
              fontSize={['17px', '25px']}
              flexGrow={1}
            >
              The best Cutton Towel ever
            </Text>
            <VStack w="100%" flexGrow={1}>
              <Text fontSize={['15px']} fontFamily="cursive" fontStyle="italic">
                Color: <b>RED</b>
              </Text>
              <Button>
                <FiHeart
                  style={{ backgroundColor: 'white' }}
                  // className="footer__icon"
                  fill={likeState ? 'red' : 'transparent'}
                  onClick={() => {
                    setLikeState(state => !state);
                  }}
                />
              </Button>
            </VStack>
          </VStack>
        </Flex>
        {/* BUTTONS FOR */}
        <Flex
          direction={['row', ' ']}
          w={['100%', '40%']}
fontWeight="black"          justifyContent="space-around"
          alignItems="center"
          bgColor={['purple.400', 'white']}
          borderBottomRightRadius="xl"
          borderBottomLeftRadius="xl"
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            w={['25%', '10%']}
            flexGrow={1}
            h="100%"
            borderLeft="2px"
            fontSize={['15px', '15px']}
            margin="auto"
          >
            <NumberInput defaultValue={15} min={1} max={20}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>

          <Flex
            flexGrow={1}
            h="100%"
            borderLeft="2px"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontWeight="semibold" fontSize={['15px', '25px']}>
              ${14.0}
            </Text>
          </Flex>
          <Flex
            flexGrow={1}
            h="100%"
            borderLeft="2px"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontWeight="semibold" fontSize={['15px', '25px']}>
              $ 14.00
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default CheckoutProduct;
