import "./App.css";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Login/Login";
import { Route,Routes } from "react-router-dom" ;
import Home from "./Components/Home/Home";
import Display from "./Components/Display/Display";

function App() {
 
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Home/>
      <Display />
    </div>
  );
}

export default App;
