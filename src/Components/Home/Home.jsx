import React, { useState } from "react";
import Display from "../Display/Display";
import {
  Input,
  Box,
  Button,
  FormLabel,
  Modal,
  ModalBody,
  FormControl,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Text,
  Textarea,
} from "@chakra-ui/react";
export default function Home({ fn }) {
  let [count, setCount] = useState(0);
  let obj = {
    title: "",
    body: "",
    created: "",
  };
  let [task, setTask] = useState(obj);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  let handleChange = (e) => {
    let time = getTime();
    setTask({ ...task, [e.target.name]: e.target.value, created: time });
  };

  let handleClick = () => {

    if (task.title.trimStart() === "") {
      alert("Please enter title");
      return;
    } else if (task.body.trimStart() === "") {
      alert("Please enter body");
      return;
    } else {
      setCount(count+1) ;
      console.log(count) ;
      onClose();
      sendData(task);
      setTask(obj);
    }

  };

  function getTime() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth());
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const currentMonth = monthNames[month];
    return `${day} ${currentMonth} ${hours}:${minutes}`;
  }

  


  let sendData = async (task) => {
    let url = `https://note-app-data.onrender.com/note`;
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fn((prev) => prev + 1);
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                onChange={handleChange}
                placeholder="Enter Title..."
                name="title"
                value={task.title}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Body</FormLabel>
              <Textarea
                onChange={handleChange}
                placeholder="Enter short description..."
                name="body"
                value={task.body}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleClick} mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box
        display="flex"
        justify="center"
        alignItems="center"
        mt="20px"
        ml={["10px", "20px", "40px", "50px"]}
      >
        <lord-icon
          src="https://cdn.lordicon.com/ejxwvtlg.json"
          trigger="hover"
          style={{ width: "50px" }}
          onClick={onOpen}
        ></lord-icon>
        <Text> Add Note </Text>
      </Box>

      <Display value={count} fn={setCount} />

    </Box>
  );
}
