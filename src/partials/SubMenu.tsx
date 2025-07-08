import { Box, Flex, Image, Heading, AspectRatio } from "@chakra-ui/react"

const SubMenu = () => {
  const items = [
    {
      thing: 'Starter',
      src: 'https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg'
    }, {
      thing: 'Main Course',
      src: 'https://images.pexels.com/photos/23370999/pexels-photo-23370999.jpeg'
    }, {
      thing: 'Desert',
      src: 'https://images.pexels.com/photos/19902252/pexels-photo-19902252.jpeg'
    },
  ]
  return (
    <Box bg='rgba(214, 172, 20, 0.1)'>
      <Heading w='100%' textAlign='center' fontFamily="'Playfair Display', serif" fontSize='clamp(3rem, 2vh, 5rem)' py={7}>OUR MENU</Heading>
      <Flex direction='row' justify='center' align='center' w='100%' p={4} gap={5} >
        {items.map((details, index) => (
          <Box key={index} border='1px solid black' zIndex={99} textAlign='center' flexWrap='wrap' maxW='300px' w={{ base: "100%", sm: "80%", md: "45%", lg: "30%" }} transition='all 0.25s ease-in-out'
            sx={{
              ':hover': {
                borderRadius: "99px",
                cursor: 'pointer',
                bg: 'rgba(0, 0, 0, 0.1)'
                
              }
            }}>
            <AspectRatio ratio={9 / 16}>

              <Image w='100%' src={details.src} objectFit='cover'></Image>
            </AspectRatio>
          </Box>))}
      </Flex>
    </Box>
  )
}

export default SubMenu
