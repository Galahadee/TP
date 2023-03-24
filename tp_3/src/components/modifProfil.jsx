import React, { useState } from 'react'
import { modifUser } from "../actions/actions-types";
import { useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";

function modifProfil() {
    let currentUser = localStorage.getItem("currentUser");
    currentUser = JSON.parse(currentUser);


    if (!currentUser) {
		return <Navigate to="/login" replace />;
	}

    const dispatch = useDispatch();
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState(currentUser.password);
    const [country, setCountry] = useState(currentUser.country);
    const [city, setCity] = useState(currentUser.city);
    const [gender, setGender] = useState(currentUser.gender);
    const [category, setCategory] = useState(currentUser.category);
    const [lastname, setLastname] = useState(currentUser.lastname);
    const [confirmation, setConfirmation] = useState('');
    const [phone, setPhone] = useState(currentUser.phone);
    const [birthdate, setBirthdate] = useState(currentUser.birthdate);
    const [photo, setPhoto] = useState(currentUser.photo);
    const [firstname, setFirstname] = useState(currentUser.firstname);


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!birthdate || !photo || !firstname || !phone || !email || !country || !lastname || !category || !gender || !city) {
            return console.error("Missing value")
        }
        if (password > 0 && password < 8) {
                    if (password != confirmation) {
            return console.error("Password and confirmation are not the same")
        }
            return console.error("Password not enought long")
        }


        const obj = {
            id: currentUser.id,
            gender: gender,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: currentUser.password,
            phone: phone,
            birthdate: birthdate,
            city: city,
            country: country,
            category: category,
            photo: photo
        }

        dispatch(modifUser(obj))
    }

    return (
        <div>
            <h1>Modifier mon profil</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="gender">* Civilité :</label>
                    <select name="gender" id="gender" onChange={e => setGender(e.target.value)} value={gender} >
                        <option value="male">Homme</option>
                        <option value="female">Femme</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="category">* Catégorie :</label>
                    <select name="category" id="category" onChange={e => setCategory(e.target.value)} value={category}>
                        <option value="Client">Client</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Technique">Technique</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="lastname">* Nom :</label>
                    <input type="text" name="lastname" id="lastname" onChange={e => setLastname(e.target.value)} value={lastname} required />
                </div>
                <div>
                    <label htmlFor="firstname">* Prenom :</label>
                    <input type="text" name="firstname" id="firstname" onChange={e => setFirstname(e.target.value)} value={firstname} required />
                </div>
                <div>
                    <label htmlFor="email">* Email :</label>
                    <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="text" name="password" id="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirmation">Confirmation :</label>
                    <input type="text" name="confirmation" id="confirmation" onChange={e => setConfirmation(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="phone">* Téléphone :</label>
                    <input type="text" name="phone" id="phone" onChange={e => setPhone(e.target.value)} value={phone} required />
                </div>
                <div>
                    <label htmlFor="birthdate">* Date de naissance :</label>
                    <input type="date" name="birthdate" id="birthdate" onChange={e => setBirthdate(e.target.value)} value={birthdate} required />
                </div>
                <div>
                    <label htmlFor="city">* Ville :</label>
                    <input type="text" name="city" id="city" onChange={e => setCity(e.target.value)} value={city} required />
                </div>
                <div>
                    <label htmlFor="country">* Pays :</label>
                    <input type="text" name="country" id="country" onChange={e => setCountry(e.target.value)} value={country} required />
                </div>
                <div>
                    <label htmlFor="photo">URL de la photo :</label>
                    <input type="url" name="photo" id="photo" onChange={e => setPhoto(e.target.value)} value={photo} required />
                </div>
                <button >
                    MODIFIER
                </button>
            </form>
        </div>
    )
}
export default modifProfil;