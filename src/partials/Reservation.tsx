import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import "../partial-statics/reservation.css"

import type{ RefObject } from "react"

interface ReservationProps {
    reserveRef: RefObject<HTMLDivElement>;
}

const Reservation = ({ reserveRef }: ReservationProps) => {
    return (
        <Box ref={reserveRef}
            bg='url("https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg")'
            h='fit-content'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'>
            <Flex align='center' justify='center' h='100%' w='100%' flexDirection='column'
                backgroundColor='rgba(0,0,0,0.1)' backdropFilter='blur(7px)' p={12}>
                <Heading my={4} color='white'>RESERVATION</Heading>
                <Text fontSize="lg" textAlign="center" color="white" mb={2}>
                    Book your table in advance and skip the wait.
                </Text>
                {/* you can use the Vstack and hstack but again its okay to use flex */}
                <Flex flexDirection='column' h='50vh' w='80%' minW='300px'>
                    <form action="">
                        <Flex justify='space-between' align='center'>
                            <input type="text" name="" id="" placeholder="NAME*" required />
                            <input type="number" name="" id="" placeholder="PHONE*" required />
                        </Flex>
                        <Flex justify='space-between' align='center'>
                            <input type="datetime-local" name="" id="" placeholder="DD-MM-YYYY*" required />
                            <input type="number" name="" id="" placeholder="SEATS*" />
                        </Flex>
                        <Flex justify='space-between' align='center'>
                            <input type="email" placeholder="EMAIL" />
                        </Flex>
                        <Flex justify='space-between' align='center'>
                            <textarea name="" id="" placeholder="NOTES" rows={4}></textarea>
                        </Flex>
                        <Flex justify='center' align='center' w={20} width='100%'>
                            <input type="submit" value="Submit" />
                        </Flex>
                    </form>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Reservation
