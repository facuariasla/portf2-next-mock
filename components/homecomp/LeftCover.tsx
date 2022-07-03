import { Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

const LeftCover = () => {
  const variant = useBreakpointValue({ base: 'none', md: 'flex' })

  return (
    <Stack w="100%" justify="center" display={variant}>
    <Stack >
      <Text fontSize={24} fontWeight={500}>
        LOREM IPSUM SUBTITLE
      </Text>
    </Stack>
    <Stack>
      <Heading m={0} py={0} fontSize={60} fontWeight={700}>
        Facundo Arias
      </Heading>
      <Heading m={0} py={0} fontSize={60} fontWeight={700}>
        Frontend Dev
      </Heading>
    </Stack>
    <Stack h="20%" direction="row">
      <Stack alignSelf="flex-end" w="200px" borderY="3px solid black" align='center'>
        <Stack w='100px' borderX='3px solid black' h='100%'>
          <Text fontSize={24} fontWeight={500} textAlign="center">
            2022
          </Text>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
  )
}

export default LeftCover