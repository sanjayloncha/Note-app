import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("userAuth"));

  const userName = JSON.parse(localStorage.getItem("userData"));

  const logout = () => {
    localStorage.setItem("userAuth", JSON.stringify("false"));
    navigate("/login");
  };
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#bae6fd", "#0c4a6e");
  return (
    <>
      <Box bg={bg} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <lord-icon
              src="https://cdn.lordicon.com/wxnxiano.json"
              trigger="morph"
              colors="primary:#E9F3FB,secondary:#84A6D3"
              style={{ width: "50px", height: "100px" }}
            ></lord-icon>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode} bg={bg}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {auth === "true" ? (
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
                      <p>user</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : null}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
