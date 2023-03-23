import React, { useState } from 'react'
import { connexion, deconnexion } from "../actions/actions-types";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

function loginpage(params) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('test')
        const payload={
            email:email,
            password:password
        }
        dispatch(connexion(payload));
        navigate("/")
    }
    
    const currentUser=sessionStorage.getItem("currentUser");
    
    if (currentUser) {
        dispatch(deconnexion())
    }

    console.log(currentUser)
    return (
        <div>
            <h1>Connexion</h1>
            <p>Pour vous connecter à l'intranet, entrez votre identifiant et mot de passe.</p>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input type="test" name="email" id="email" onChange={e=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" name="password" id="password" onChange={e=>setPassword(e.target.value)}/>
                </div>
                <button >
                    CONNEXION
                </button>
            </form>
        </div>
    )
}
export default loginpage;