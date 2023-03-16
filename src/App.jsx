import "./App.css";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Display from "./Components/Display/Display";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  let [count, setCount] = useState(0);

  return (
    <Box className="App">
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home fn={setCount} />} />
      </Routes>
    </Box>
  );
}

export default App;
