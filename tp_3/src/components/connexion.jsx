import React from "react";
import ListItem from "./listItem";

function List(params) {
    // console.log(params)
    const array = params.info
    console.log(array)
    return (
        <div>
            <h1>Connexion</h1>
            <p>Pour vous connecter à l'intranet, entrez votre identifiant et mot de passe.</p>
            <form action="">
                <div>
                    <label htmlFor="email">Email :</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button>
                    CONNEXION
                </button>
            </form>
        </div>
    )
}
export default List;