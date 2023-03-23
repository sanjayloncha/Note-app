import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  GridItem,
  Grid,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Display({ value }) {
  const [taskData, setdata] = useState([]);
  useEffect(() => {
    getData();
  }, [value]);

  const getData = async () => {
    const url = `https://note-app-data.onrender.com/note`;
    const data = await fetch(url);
    const res = await data.json();
    setdata(res);
  };

  const bg = useColorModeValue("#bae6fd", "#0c4a6e") ;
  const color = useColorModeValue("black","white") ;

  const remove = async (id) => {
    await fetch(`https://note-app-data.onrender.com/note/${id}`, {
      method: "DELETE",
    });
    getData();
  };

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      w="90%"
      m="20px auto"
      gap={6}
      
    >
      {taskData.map((item) => {
        return (
          <GridItem h="10" m="0px" height="auto" key={item.id}>
            <Box
              bg={bg}
              // color={useColorModeValue('white', 'black')}>
              color={color}
              borderRadius="5px"
              p="10px"
              boxShadow={"1xl"}
              textAlign={"left"}
            >
              <Heading ml="5px" fontSize={"2xl"} fontFamily={"body"}>
                {item.title}
              </Heading>

              <Text ml="5px">{item.body}</Text>
              <Flex justifyContent="space-between" alignItems="center">
                <Text ml="5px">created on : {item.created}</Text>
                <lord-icon
                  onClick={() => remove(item.id)}
                  src="https://cdn.lordicon.com/gsqxdxog.json"
                  trigger="hover"
                  style={{ width: "40px" }}
                ></lord-icon>
              </Flex>
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
}

