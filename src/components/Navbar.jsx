import { useState, useEffect, useRef } from "react";

import { DragHandle } from "@mui/icons-material";
import classes from "./Navbar.module.css";

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState(false);

	const navToggleRef = useRef();

	useEffect(() => {
		let mousedownHandler = (event) => {
			if (!navToggleRef.current.contains(event.target)) {
				setToggleNav(false);
			}
		};
		document.addEventListener("mousedown", mousedownHandler);
		return () => {
			document.removeEventListener("mousedown", mousedownHandler);
		};
	});

	const navToggleHandler = () => setToggleNav(!toggleNav);

	const navbarClasses = toggleNav
		? `${classes.navbar} ${classes.isActive}`
		: `${classes.navbar}`;

	return (
		<header className={classes.header}>
			<article className={`${classes.navContainer} container`}>
				<div className={classes.logo}>
					<h6>MAR</h6>
					<h6>DEV</h6>
				</div>
				<DragHandle
					className={classes.navToggler}
					onClick={navToggleHandler}
					ref={navToggleRef}
				/>
				<nav className={navbarClasses}>
					<div className={classes.logo}>
						<h6>MAR</h6>
						<h6>DEV</h6>
					</div>
					<ul className={classes.navList}>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#experience">Experience</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
					</ul>
				</nav>
			</article>
		</header>
	);
};
export default Navbar;
