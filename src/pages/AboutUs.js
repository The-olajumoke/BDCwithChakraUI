import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebookSquare,  FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import Container from '../components/Container'

function AboutUs() {
    return (
      <Container>
        <Box
          w={["95%","80%"]}
          margin="auto"
          textAlign="left"
          fontSize="lg"
          lineHeight={10}
          p={["3","10"]}
        >
          <Box>
            <Heading>About Us</Heading>
            BaviesDotCom is your number one maternity, newborn, baby, toddler
            and kiddies online and offline store in Nigeria. Getting quality
            mother care and kiddies products from the Uk, US and Turkey here in
            Nigeria has never been made so easy online,so BDC is here to give
            you assurance, you dont need to worry about getting value for your
            money. With our money back guarantee you can trust us to deliver
            what you order in good time.
            <Text>
              We serve a retail customer base that continues to grow
              exponentially, offering products that span various categories
              including children toys, Clothes, Shoes, Back to school
              Equipments,Books, healthcare, Baby Products, personal care and
              much more
            </Text>
          </Box>
          <Box>
            <Heading>Contact</Heading>
            <Text>
              N0. 19 Owolabi street, araromi area, ijeododo island,Ikotun Lagos
              Mondays - Saturday
            </Text>
            <Text> Tel:08037183028</Text>
          </Box>
          <Flex color="purple" padding="3"   w={["80%", "20%"]} justifyContent="space-between">
            {/* <TwitterIcon className="footer__icon mr-3" /> */}
            <FaTwitter className="footer__icon" />
            <FaFacebookSquare className="footer__icon" />
            <FaLinkedin className="footer__icon" />
            <FiInstagram className="footer__icon" />
          </Flex>
          
        </Box>
      </Container>
    );
}

export default AboutUs
