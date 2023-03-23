import "./App.css";
import Nav from "./Components/Nav/Nav";
import LogIn from "./Components/LogIn/LogIn";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Private from "./Components/Private/Private";
import { Box } from "@chakra-ui/react";
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <Box className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Private> <Home /> </Private>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </Box>
  );
}

export default App;
