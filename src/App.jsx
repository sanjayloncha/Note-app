import "./App.css";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Private from "./Components/Private/Private";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box className="App">
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
