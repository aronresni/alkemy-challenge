import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const Listado = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token === null) {
            navigate("/");
        }
    }, []);


    return (
        <div>
            <h2>Soy Listado</h2>
        </div>
    )
}

export default Listado
