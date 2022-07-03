import React from 'react'
import { Box, Grid, SimpleGrid, Stack, useBreakpointValue  } from "@chakra-ui/react";
import Image from "next/image";
import leftall from "../../public/assets/leftall.svg";
import midtop from "../../public/assets/midtop.svg";
import midbot from "../../public/assets/midbot.svg";
import righttop from "../../public/assets/righttop.svg";
import rightmid from "../../public/assets/rightmid.png";

import rightdown from "../../public/assets/rightdown.svg";

const RightCover = () => {
  const variant = useBreakpointValue({ base: 'none', md: 'flex' })
  const gridvariant = useBreakpointValue({ base: '100%', md: '30% 40% 30%' })
  const gridNone = useBreakpointValue({ base: 'flex', md: 'grid' })

  return (
    <Stack w="100%">
    <Grid
      display={gridNone}
      py={30}
      h="100%"
      w="100%"
      templateColumns={gridvariant}
      alignContent="center"
    >
      <Stack display={variant} h="100%" w="100%" direction="column" justify="center">
        <Stack>
          <Image src={leftall} height={450} objectFit="contain" />
        </Stack>
      </Stack>

      <Stack
        h="100%"
        w="100%"
        direction="column"
        justify="center"
        align="center"
      >
        <Stack h="20%" w="100%" justify="center" align="center">
          <Image src={midtop} height={130} objectFit="contain" />
        </Stack>
        <Stack h="60%" w="100%" p={10} justify="center"></Stack>
        <Stack
          h="20%"
          w="100%"
          alignSelf="end"
          justify="center"
          align="center"
        >
          <Image src={midbot} height={140} objectFit="contain" />
        </Stack>
      </Stack>

      <Stack display={variant} h="100%" w="100%" direction="column" align="center" justify="center">
        <Stack h="20%" w="100%" align="center">
          <Image src={righttop} height={90} objectFit="contain" />
        </Stack>
        <Stack h="40%" w="100%" align="center">
          <Image src={rightmid} height={160} objectFit="contain" />
        </Stack>
        <Stack h="40%" w="100%" align="center">
          <Image src={rightdown} height={170} objectFit="contain" />
        </Stack>
      </Stack>
    </Grid>
  </Stack>
  )
}

export default RightCover