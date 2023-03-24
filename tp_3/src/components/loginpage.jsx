import React, { useState } from "react";
import { connexion, deconnexion } from "../actions/actions-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../assets/styles/login.css";
import Message from "./message";
import { useSelector } from "react-redux";

function loginpage(params) {
    const messageUser = useSelector(state => state.currentUser);

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        localStorage.clear()
        event.preventDefault();
        console.log('test')
        const payload = {
            email: email,
            password: password,
        };

        dispatch(connexion(payload));

        navigate("/accueil");
    };

    const currentUser = localStorage.getItem("currentUser");



    return (
        <div>
            <h1>Connexion</h1>
            <hr />
            {messageUser.message && <Message type={messageUser.type} message={messageUser.message} />}
            <div>
                <p>
                    Pour vous connecter à l'intranet, entrez votre identifiant et mot de
                    passe.
                </p>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email :</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Mot de passe :</label>
                        <input type="password"
                            name="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button>CONNEXION</button>
                </form>
            </div>
        </div>
    );
}
export default loginpage;
