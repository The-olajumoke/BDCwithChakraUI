import { Button } from '@chakra-ui/button';
import { FaShoppingCart } from 'react-icons/fa';
import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Heading, HStack } from '@chakra-ui/layout';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/number-input';
import { SelectField } from '@chakra-ui/select';
import { Textarea } from '@chakra-ui/textarea';

import React from 'react';

function addForm() {
  return (
    <Box w="100%" p={2}>
      <Heading textAlign="center" my={5}>
        Add New Item
      </Heading>
      <FormControl
        w={['90%', '40%']}
        margin="auto"
        border="2px"
        p={4}
        m="auto"
        isRequired
      >
        <FormLabel>Choose Product Image</FormLabel>

        <Input type="file" accept="image/png, image/jpeg" />
        <FormLabel>Item name</FormLabel>
        <Input placeholder="Enter item name..." />
        <FormLabel>Price </FormLabel>
        <NumberInput min={1} defaultValue={1}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormLabel>Choose available color</FormLabel>

        <input type="color" />
        <FormLabel>Sizes</FormLabel>
        <CheckboxGroup>
          <HStack>
            <Checkbox value="XL">XL</Checkbox>
            <Checkbox value="LG">LG</Checkbox>
            <Checkbox value="MD">MD</Checkbox>
            <Checkbox value="SM">SM</Checkbox>
          </HStack>
        </CheckboxGroup>
        <SelectField></SelectField>
        <FormLabel>Ratings</FormLabel>
        <NumberInput max={5} defaultValue={5}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Enter Product Description..." />
        <Flex justifyContent="center" my={2} >
          <Button
            variant="outline"
            bgColor="purple"
            size="lg"
            fontWeight="semi-bold"
            color="white"
          >
            Add new Item
            <FaShoppingCart />
          </Button>
        </Flex>
        {/* Select input fro colours */}
        {/* Radio button fro status */}
      </FormControl>
    </Box>
  );
}

export default addForm;
