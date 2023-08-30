import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


const Detalle = () => {
    const navigate = useNavigate();
    let token = sessionStorage.getItem("token");
    const queryParams = new URLSearchParams(location.search);
    const movieId = queryParams.get('movieId');

    useEffect(() => {
        effect
        return () => {
            cleanup
        };
    }, [movieId]);



    return (
        <div>
            {!token && navigate("/")}
            <h2>Detalle de la pelicula</h2>
            <div className='row'>
                <div className='col-4'>
                    imagen
                </div>
                <div className='col-8'>
                    <h5>Titulo: Falso</h5>
                    <h5>Reseña: </h5>
                    <p>Lorem </p>
                    <h5>Generos:</h5>
                    <ul>
                        <li>Genero 1 </li>
                        <li>Genero 2 </li>
                        <li>Genero 3 </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Detalle
