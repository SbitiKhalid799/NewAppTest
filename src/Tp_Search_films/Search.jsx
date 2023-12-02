import Card from './card';
import './style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import Details from './details';

export default function Search(){
    const [post,setPost] = useState([]);
    const [Vsearch,setVsearch] = useState("");
    const [idMove,setIdMovie] = useState('');
    const [p_top,setTop] = useState("100vh")
    const border = {
        position:'fixed',
        top:p_top,
        left:40,
        right:40,
        height:"100vh",
        background: "linear-gradient(to right top, rgb(7, 7, 117), rgb(12, 12, 80),rgb(7, 7, 117), black)",
        zIndex:8,
        borderRadius:'15px'
    }

    useEffect(() => {
            axios.get(`https://www.omdbapi.com/?s=${Vsearch}&apikey=f5c64401`)
            .then(response => setPost(response.data.Search))
            .catch(error => console.log('Error :'+ error));
        },[Vsearch]);

    return(
        <main className='container'>
            <div id="search" className='px-5 input-group'>
            <div class="input-group mb-3">
                <input onChange={(event)=>setVsearch(event.target.value)} type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
            </div>
            <div className='row mt-5'>
                {post?post.map((movie,i) => <Card setTop={setTop} setIdMovie={setIdMovie} movie={movie} key={i} />):<h1 className='text text-light mt-5'>No resultes !!!</h1>}  
            </div>
            <div onClick={()=>{
                setIdMovie("")
                setTop("100vh")
            }
            } className='border' style={border}>
                    <Details data={post} Id={idMove} />
            </div>
        </main>
    )
}