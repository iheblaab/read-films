import React, { useEffect } from "react";
import { useState } from "react";
import axios from "react";
import Navibar from "./SearchAppBar";
import { useNavigate } from 'react-router-dom';

const Home = ({data,set})=>{

    const navigate = useNavigate();
return (

<div className="container">
  
<div className="hero-container" >
    {data.map((e,i)=>{
        return <div className="main-container">
			<div className="poster-container">
				<a href="#"><img src={e.poster} className="poster" /></a>
			</div>
			<div className="ticket-container">
				<div className="ticket__content">
					<h4 className="ticket__movie-title">{e.title}</h4>
					<p className="ticket__movie-slogan">
						
					</p>
					<p className="ticket__current-price"><b>Rating:</b> {e.rating}</p>
                    <div className="radio-input">
  <input
    className="star s1"
    type="radio"
    id="value-1"
    name="value-radio"
    value="value-1"
  />
  <input
    className="star s2"
    type="radio"
    id="value-2"
    name="value-radio"
    value="value-2"
  />
  <input
    className="star s3"
    type="radio"
    id="value-3"
    name="value-radio"
    value="value-3"
  />
  <input
    className="star s4"
    type="radio"
    id="value-4"
    name="value-radio"
    value="value-4"
  />
  <input
    className="star s5"
    type="radio"
    id="value-5"
    name="value-radio"
    value="value-5"
  />
</div>

					<p className="ticket__old-price"><b>Country:</b> {e.country}</p>
					<button className="ticket__buy-btn" onClick={()=>{navigate("/Moviedetails",set(e))}}>Read More</button>
				</div>
			</div>
		</div>
    }) }
		

	</div>

</div>

)
}


export default Home;