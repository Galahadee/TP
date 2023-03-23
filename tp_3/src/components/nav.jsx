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
		navigate("/login");
	}

	return (
		<nav className="navbar">
			<ul>
				<li>
					<NavLink style={checkIsactive} to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink style={checkIsactive} to="/list">
						List
					</NavLink>
				</li>
				<li>
					{currentUser && (
						<div>
							<img src={currentUser.photo} alt="Photo" />
							<button onClick={handleClick}>Déconnexion</button>
						</div>
					)}
				</li>
			</ul>
			{props.children}
		</nav>
	);
};

export default Nav;
