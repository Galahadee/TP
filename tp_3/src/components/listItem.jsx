import React from "react";
import "../assets/styles/userStyle.css";

const ListItem = (info) => {
	const email = info.user.email;
	const phone = info.user.phone;
	const category = info.user.category;
	const country = info.user.country;
	const city = info.user.city;
	const photo = info.user.photo;
	const firstName = info.user.firstname;
	const lastName = info.user.lastname;
	const birthdate = info.user.birthdate;
	let currUser = localStorage.getItem("currentUser");
	currUser = JSON.parse(currUser);
	console.log();
	const date = new Date(birthdate);
	const birthday =
		date.getDate() + " " + date.toLocaleString("default", { month: "long" });

	return (
		<div className="card">
			<img src={photo} alt="Photo collaborateur" />
			{category === "Client" ? (
				<p className="category client">{category}</p>
			) : category === "Technique" ? (
				<p className="category technique">{category}</p>
			) : (
				<p className="category marketing">{category}</p>
			)}
			<div className="userInfos">
				<p>{lastName + " " + firstName}</p>
				<p>{city + ", " + country}</p>
				<p>{email}</p>
				<p>{phone}</p>
				<p>Anniversaire : {birthday}</p>
			</div>
			{currUser.isAdmin && (
				<div>
					<button>Editer</button>
					<button>Supprimer</button>
				</div>
			)}
		</div>
	);
};

export default ListItem;
