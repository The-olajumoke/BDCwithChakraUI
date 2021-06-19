import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement,  } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { FaBaby, FaBabyCarriage, FaEye } from 'react-icons/fa';
import { FiEyeOff, FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

function Form() {
    const [show, setShow ] = useState(false)
    const handleClick=()=>setShow(!show)
  const history = useHistory();

return (
  <Flex h="70vh" justifyContent="center" alignItems="center">
    <Flex
      // w={['90vw', '40vw']}
      w={['90%', '35%']}
      direction="column"
      border="2px"
      bgColor="blue.100"
      p={4}
      m="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box pb={10}>
        <Text fontSize="4xl" textAlign="center" fontWeight="semibold">
          BabiesDotCom
        </Text>
      </Box>
      <FormControl isRequired p={2}>
        <Box>
          <FormLabel>Email:</FormLabel>
          <InputGroup>
            <Input variant="filled" placeholder="Enter email address..." />
          </InputGroup>
        </Box>
        <Box>
          <FormLabel>Password:</FormLabel>
          <InputGroup alignItems="center">
            <Input
              w="92%"
              variant="filled"
              type={show ? 'text' : 'password'}
              placeholder="Enter Password..."
              width="4.5rem"
            />
            <InputRightElement
              children={
                <Button w="10%"  onClick={handleClick}>
                  {show ? <FiEyeOff size="100px" /> : <FaEye size="100px" />}
                </Button>
              }
            />
          </InputGroup>
        </Box>
        <Flex justifyContent="center" alignItems="center" py={4}>
          <Button
            margin="auto"
            variant="solid"
            bgColor="purple"
            size="lg"
            w={['50%']}
            fontWeight="semi-bold"
            color="white"
            onClick={ ()=>history.push("./add-item")}
          >
            LOG IN
            <FiLogIn />
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  </Flex>
);
}

export default Form;
