import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





const Listado = () => {
    const navigate = useNavigate();
    let token = localStorage.getItem("token");
    
    const [moviesList, setMovieList] = useState([]);
   
   
    useEffect(() => {
      
        
        const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=0702186a1d710f439f893f1afa745a31&language=es-ES&page=1"; // Fixed typo
        axios.get(endPoint)
            .then(response => {
                const apiData = response.data;
                setMovieList(apiData.results)
            }) 
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [setMovieList]);

console.log(moviesList);

    return (
        <>
        {!token && navigate("/")}
        <div className='row'>
       {
        moviesList.map((oneMovie,index)=>{
            return(
                 <div className='col-3'> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{oneMovie.tittle}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card></div>
            )
        })
       }

        </div>
</>





        
    )
}

export default Listado
