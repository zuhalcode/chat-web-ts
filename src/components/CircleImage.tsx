import { Flex, Image } from "@chakra-ui/react";

type ParentProps = {
  image: string;
  bordered?: boolean;
};

const CircleImage = ({ image, bordered }: ParentProps) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      p={1}
      bg={bordered ? "gray.200" : ""}
      borderRadius="full"
    >
      <Image src={image} alt="" w={10} borderRadius="full" />
    </Flex>
  );
};

export default CircleImage;
