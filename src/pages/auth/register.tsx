import FormInput from "@components/FormInput";
import { Logo } from "@components/Logo";
import { OAuthButtonGroup } from "@components/OAuthButtonGroup";
import PasswordField from "@components/PasswordField";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/register", formData);
      console.log(res.data);

      // Reset the form after successful registration
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("Registration error:", error);
    }
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
              Create New Account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="fg.muted">Already have an account?</Text>
              <Button variant="text" size="lg" color="blue.500">
                <Link href="/auth/login" passHref>
                  Sign In
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
            <form onSubmit={handleOnSubmit}>
              <Stack spacing="5">
                <FormInput
                  label="Name"
                  id="name"
                  placeholder="Your Name"
                  onChange={handleOnChange}
                />
                <FormInput
                  label="Email"
                  id="email"
                  placeholder="Your Email"
                  onChange={handleOnChange}
                />
                <PasswordField onChange={handleOnChange} />
              </Stack>
              <Stack spacing="6" mt="3">
                <Button
                  variant="primary"
                  bg="blue.500"
                  color="white"
                  onClick={handleOnSubmit}
                >
                  Sign up
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
            </form>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
