import { NavLink } from "react-router-dom";
import "../assets/styles/navbar.css";

const Nav = (props) => {
	const checkIsactive = ({ isActive }) => {
		return {
			display: "block",
			margin: "1rem 0",
			color: isActive ? "#bc8034" : "white",
		};
	};

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
					<NavLink to="/login">
						Deconnexion
					</NavLink>
				</li>
			</ul>

			{props.children}
		</nav>
	);
};

export default Nav;
