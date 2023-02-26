import React, { useState } from "react";
import {
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
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
  Textarea,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
export default function Home() {
  let obj = {
    title: "",
    body: "",
    created: "",
  };
  let [task, setTask] = useState(obj);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let handleChange = (e) => {
    let time = getTime();
    setTask({ ...task, [e.target.name]: e.target.value, created : time });
  };

  let handleClick = () => {
    if (task.title.trimStart() === "") {
      alert("Please enter title");
      return;
    } else if (task.body.trimStart() === "") {
      alert("Please enter body");
      return;
    } else {
      onClose();
      sendData(task);
      // console.log(task) ;
      setTask(obj);
    }

  };
  // console.log(task);

  function getTime() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${year}/${month}/${day} ${hours}:${minutes}`;
  }

  let sendData = async (task) => {
    let url = `http://localhost:8000/tasks`;
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
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
      <InputGroup w="60%" m="10px auto">
        <InputLeftElement
          pointerEvents="none"
          children={<AddIcon color="gray.300" />}
        />
        <Input type="tel" onClick={onOpen} placeholder="Add note..." />
        <InputRightElement width="4.5rem"></InputRightElement>
      </InputGroup>
    </Box>
  );
}
