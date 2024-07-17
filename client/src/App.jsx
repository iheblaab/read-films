import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import SearchAppBar from "./SearchAppBar.jsx";
import Moviedetails from "./Moviedetails.jsx";
import Createe from "./Createe.jsx";
import Signup from "./Signup.jsx";

const App = () => {

  const [data,setdata]=useState([]);
const [curr,setcurr]=useState({})

  useEffect(() => {
    axios.get('http://localhost:8080/movie/getall')
          .then((res) => {
            console.log(res.data,'iheb');
            setdata(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  return (
    <div>
      <SearchAppBar/>
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index path="/login" element={<Login />} />
        <Route path="Home" element={<Home data={data} set={setcurr}/>} />
        <Route path="/moviedetails" element={<Moviedetails curr={curr}/>}/>
        <Route path="/create" element={<Createe/>} />
        <Route path="/signup" element={<Signup/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  );
};







export default App;


// useEffect(()=>{
//   axios.get('http://localhost:8080/movie/getall')
//   .then((res)=>{
    
//     console.log(res.data)
//     setdata(res.data)
//   })
//   .catch((error)=>{console.log(error)})
  
//   },[])

  // const changeView = (v) => {
  //   setView(v)
    
  // }
  // const renderView = () => {
  //   if (view === "Allmovies") {
  //     return <Allmovies />;
  //   } 
  //   if (view === "Onemovie") {
  //     return <Onemovie />;
  //   } 
  //   if (view === "Moviedetails") {
  //     return <Moviedetails />;
   
  // }