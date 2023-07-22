import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./Components/Layout";
import Navbar from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>

          <Route path="/login" element = {<div><h2>Login Page</h2></div>}/>
          <Route path="/" element = {<Layout/>}>
            <Route index element = {<Home/>}/> 
            <Route path="/signup" element = {<div><h2>SignUp Page</h2></div>}/>     
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
