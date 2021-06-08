import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { HStack } from '@chakra-ui/layout';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/number-input';
import { Textarea } from '@chakra-ui/textarea';

import React from 'react';

function addForm() {
   function validateName(value) {
     let error;
     if (!value) {
       error = 'Name is required';
     } else if (value.toLowerCase() !== 'naruto') {
       error = "Jeez! You're not a fan 😱";
     }
     return error;
   }
  return (
    <FormControl border="2px" p={4} m="auto" w="40%" isRequired>
      <FormLabel>Choose Product Image</FormLabel>

      <Input type="file" accept="image/png, image/jpeg" />
      <FormLabel>Item name</FormLabel>
      <Input placeholder="Enter item name..." />
      <FormLabel>Price</FormLabel>
      <NumberInput>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormLabel>Sizes</FormLabel>
      <CheckboxGroup>
        <HStack>
          <Checkbox value="XL">XL</Checkbox>
          <Checkbox value="LG">LG</Checkbox>
          <Checkbox value="MD">MD</Checkbox>
          <Checkbox value="SM">SM</Checkbox>
        </HStack>
      </CheckboxGroup>
      <FormLabel>Ratings</FormLabel>
      <NumberInput  defaultValue={5}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <FormLabel>Description</FormLabel>
      <Textarea placeholder="Enter Product Description..." />

      {/* Select input fro colours */}
      {/* Radio button fro status */}
    </FormControl>
  );
}

export default addForm;

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }