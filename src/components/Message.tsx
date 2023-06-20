import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type ParentProps = {
  children: ReactNode;
  right?: boolean;
  mt?: number;
};

const Message = ({ children, right, mt }: ParentProps) => {
  return (
    <Box
      bg={right ? "green.800" : "gray.300"}
      px={3}
      py={2}
      borderRadius="lg"
      maxW="80%"
      alignSelf={right ? "flex-end" : "flex-start"}
      mt={mt}
    >
      <Text fontSize={14} color={right ? "white" : "black"}>
        {children}
      </Text>
    </Box>
  );
};

export default Message;
