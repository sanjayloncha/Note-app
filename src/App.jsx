import "./App.css";
import Nav from "./Components/Nav/Nav";
import LogIn from "./Components/LogIn/LogIn";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Private from "./Components/Private/Private";
import { Box } from "@chakra-ui/react";
import SignIn from "./Components/SignIn/SignIn";
import View from "./Components/View/View";

function App() {
  return (
    <Box className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Private> <Home /> </Private>} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
      {/* <View/> */}
    </Box>
  );
}

export default App;
