import React from "react";
import './App.css'

const Moviedetails =({curr})=>{
    // const location = useLocation();
    // const { movie } = location.state;
    
    return (

      <div className="wrapper">
      <div className="main_card">
        <div className="card_left">
          <div className="card_datails">
            <h1><b>{curr.title}</b></h1>
            <div className="card_cat">
              <p className="PG">{curr.rating}</p>
              <p className="year">{curr.year}</p>
              <p className="genre">{curr.genre}</p>
              <p className="time">{curr.runtime} min</p>
            </div>
            <p className="disc">{curr.plot}</p>
            <a>watch it free on :<a href="" target="_blank">freemovies , fstream , hdtoday </a></a>
          <div className="social-btn">
           <button  className="green">Edit</button>
            <button>
              <i className="fas fa-play"></i> SEE TRAILER
            </button>
            <button className="red">Delete</button>
          
          </div>	
          </div>
        </div>
        <div className="card_right">
          <div className="img_container">
            <img src={curr.poster} alt="vv"/>
            </div>
            <div className="play_btn">
              <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                <i className="fas fa-play-circle"></i>
              </a>
              
            </div>

          </div>

        </div>
        
      </div>


    )

}




export default Moviedetails;