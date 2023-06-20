import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import CircleImage from "./CircleImage";

type ParentProps = {
  active?: boolean;
  pinned?: boolean;
  image: string;
};

const ChatContact = ({ active, pinned, image }: ParentProps) => {
  return (
    <>
      <Box
        px={4}
        pt={2}
        py={pinned ? 3 : 0}
        bg={active ? "gray.100" : ""}
        _hover={{ bg: "gray.100", cursor: "pointer" }}
      >
        <Flex w="full" gap={2} alignItems="center" pt={pinned ? 0 : 3}>
          <CircleImage image={image} />
          <Flex direction="column">
            <Text fontWeight="bold">Mairatul</Text>
            <Flex gap={1}>
              <Text fontSize={14} fontWeight="medium">
                You :
              </Text>
              <Text fontSize={14} fontWeight="medium" color="gray.500">
                Aku ngganteng bro
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {!pinned && (
          <Divider
            borderWidth="1.2px"
            borderColor="gray.200"
            mt={5}
            mx="auto"
          />
        )}
      </Box>
    </>
  );
};

export default ChatContact;
