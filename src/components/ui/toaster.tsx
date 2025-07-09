// "use client"

// import {
//   Toaster as ChakraToaster,
//   Portal,
//   Spinner,
//   Stack,
//   Toast,
//   createToaster,
// } from "@chakra-ui/react"

// export const toaster = createToaster({
//   placement: "bottom-end",
//   pauseOnPageIdle: true,
// })

// export const Toaster = () => {
//   return (
//     <Portal>
//       <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
//         {(toast) => (
//           <Toast.Root width={{ md: "sm" }}>
//             {toast.type === "loading" ? (
//               <Spinner size="sm" color="blue.solid" />
//             ) : (
//               <Toast.Indicator />
//             )}
//             <Stack gap="1" flex="1" maxWidth="100%">
//               {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
//               {toast.description && (
//                 <Toast.Description>{toast.description}</Toast.Description>
//               )}
//             </Stack>
//             {toast.action && (
//               <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
//             )}
//             {toast.closable && <Toast.CloseTrigger />}
//           </Toast.Root>
//         )}
//       </ChakraToaster>
//     </Portal>
//   )
// }


"use client"

import {
  Box,
  Button,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react"

export const Toaster = () => {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: "Loading...",
      description: "This is a custom toast with a spinner.",
      status: "loading",
      duration: 3000,
      isClosable: true,
      render: () => (
        <Box
          bg="gray.700"
          color="white"
          p={4}
          borderRadius="md"
          display="flex"
          alignItems="center"
        >
          <Spinner size="sm" color="blue.300" mr={3} />
          <Stack spacing={1}>
            <Text fontWeight="bold">Loading...</Text>
            <Text fontSize="sm">Please wait while we process your request.</Text>
          </Stack>
        </Box>
      ),
    })
  }

  return (
    <Button onClick={showToast}>
      Show Toast
    </Button>
  )
}
