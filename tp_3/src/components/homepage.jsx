import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Users from "../../data/users.json";
import "../assets/styles/userStyle.css";

const Homepage = () => {
	const currentUser = localStorage.getItem("currentUser");
	if (!currentUser) {
		return <Navigate to="/login" replace />;
	}

	const [randomUser, setRandomUser] = useState("");
	const date = new Date(randomUser.birthdate);
	const birthday =
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
					{/* On peut pas utiliser des classes variables sans scss ? obligé de faire ça */}
					{randomUser.category === "Client" ? (
						<p className="category client">{randomUser.category}</p>
					) : randomUser.category === "Technique" ? (
						<p className="category technique">{randomUser.category}</p>
					) : (
						<p className="category marketing">{randomUser.category}</p>
					)}
					<div className="userInfos">
						<p>{randomUser.firstname + " " + randomUser.lastname}</p>
						<p>{randomUser.city + ", " + randomUser.country}</p>
						<p>{randomUser.email}</p>
						<p>{randomUser.phone}</p>
						<p>Anniversaire : {birthday}</p>
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
