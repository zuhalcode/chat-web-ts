import FormInput from "@components/FormInput";
import { Logo } from "@components/Logo";
import { OAuthButtonGroup } from "@components/OAuthButtonGroup";
import PasswordField from "@components/PasswordField";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

type FormData = {
  email: string;
  password: string;
};

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  console.log(formData);

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="fg.muted">Don&apos;t have an account?</Text>
              <Button variant="text" size="lg" color="blue.500">
                <Link href="/auth/register" passHref>
                  Sign up
                </Link>
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormInput
                id="name"
                label="Name"
                placeholder="Your Name"
                onChange={handleOnChange}
              />
              <PasswordField onChange={handleOnChange} id="password" />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm" color="blue.500">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="primary" bg="blue.500" color="white">
                Sign in
              </Button>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
