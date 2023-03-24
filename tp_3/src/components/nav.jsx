import { NavLink } from "react-router-dom";
import "../assets/styles/navbar.css";
import { useDispatch } from "react-redux";
import { deconnexion } from "../actions/actions-types";
import { useNavigate } from "react-router-dom";

const Nav = (props) => {
	const checkIsactive = ({ isActive }) => {
		return {
			display: "block",
			margin: "1rem 0",
			color: isActive ? "#bc8034" : "white",
		};
	};

	const dispatch = useDispatch();
	const navigate = useNavigate();
	let currentUser = localStorage.getItem("currentUser");
	currentUser = JSON.parse(currentUser);

	function handleClick() {
		dispatch(deconnexion());
		navigate("/");
	}

	return (
		<nav className="navbar">
			<ul>
				<li className="navlink">
					<NavLink style={checkIsactive} to="/accueil">
						Home
					</NavLink>
				</li>
				<li className="navlink">
					<NavLink style={checkIsactive} to="/list">
						List
					</NavLink>
				</li>
				{currentUser && (
					<div className="buttons">
						<li>
							<a href="/profil_modification"> 
								<img src={currentUser.photo} alt="Photo" />
							</a>
						</li>
						<li className="navlink">
							<button onClick={handleClick}>Déconnexion</button>
						</li>
					</div>
				)}
			</ul>
			{props.children}
		</nav>
	);
};

export default Nav;
