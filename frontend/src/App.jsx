import { Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home/Home";
import LogIn from "./components/pages/login/LogIn";
import SignUp from "./components/pages/signup/SignUp";

function App() {
  return <div className="p-4 h-screen flex items-center justify-center">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<LogIn/>}/>
      <Route path="/Signup" element={<SignUp/>}/>
    </Routes>
  </div>;
}

export default App;
