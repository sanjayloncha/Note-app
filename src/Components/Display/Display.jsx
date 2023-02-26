import React, { useEffect, useState } from "react";
import { Box, Text, Heading, GridItem, Grid, Flex } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function Display({value}) {
  let [taskData, setdata] = useState([]);

  useEffect(() => {
    getData();
  }, [value]);

  let getData = async () => {
    let url = `http://localhost:8000/tasks`;
    let data = await fetch(url);
    let res = await data.json();
    setdata(res);
  };

  let remove = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });
    getData();
  };

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3,1fr)",
        "repeat(4, 1fr)",
      ]}
      gap={6}
    >
      {taskData.map((item) => {
        return (
            
          <GridItem h="10" m="10px" height="auto" key={item.id}>
            <Box
              bg="blackAlpha.200"
              boxShadow={"1xl"}
              rounded={"lg"}
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
