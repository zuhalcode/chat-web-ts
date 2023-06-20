import React from "react";
import ChatContact from "../ChatContact";
import { Box, Flex, GridItem, Icon, Text } from "@chakra-ui/react";
import {
  BsFillChatDotsFill,
  BsPinAngleFill,
  BsThreeDotsVertical,
} from "react-icons/bs";

const ContactBox = () => {
  return (
    <>
      {/* Header */}
      <Flex gap={3} p={4} justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">Messages</Text>
        <Flex gap={2}>
          <Flex
            border="1px"
            borderColor="gray.500"
            w="fit-content"
            justifyContent="center"
            alignItems="center"
            px={2}
            py={2}
            borderRadius="sm"
          >
            <Icon as={BsThreeDotsVertical} />
          </Flex>
          <Flex
            border="1px"
            borderColor="gray.500"
            w="fit-content"
            justifyContent="center"
            alignItems="center"
            px={2}
            py={2}
            borderRadius="sm"
          >
            <Icon as={BsFillChatDotsFill} />
          </Flex>
        </Flex>
      </Flex>
      {/* Header */}

      {/* Pinned Contact */}
      <Box>
        {/* Pinned Text */}
        <Flex alignItems="center" gap={1} px={4} pb={3} color="gray.600">
          <Icon as={BsPinAngleFill} />
          <Text fontWeight="medium" fontSize={14}>
            Pinned
          </Text>
        </Flex>
        {/* Pinned Text */}

        <Flex direction="column">
          <ChatContact pinned image="/images/profile2.jpg" />
          <ChatContact pinned image="/images/profile2.jpg" />
        </Flex>
      </Box>
      {/* Pinned Contact */}

      {/* All Message */}
      <Box mt={5}>
        {/* All Message Text */}
        <Flex alignItems="center" gap={1} px={4} pb={3} color="gray.600">
          <Icon as={BsPinAngleFill} />
          <Text fontWeight="medium" fontSize={14}>
            All messages
          </Text>
        </Flex>
        {/* All Message Text */}

        <Flex direction="column">
          <ChatContact active image="/images/profile2.jpg" />
          <ChatContact image="/images/profile2.jpg" />
        </Flex>
      </Box>
      {/* All Message */}
    </>
  );
};

export default ContactBox;
