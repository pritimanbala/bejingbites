import {Flex, Image, Spinner, Heading} from '@chakra-ui/react'

const Loader = () => {
  return (
    <Flex h='100vh' align='center' justify='center' bg='black' flexDirection='column' color='white'>
        <Image src='/title.png' alt='Loading...' w='50%' my={4}/>
        <Spinner size='xl'/>
        <Heading my={4} color='white'>Loading...</Heading>
    </Flex>
  )
}

export default Loader
