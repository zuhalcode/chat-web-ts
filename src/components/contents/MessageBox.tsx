import { Box, Divider, Flex, Icon, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CircleImage from "../CircleImage";
import Message from "../Message";
import TypeBoard from "./TypeBoard";
import axios, { AxiosResponse } from "axios";

interface Message {
  id: number;
  content: string;
  senderId: number;
  receiverId: number;
}

const MessageBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const userId: Number = 1;
  const scrollbarStyles = {
    overflowX: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: "gray.300 transparent",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "gray.300",
      borderRadius: "3px",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: AxiosResponse<Message[]> = await axios.post(
          "/api/message/1/2/retrieve"
        );
        setMessages(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(messages);
  return (
    <>
      {/* Header */}
      <Flex
        w="full"
        gap={1}
        alignItems="center"
        px={3}
        py={1}
        borderBottom="1px"
        borderColor="gray.300"
      >
        <CircleImage image="/images/profile2.jpg" />
        <Box>
          <Text fontWeight="bold" fontSize={14}>
            Mairatul
          </Text>
          <Text fontWeight="medium" fontSize={12}>
            Online
          </Text>
        </Box>
      </Flex>
      {/* End Header */}

      {/* Message */}
      <Flex
        gap={1}
        p={4}
        direction="column"
        maxH="65vh"
        minH="65vh"
        overflowY="auto"
        sx={scrollbarStyles}
      >
        {messages.map((message, index) =>
          userId === message.senderId ? (
            <Message key={index} right>
              {message.content}
            </Message>
          ) : (
            <Message key={index}>{message.content}</Message>
          )
        )}
      </Flex>
      {/* Message */}

      {/* Type Board */}
      <TypeBoard />
      {/* Type Board */}
    </>
  );
};

export default MessageBox;
