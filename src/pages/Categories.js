import { Button, ButtonGroup } from '@chakra-ui/button';
import React from 'react';
import Container from '../components/Container';
import {
  FaBabyCarriage,
  FaBicycle,
  FaBook,
  FaShoePrints,
} from 'react-icons/fa';
import { GiDress, GiShirt } from 'react-icons/gi';

function Categories() {
  return (
    <>
      <Container>
        <ButtonGroup
          justifyContent="center"
          m={10}
          flexDir={['column', 'row']}
          spacing={['0', '4']}
          fontWeight="black"
          fontSize="xl"
        >
          <Button mb={3} rightIcon={<FaBabyCarriage />} size="lg">
            Infant
          </Button>
          <Button size="lg" mb={3} rightIcon={<GiDress />}>
            Girls
          </Button>
          <Button size="lg" mb={3} rightIcon={<FaBabyCarriage />}>
            Babies
          </Button>

          <Button size="lg" mb={3} rightIcon={<FaBicycle />}>
            Toys
          </Button>

          <Button size="lg" mb={3} rightIcon={<GiShirt />}>
            Boys
          </Button>

          <Button size="lg" mb={3} rightIcon={<FaShoePrints />}>
            Shoes
          </Button>

          <Button size="lg" mb={3} rightIcon={<FaBook />}>
            Back to School
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
}

export default Categories;
