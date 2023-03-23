import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function SignIn() {
  const obj = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [userData, setuserData] = useState(obj);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate() ;

  const handleSignUp = async() => {
    if (userData.firstName.length === 0) {
      alert("Enter first name");
    } else if (userData.lastName.length === 0) {
      alert("Enter last name");
    } else if (userData.email.length === 0) {
      alert("Enter email");
    } else if (userData.password.length === 0) {
      alert("Enter password");
    } else {
    const url = `https://note-app-data.onrender.com/users`;
    const data = await fetch(url);
    const res = await data.json();
    const valid = res.filter((item) => {
      if (item.email === userData.email) {
        alert("user exists!")
        navigate("/logIn");
        return item;
      }
    });
    if(Object.keys(valid).length === 0){
      sendUserData(userData);
      navigate("/logIn");
    }
    setuserData(obj) ;
    }
  };
  const {firstName,lastName,email,password} = userData ;
  const sendUserData = async (data) => {
    console.log(data);
    const url = `https://note-app-data.onrender.com/users` ;
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={4} mx={"auto"} maxW={"lg"} p={6}>
        <Stack align={"center"}>
          <Heading fontSize={["3xl", "4xl"]} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={3}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) =>
                      setuserData({ ...userData, firstName: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) =>
                      setuserData({ ...userData, lastName: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) =>
                  setuserData({ ...userData, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) =>
                    setuserData({ ...userData, password: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSignUp}
                loadingText="Submitting"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack>
              <Text align={"center"}>
                Already have an account?{" "}
                <Link to="/logIn" color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
