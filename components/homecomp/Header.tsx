import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box>
      <Stack
        h='40px'
        borderY="3px solid black"
        justify="center"
      >
        <Stack
          w="200px"
          h="100%"
          justify="center"
          align="center"
          borderRight="3px solid black"
        >
          <Text fontWeight="500" fontSize={20}>A. F</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
