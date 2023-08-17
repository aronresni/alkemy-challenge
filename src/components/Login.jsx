import React from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom"




const Login = () => {
    const navigate = useNavigate();
    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        if (email.value === "" || password.value === "") {
            swal("Los campos están vacíos!", "Por favor completa!", "error");
            return;
        }

        if (email.value === "challenge@alkemy.org" || password.value === "react") {
            swal("Good job!", "You clicked the button!", "success");
            return;
        }
        console.log("Estamos listos para enviar la informacion");


        axios
            .post("http://challenge-react.alkemy.org", { email, password })
            .then(res => {
                swal("Has ingresado correctamente", "", "succes")
                console.log(res.data);
                const token = res.data.token;
                sessionStorage.setItem(`token`, token)
                navigate("/listado");


            }).catch(err => {
                swal("Error", "Ha ocurrido un error en el inicio de sesión", "error");
                console.log(err);
            });

    }

    return (



        <div>
            <form onSubmit={submitHandler}>
                <label>Correo electronico</label>
                <input
                    type="email"
                    name="email"

                />
                <label>Contraseña </label>
                <input
                    type="password"
                    name="password"

                />
                <button type='submit'  >Ingresar</button>
            </form>
        </div>
    )
}

export default Login
