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
  useToast,
} from "@chakra-ui/react";
export default function Home() {
  const [count, setCount] = useState(0);
  const obj = {
    title: "",
    body: "",
    created: "",
  };
  const [task, setTask] = useState(obj);

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
  const toast = useToast();
  const handleChange = (e) => {
    const time = getTime();
    setTask({ ...task, [e.target.name]: e.target.value, created: time });
  };

  const handleClick = () => {
    if (task.title.trimStart() === "") {
      alert("Please enter title");
      return;
    } else if (task.body.trimStart() === "") {
      alert("Please enter body");
      return;
    } else {
      toast({
        position: "top",
        render: () => (
          <Box m={3} color="white" p={3} bg="#0c4a6e">
            Note Created
          </Box>
        ),
        duration: 1500,
      });
      onClose();
      sendData(task);
      setTask(obj);
    }
  };

  function getTime() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.getMonth();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const currentMonth = monthNames[month];
    return `${day} ${currentMonth} ${hours}:${minutes}`;
  }

  const sendData = async (task) => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    userData.note.push(task);

    localStorage.setItem("userData", JSON.stringify(userData));
    let newUserData = JSON.parse(localStorage.getItem("userData"));
    console.log(newUserData) ;
    setCount(count + 1);
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
