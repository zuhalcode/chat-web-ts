import { Flex, Icon } from "@chakra-ui/react";
import { BsFillChatDotsFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <Flex
      direction="column"
      w="fit-content"
      minH="100vh"
      bg="blue.900"
      h="full"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        m={3}
        px={2}
        py={2}
        bg="blue.500"
        borderRadius="md"
      >
        <Icon as={BsFillChatDotsFill} boxSize={6} color="white" />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
