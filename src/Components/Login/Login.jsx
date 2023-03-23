import React from 'react'
import { useNavigate,Link } from 'react-router-dom';

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
} from '@chakra-ui/react';


export default function Login() {
  const navigate = useNavigate() ;
  const handleChange = ()=>{
    localStorage.setItem("userAuth",JSON.stringify("true")) ;
    navigate("/") 
  }

  return (
    <Flex
      mt={8}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={4} mx={'auto'} maxW={'lg'} >
        <Stack align={'center'}>
          <Heading fontSize={['3xl','4xl']}>Log in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to create your own <Link color={'blue.400'}>notes</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={6}>
          <Stack spacing={3}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={8}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'#84A6D3'}
                color={'white'}
                onClick={handleChange}
                _hover={{
                  bg: '#E9F3FB',
                  color:"#84A6D3"
                }}>
                Login
              </Button>
            </Stack>
            <Stack pt={4}>
              <Text align={"center"}>
                Don't have an account? <Link to="/signIn" color={"blue.400"}>SignUp</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}


