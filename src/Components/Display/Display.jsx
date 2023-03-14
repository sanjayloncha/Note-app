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
  let [taskData, setdata] = useState([]);

  useEffect(() => {
    getData();
  }, [value]);

  let getData = async () => {
    let url = `https://note-app-data.onrender.com/note`;
    let data = await fetch(url);
    let res = await data.json();
    console.log(res) ;
    setdata(res);
  };

  let bg = useColorModeValue("yellow.200", "yellow.500") ;

  let remove = async (id) => {
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

