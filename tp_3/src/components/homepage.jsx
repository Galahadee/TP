import React, { useState, useEffect } from "react";
import Users from "../../data/users.json";
import styles from "../assets/styles/homepage.css";

const Homepage = () => {
	const [randomUser, setRandomUser] = useState("");
	const date = new Date(randomUser.birthdate);
	const dateAnniv =
		date.getDate() + " " + date.toLocaleString("default", { month: "long" });

	useEffect(() => {
		const randomNumber = Math.floor(Math.random() * 42);
		setRandomUser(Users[randomNumber]);
	}, []);

	const handleClick = () => {
		const randomNumber = Math.floor(Math.random() * 42);
		setRandomUser(Users[randomNumber]);
	};

	return (
		<div>
			<div>
				<h1>Bienvenue sur l'intranet</h1>
				<p>
					La plateforme de l'entreprise qui vous permet de retrouver vos
					collaborateurs.
				</p>
			</div>
			<div>
				<p>Avez-vous dis bonjour à : </p>
				<div className="card">
					<img src={randomUser.photo} alt="Photo collaborateur" />
					<p className="category">{randomUser.category}</p>
					<div className="userInfos">
						<p>{randomUser.firstname + " " + randomUser.lastname}</p>
						<p>{randomUser.city + ", " + randomUser.country}</p>
						<p>{randomUser.email}</p>
						<p>{randomUser.phone}</p>
						<p>Anniversaire : {dateAnniv}</p>
					</div>
				</div>
				<button className="button" onClick={handleClick}>
					Dire bonjour à quelqu'un d'autres
				</button>
			</div>
		</div>
	);
};

export default Homepage;
