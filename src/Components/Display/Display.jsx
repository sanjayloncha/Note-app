import React, { useEffect, useState } from "react";
import { Box, Text, Heading, GridItem, Grid } from "@chakra-ui/react";

export default function Display() {
  let [taskData, setdata] = useState([]);
  let [flag, setFlag] = useState(0);

  useEffect(() => {
    getData();
  }, [flag]);

  let getData = async () => {
    let url = `http://localhost:8000/tasks`;
    let data = await fetch(url);
    let res = await data.json();
    setdata(res);
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
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
}
