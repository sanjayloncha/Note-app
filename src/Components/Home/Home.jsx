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
  };
  let [task, setTask] = useState(obj);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let handleClick = () => {
    if (task.title.trimStart() === "") {
      alert("Please enter title");
      return;
    } else if (task.body.trimStart() === "") {
      alert("Please enter body");
      return;
    } else {
      sendData(task);
      onClose();
      setTask(obj) ;
    }
  };

  let sendData = async (task) => {
    let url = `http://localhost:8000/tasks`;
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    }
    );
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
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                placeholder="Enter Title..."
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Body</FormLabel>
              <Textarea
                onChange={(e) => setTask({ ...task, body: e.target.value })}
                placeholder="Enter short description..."
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
      <InputGroup w="60%" m="10px auto" >
        <InputLeftElement
          pointerEvents="none"
          children={<AddIcon color="gray.300" />}
        />
        <Input type="tel" onClick={onOpen}  placeholder="Add note..." />
        <InputRightElement width="4.5rem"></InputRightElement>
      </InputGroup>
    </Box>
  );
}
