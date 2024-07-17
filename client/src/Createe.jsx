import React, { useEffect } from "react";
import Create, { useState } from "react";
import axios from "axios";


const Createe=()=>{
  var x = localStorage.getItem('log')
  console.log(x,'create');
const [title,settitle]=useState(null);
const [year,setyear]=useState(null);
const [genre,setgenre]=useState(null);
const [rating,setrating]=useState(null);
const [director,setdirector]=useState(null);
const [actors,setactors]=useState(null);
const [plot,setplot]=useState(null);
const [poster,setposter]=useState(null);
const [trailer,settrailer]=useState(null);
const [runtime,setruntime]=useState(null);
const [awards,setawards]=useState(null);
const [country,setcountry]=useState(null);
const [language,setlanguage]=useState(null);
const [boxOffice,setboxOffice]=useState(null);
const [production,setproduction]=useState(null);
const [id,setid]=useState(x)

const post = () => {


    axios.post('http://localhost:8080/movie/add', {
        title:title,
        year: year,
        genre: genre,
        rating:rating,
        director:director,
        actors:actors,
        plot:plot,
        poster:poster,
        trailer:trailer,
        runtime:runtime,
        awards:awards,
        country:country,
        language:language,
        boxOffice:boxOffice,
        production:production,
        users_idusers:id
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    }

    // const updatem = (id) => {
    //     axios.put(`http://localhost:8080/movie/update/${id}`, {
    //         title:title,
    //         year: year,
    //         genre: genre,
    //         rating:rating,
    //         director:director,
    //         actors:actors,
    //         plot:plot,
    //         poster:poster,
    //         trailer:trailer,
    //         runtime:runtime,
    //         awards:awards,
    //         country:country,
    //         language:language,
    //         boxOffice:boxOffice,
    //         production:production,
    //         id:id
    //       })
    //       .then((res) => {
    //         console.log(res.data);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    
    //     }

    // const handlepost = () => {
    //     axios
    //       .post("http://localhost:3000/add", { name, number: 226, types, imageUrl })
    //       .then((res) => {
    //         console.log(res.data);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };
    



return (







    <div className="movie-form" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#83B4FF' }}>
    <input type="text" placeholder="Title" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{settitle(e.target.value)}} />
    <input type="number" placeholder="Year" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{setyear(e.target.value)}} />
    <input type="text" placeholder="Genre" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{setgenre(e.target.value)}} />
    <input type="number" placeholder="Rating" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{setrating(e.target.value)}} />
    <input type="text" placeholder="Director" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{setdirector(e.target.value)}} />
    <input type="text" placeholder="Actors" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{setactors(e.target.value)}} />
    <textarea placeholder="Plot" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{setplot(e.target.value)}}></textarea>
    <input type="url" placeholder="Poster URL" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }}  onChange={(e)=>{setposter(e.target.value)}}  />
    <input type="url" placeholder="Trailer URL" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }}  onChange={(e)=>{settrailer(e.target.value)}}/>
    <input type="number" placeholder="Runtime" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{setruntime(e.target.value)}} />
    <input type="text" placeholder="Awards" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{setawards(e.target.value)}} />
    <input type="text" placeholder="Country" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{setcountry(e.target.value)}} />
    <input type="text" placeholder="Language" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{setlanguage(e.target.value)}} />
    <input type="text" placeholder="Box Office" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{setboxOffice(e.target.value)}} />
    <input type="text" placeholder="Production" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{setproduction(e.target.value)}}  />
    {/* <input type="number" placeholder="Id" style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }} onChange={(e)=>{setid(e.target.value)}} /> */}
    <button style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={()=>{post()}}>Submit</button>
   
  </div>
  
)

}

export default Createe;
