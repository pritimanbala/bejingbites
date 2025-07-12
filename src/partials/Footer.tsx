import { Box, Flex, Text, HStack, IconButton, Link, VStack} from '@chakra-ui/react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={10} px={6}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="flex-start"
        maxW="1200px"
        mx="auto"
        gap={8}
        flexWrap="wrap"
      >
        {/* Company Info */}
        <VStack align="flex-start" spacing={3}>
          <Text fontSize="lg" fontWeight="bold">
            Beijing Bites
          </Text>
          <HStack align="flex-start">
            <FaMapMarkerAlt />
            <Text>
              Hong Kong Market, Venus More,<br />Siliguri, West Bengal 733101
            </Text>
          </HStack>
          <HStack>
            <FaPhoneAlt />
            <Text>+91 98765 43210</Text>
          </HStack>
          <HStack>
            <FaEnvelope />
            <Text>contact@beijingbites.in</Text>
          </HStack>
        </VStack>

        {/* Opening Hours */}
        <VStack align="flex-start" spacing={3}>
          <HStack>
            <FaClock />
            <Text fontSize="lg" fontWeight="bold">Opening Hours</Text>
          </HStack>
          <Text>Mon – Fri: 11:00 AM – 11:00 PM</Text>
          <Text>Sat – Sun: 12:00 PM – 12:00 AM</Text>
        </VStack>

        {/* Social Media */}
        <VStack align="flex-start" spacing={3}>
          <Text fontSize="lg" fontWeight="bold">Follow Us</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <IconButton icon={<FaFacebookF />} aria-label="Facebook" variant="ghost" colorScheme="whiteAlpha" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <IconButton icon={<FaTwitter />} aria-label="Twitter" variant="ghost" colorScheme="whiteAlpha" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <IconButton icon={<FaInstagram />} aria-label="Instagram" variant="ghost" colorScheme="whiteAlpha" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <IconButton icon={<FaLinkedinIn />} aria-label="LinkedIn" variant="ghost" colorScheme="whiteAlpha" />
            </Link>
          </HStack>
        </VStack>
      </Flex>

      <Text textAlign="center" fontSize="sm" mt={10} opacity={0.7}>
        © 2025 Beijing Bites. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
