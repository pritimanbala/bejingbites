import { Box, Flex, Text, HStack, IconButton, Link } from '@chakra-ui/react'
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={6} px={4}>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" mx={8}>
        <Text fontSize="sm" mb={{ base: 4, md: 0 }} mx={5}>
          © 2025 Bejing Bites. All rights reserved.
        </Text>

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
      </Flex>
    </Box>
  )
}

export default Footer
