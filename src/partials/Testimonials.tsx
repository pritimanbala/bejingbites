import { Box, Flex, Text, Image} from "@chakra-ui/react"

const Testimonials = () => {
  return (
    <Box
    bg='url("https://images.pexels.com/photos/3184179/pexels-photo-3184179.jpeg")'
    h='fit-content'
    backgroundPosition='center'
    backgroundRepeat='no-repeat'
    backgroundSize='cover'>
        <Flex align='center' justify='center' h='100%' w='100%' flexDirection='column' backgroundColor='rgba(0,0,0,0.1)' backdropFilter='blur(7px)' p={12}>
                <Image src="/vite.svg" h='50px' w='50px' borderRadius={99999} backgroundColor='black'></Image>
                <Text my={4} color='white' fontWeight={500} fontSize={20}>Pritiman Bala</Text>
                <Text w='50%' textAlign='justify' my={1} color='white' >Dining at Jin Long Tian Fu is not just a meal—it’s a spiritual journey through centuries of culinary mastery. Each dish tells a story, blending tradition with innovation in a way I’ve never experienced before. </Text>
        </Flex>
    </Box>
  )
}

export default Testimonials
