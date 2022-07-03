import { Box, Grid, Heading, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import LeftCover from "./LeftCover";
import RightCover from "./RightCover";

const Cover = () => {
  const variant = useBreakpointValue({ sm: 'none', md: 'flex' })

  return (
    <Stack h="100%" w="100%" direction="row" pt={6}>

      <LeftCover/>
      <RightCover />
    </Stack>
  );
};

export default Cover;
