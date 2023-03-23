import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Login() {
  const obj = {
    email: "",
    password: "",
  };
  const [userData, setuserData] = useState(obj);
  const navigate = useNavigate();
  const handleLogin = () => {
    if (userData.email.length === 0) {
      alert("Enter username");
    } else if (userData.password.length === 0) {
      alert("Enter password");
    } else {
      getUserData();
    }
  };

  const getUserData = async () => {
    const url = `https://note-app-data.onrender.com/users`;
    const data = await fetch(url);
    const res = await data.json();
    const valid = res.filter((item) => {
      if (item.email === userData.email) {
        localStorage.setItem("userAuth", JSON.stringify("true"));
        localStorage.setItem("userData", JSON.stringify(item));
        navigate("/home");
        return item;
      }
    });

    if (Object.keys(valid).length === 0) {
      alert("In valid credentials");
    }
  };

  const { email, password } = userData;

  return (
    <Flex
      mt={6}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={2} mx={"auto"} maxW={"lg"}>
        <Stack align={"center"}>
          <Heading fontSize={["3xl", "4xl"]}>Log in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to create your own <Link color={"blue.400"}>notes</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={6}
        >
          <Stack spacing={3}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) =>
                  setuserData({ ...userData, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) =>
                  setuserData({ ...userData, password: e.target.value })
                }
              />
            </FormControl>
            <Stack spacing={8}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"#84A6D3"}
                color={"white"}
                onClick={handleLogin}
                _hover={{
                  bg: "#E9F3FB",
                  color: "#84A6D3",
                }}
              >
                Login
              </Button>
            </Stack>
            <Stack pt={4}>
              <Text align={"center"}>
                Don't have an account?{" "}
                <Link to="/" color={"blue.400"}>
                  SignUp
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
