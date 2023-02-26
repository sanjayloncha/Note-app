import { useState } from "react";
import { useNavigate } from "react-router-dom" ;

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav() {
  let [auth, setAuth] = useState(false);
  let navigate = useNavigate() ;
  let login = () => {
    setAuth(true);
    console.log("loggedIn") ;
    navigate("/") ;
  };
  let logout = ()=>{
    setAuth(false) ;
  }
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.300", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <lord-icon
              src="https://cdn.lordicon.com/wxnxiano.json"
              trigger="morph"
              style={{"width":"50px","height":"100px"}}
            ></lord-icon>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {auth ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9ktyRPYvOrnRx388bpoq9Wb_4HEIueruTU1Z2hEFBA&usqp=CAU&ec=48600112"
                      }
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9ktyRPYvOrnRx388bpoq9Wb_4HEIueruTU1Z2hEFBA&usqp=CAU&ec=48600112"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem onClick={logout} >Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Button onClick={login}>Login</Button>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
