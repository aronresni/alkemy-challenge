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


    return (
        <>
            {!token && navigate("/")}
            <div className='row'>
                {
                    moviesList.map((oneMovie, idx) => {
                        return (
                            <div className='col-3' key={idx}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} />
                                    <Card.Body>
                                        <Card.Title>{oneMovie.title}</Card.Title>
                                        <Card.Text>{oneMovie.overview.substring(0, 100)}....</Card.Text>
                                        <Button variant="primary">View Detail</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );

}
export default Listado
