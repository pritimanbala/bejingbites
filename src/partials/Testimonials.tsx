import { Box, VStack, Text, Avatar} from "@chakra-ui/react"
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.css';
import {Autoplay} from 'swiper/modules';
import type { RefObject } from "react";


interface TestimonialsProp {
  menuRef: RefObject<HTMLDivElement>
}
const Testimonials = ({menuRef} : TestimonialsProp) => {
  const testimonials = [
  {
    name: 'Alice Thompson',
    message:
      "Dining here was nothing short of magical. The flavors were bold and harmonious, every dish was plated with such artistry that I almost didn’t want to eat it — but I’m so glad I did. The starters set the tone, but it was the main course that stole the show. The dessert? A dream. I felt like I was taken on a culinary journey. It’s rare to find a place that gets taste, service, and ambiance all so right.",
    image: '/images/alice.jpg',
  },
  {
    name: 'Bob Martinez',
    message:
      "I walked in expecting just a good meal, but what I got was an experience. The lighting, music, and decor created a relaxed yet sophisticated vibe. The staff was attentive without being overbearing, and the chef's special of the evening was simply divine. Every bite had layers of flavor, and the wine pairing suggested by the server was spot-on. This is now my go-to place for special occasions and quiet evenings alike.",
    image: '/images/bob.jpg',
  },
  {
    name: 'Carol Nguyen',
    message:
      "It’s not often I find myself smiling after every course, but this restaurant managed to do just that. From the warm greeting at the door to the final spoon of dessert, it felt like I was being treated like royalty. The service was exceptional — they remembered our names, catered to our dietary preferences without hesitation, and offered thoughtful recommendations. This was more than a meal, it was a memory I’ll treasure.",
    image: '/images/carol.jpg',
  },
];
  return (
    <Box 
    ref={menuRef}
    bg='url("https://images.pexels.com/photos/3184179/pexels-photo-3184179.jpeg")'
    h='fit-content'
    backgroundPosition='center'
    backgroundRepeat='no-repeat'
    backgroundSize='cover'
    //normal what codes are used for managing the background image
   >
    <Box backdropFilter='blur(20px)'>
    <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        loop={true}
        autoplay={{delay: 3000}}
        //this is a new library used for sweep functions
        >
          {testimonials.map((t,i) => (
            <SwiperSlide key={i}>
              {/* you need to remember this while doing or setting up swiper  */}
              <VStack py={8}>
                <Avatar/>
                <Text color='white' fontSize='xl' fontWeight='bold'>{t.name}</Text>
                <Text color='white' fontSize='md' w='50%' textAlign='center'>{t.message}</Text>
              </VStack>
            </SwiperSlide>
          ))}
        </Swiper>
    </Box>
      
    </Box>
  )
}

export default Testimonials
