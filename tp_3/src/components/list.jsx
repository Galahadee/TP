import React, { useState } from "react";
import ListItem from "./listItem";
import "../assets/styles/userStyle.css";

function List(params) {
	const array = params.info;
	const [search, setSearch] = useState("");
	const [searchType, setSearchType] = useState("");
	const [category, setCategory] = useState("");
	const [location, setLocation] = useState("");
	const [filteredArray, setFilteredArray] = useState(array);

	//  Ajouter condition ici pour une seule const filter, ou ajouter ligne 57 comme j'ai fais pour fitlrer jsute l'input, plus clair et plus lisible ?
	const filter = (firstname, lastname, category) => {
		return array.filter((item) => {
			return (
				(item.firstname.toLowerCase().includes(firstname.toLowerCase()) ||
					item.lastname.toLowerCase().includes(lastname.toLowerCase())) &&
				item.category.includes(category)
			);
		});
	};

	const filterCategory = (category) => {
		return array.filter((item) => item.category.includes(category));
	};

	const filterLocation = (city, country, category) => {
		return array.filter((item) => {
			return (
				(item.city.toLowerCase().includes(city.toLowerCase()) ||
					item.country.toLowerCase().includes(country.toLowerCase())) &&
				item.category.includes(category)
			);
		});
	};

	const handleNameChange = (e) => {
		setSearch(e.target.value);
		setFilteredArray(filter(e.target.value, e.target.value, category));
	};

	const handleCategoryChange = (e) => {
		setCategory(e.target.value);
		setFilteredArray(filterCategory(e.target.value));
		setSearch("");
		setLocation("");
	};

	const handleLocationChange = (e) => {
		setLocation(e.target.value);
		setFilteredArray(filterLocation(e.target.value, e.target.value, category));
	};

	const handleSearchTypeChange = (e) => {
		setSearchType(e.target.value);
	};

	return (
		<div>
			<div className="filter">
				{searchType === "location" ? (
					<input
						type="text"
						placeholder="Filter par localisation"
						value={location}
						onChange={handleLocationChange}
						className="input"
					/>
				) : (
					<input
						type="text"
						placeholder="Filter par nom"
						value={search}
						onChange={handleNameChange}
						className="input"
					/>
				)}
				<label htmlFor="searchType">Rechercher par :</label>
				<select
					name="searchType"
					id="searchType"
					value={searchType}
					className="input"
					onChange={handleSearchTypeChange}
				>
					<option value="name">Nom</option>
					<option value="location">Localisation</option>
				</select>
				<label htmlFor="category">Categories :</label>
				<select
					name="category"
					id="category"
					value={category}
					onChange={handleCategoryChange}
					className="input"
				>
					<option value="">Pas de filtre</option>
					<option value="Marketing">Marketing</option>
					<option value="Technique">Technique</option>
					<option value="Client">Client</option>
				</select>
			</div>
			<div className="listContainer">
				{array.length > 0 &&
					filteredArray.map((user) => <ListItem key={user.id} user={user} />)}
			</div>
		</div>
	);
}

export default List;
