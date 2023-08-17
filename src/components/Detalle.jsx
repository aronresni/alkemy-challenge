import React ,{ useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { URLSearchParams } from 'url';


const Detalle = () => {
    const navigate = useNavigate();
    let token = sessionStorage.getItem("token");
    let query = new URLSearchParams(window.location.search)
    let movieID = query.get(`movieID`)

    return (
        <div>
            {!token && navigate("/")}
            <h1>Detail brou</h1>
        </div>
    )
}

export default Detalle
