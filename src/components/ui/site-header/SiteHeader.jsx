import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../slices/authSlice";
import styles from "./site-header.module.css";

function SiteHeader() {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	const handleLogout = () => {
		dispatch(logout());
	};

	const navLinks = [];
	if (isLoggedIn) {
		navLinks.push(
			{ label: "My things", url: "/my-things/" },
			{ label: "Add bag", url: "/bags/add/" },
			{ label: "Add treasure", url: "/treasures/add/" }
		);
	} else {
		navLinks.push(
			{ label: "Login", url: "/login/" },
			{ label: "Register", url: "/register/" }
		);
	}

	return (
		<div className={styles.wrapper}>
			<img src="/suyc_logo.png" alt="Logo" className={styles.logo} />
			<div className={styles.navcontainer}>
				<nav className={styles.links}>
					{navLinks.map((navLink) => (
						<NavLink
							key={navLink.url}
							to={navLink.url}
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.inactiveLink
							}
						>
							{navLink.label}
						</NavLink>
					))}
					{isLoggedIn && (
						<button className={styles.logoutbutton} onClick={handleLogout}>
							Logout
						</button>
					)}
				</nav>
				<img src="/suyc_logo.png" alt="Logo" className={styles.mobilelogo} />
				<h1 className={styles.title}>Show Us Your Contents</h1>
			</div>
		</div>
	);
}

export default SiteHeader;
