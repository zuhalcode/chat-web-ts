import { Divider, Flex, Icon, Input } from "@chakra-ui/react";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import { IoPaperPlaneSharp } from "react-icons/io5";
import axios from "axios";

const TypeBoard = () => {
  const [input, setInput] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const sendMessage = async () => {
    try {
      const res = await axios.post("/api/message/send", {
        message: input,
      });
      console.log(res);
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendMessage = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <Flex borderTop="1px" borderColor="gray.300" p={4}>
      <Flex
        w="95%"
        bg="gray.200"
        p={2}
        borderLeftRadius="md"
        alignItems="center"
        gap={3}
      >
        <Icon as={AiOutlinePlusCircle} boxSize={8} />
        <Input
          placeholder="Type a message"
          size="md"
          variant="unstyled"
          value={input}
          onChange={handleOnChange}
          onKeyDown={handleSendMessage}
        />
        <Flex alignItems="center" pr={1}>
          <Icon as={FaRegSmile} boxSize={6} />
          <Divider />
        </Flex>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        p={2}
        _hover={{
          cursor: "pointer",
          bg: "green.800",
          color: "white",
          transition: ".2s",
        }}
        bg="gray.200"
        borderRightRadius="md"
      >
        <Icon as={IoPaperPlaneSharp} boxSize={6} />
      </Flex>
    </Flex>
  );
};

export default TypeBoard;
