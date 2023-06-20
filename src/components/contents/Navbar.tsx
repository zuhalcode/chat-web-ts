import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import CircleImage from "../CircleImage";

const Navbar = () => {
  return (
    <Flex
      w="full"
      justifyContent="end"
      borderBottom="1px"
      borderColor="gray.300"
      px={10}
      py={3}
    >
      <Flex gap={3}>
        {/* Profile */}
        <Flex gap={2} alignItems="center" justifyContent="center">
          <CircleImage image="/images/profile.jpg" bordered />
          <Flex direction="column">
            <Text fontSize={16} fontWeight="medium">
              Zuhal Code
            </Text>
            <Text fontSize={14} color="gray.500" fontWeight="medium">
              Programmer
            </Text>
          </Flex>
        </Flex>
        {/* Profile */}
      </Flex>
    </Flex>
  );
};

export default Navbar;
