/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./header.scss";
import logo from "assets/icons/logo.svg";
import logoText from "assets/icons/logo-text.svg";
import charginIcon from "assets/icons/p2p.png";
import { MobileMenu } from "./mobileMenu";

export const Header = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	return (
		<header>
			<div className="header container">
				<a href="#" className="logo">
					<img src={logo} alt="IOTA logo" />
					<img src={logoText} alt="IOTA logo text" className="logo-text" />
				</a>

				<nav>
					<a href="#">Get Started</a>
					<a href="#">Solutions</a>
					<a href="#">Develop</a>
					<a href="#">Foundation</a>
					<a href="#">Connect</a>
					<a href="#" className="explore-link">
						<span>Explore IOTA</span>
						<img src={charginIcon} alt="explore IOTA logo" />
					</a>
				</nav>

				<div className="menu-button" onClick={() => setOpenMobileMenu(true)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<MobileMenu
					openMobileMenu={openMobileMenu}
					setOpenMobileMenu={setOpenMobileMenu}
				/>
			</div>
		</header>
	);
};
