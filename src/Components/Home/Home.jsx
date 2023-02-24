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
  Textarea
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
export default function Home() {
    let obj = {
        title : "" ,
        body :""
    }
  let [task, setTask] = useState([obj]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let handleClick = () => {
    console.log(task);
  };
  
  let {title,body} = task ;
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
              <Input onChange={(e)=>setTask({...task,title:e.target.value})} name={title} placeholder="Enter Title..." />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Body</FormLabel>
              {/* <Input onChange={(e)=>setTask({...task,body:e.target.value})} name={body} placeholder="Enter Task..." /> */}
              <Textarea placeholder='Here is a sample placeholder' />
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
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="tel" onClick={onOpen} placeholder="Enter note..." />
        <InputRightElement width="4.5rem">
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
