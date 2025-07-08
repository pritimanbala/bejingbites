import { Flex, Heading, Image, Text, Button } from '@chakra-ui/react'

const HeroSection = () => {
    
    return (

        <Flex alignItems='center'
            justifyContent='center'
            backgroundSize='cover'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            flexDirection='column'
            backgroundImage="url('https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg')"
            h='100vh'
            color='white'>
            <Heading size='sm' >
                PRESENTING OUR NEW
            </Heading>
            <Image src="https://blanquette.qodeinteractive.com/wp-content/uploads/2021/10/Landing-title-rev.png" alt="" />
            <Text
                fontFamily="'Playfair Display', serif"
                fontSize={{ base: "md", md: "xl", lg: "2xl" }}
                textAlign="center"
                letterSpacing="wider"
                mt={2}
            >
                A Taste of Beijing, Served with Elegance
            </Text>
            <Button variant='outline' colorScheme='yellow' mt={4}>Explore Menu</Button>
        </Flex>

    )
}

export default HeroSection
