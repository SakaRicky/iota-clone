/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "assets/icons/logo.svg";
import "./mobileMenu.scss";

export const MobileMenu = ({ openMobileMenu, setOpenMobileMenu }) => {
	const [openSubMenu, setOpenSubMenu] = useState({
		getStarted: false,
		solutions: false,
		develop: false,
		foundation: false,
		connect: false,
		ecosystem: false,
	});
	return (
		<div
			className="mobile-menu"
			style={{ display: openMobileMenu ? "block" : "none" }}
		>
			<div className="head">
				<div className="logo">
					<img src={logo} alt="IOTA logo" />
				</div>

				<div
					className="mobilemenu-button"
					onClick={() => setOpenMobileMenu(false)}
				>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="mobile-submenu">
				<div
					className="mobile-title"
					onClick={() =>
						setOpenSubMenu({
							getStarted: !openSubMenu.getStarted,
							solutions: false,
							develop: false,
							foundation: false,
							connect: false,
							ecosystem: false,
						})
					}
				>
					<h1>Get Started</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						style={{
							transform: openSubMenu.getStarted
								? "rotate(90deg)"
								: "rotate(0deg)",
						}}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
				<div
					className="submenu-container"
					style={{ maxHeight: openSubMenu.getStarted ? "1500px" : "0" }}
				>
					<div className="submenu">
						<h3>QUICK START</h3>
						<div className="menu-links">
							<a href="#">For Developers</a>
							<a href="#">For Entreprise</a>
							<a href="#">For Financial Investors</a>
							<a href="#">For Community Members</a>
						</div>
					</div>
					<div className="submenu">
						<h3>IOTA BASIC</h3>
						<div className="menu-links">
							<a href="#">For Developers</a>
							<a href="#">For Entreprise</a>
							<a href="#">For Financial Investors</a>
							<a href="#">For Community Members</a>
						</div>
					</div>
				</div>
			</div>
			<div className="mobile-submenu">
				<div
					className="mobile-title"
					onClick={() =>
						setOpenSubMenu({
							getStarted: false,
							solutions: !openSubMenu.solutions,
							develop: false,
							foundation: false,
							connect: false,
							ecosystem: false,
						})
					}
				>
					<h1>Solutions</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						style={{
							transform: openSubMenu.solutions
								? "rotate(90deg)"
								: "rotate(0deg)",
						}}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
				<div
					className="submenu-container"
					style={{ maxHeight: openSubMenu.solutions ? "1500px" : "0" }}
				>
					<div className="submenu">
						<h3>INDUSTRIES</h3>
						<div className="menu-links">
							<a href="#">Industries Overview</a>
							<a href="#">Mobility & Automative</a>
							<a href="#">Global Trade & Supply Chains</a>
							<a href="#">Customs & Border Management</a>
							<a href="#">Digital Identity</a>
							<a href="#">Smart City</a>
							<a href="#">Industrial IoT</a>
							<a href="#">EHealth</a>
						</div>
					</div>
					<div className="submenu">
						<h3>OUR PRODUCTS</h3>
						<div className="menu-links">
							<a href="#">IOTA Technologies</a>
							<a href="#">IOTA Access</a>
							<a href="#">IOTA Streams</a>
							<a href="#">Firefly Wallet</a>
							<a href="#">Roadmap</a>
						</div>
					</div>
					<div className="submenu">
						<h3>PARTNER</h3>
						<div className="menu-links">
							<a href="#">Partnerships</a>
						</div>

						<h3>IOTA SERVICES</h3>
						<div className="menu-links">
							<a href="#">IOTA Services</a>
						</div>
						<h3>SECURE DIGITAL INFRASTRUCTURE</h3>
						<div className="menu-links">
							<a href="#">Get Started</a>
							<a href="#">Auditing & SSI Tools</a>
						</div>
					</div>
				</div>
			</div>

			<div className="mobile-submenu">
				<div
					className="mobile-title"
					onClick={() =>
						setOpenSubMenu({
							getStarted: false,
							solutions: false,
							develop: !openSubMenu.develop,
							foundation: false,
							connect: false,
							ecosystem: false,
						})
					}
				>
					<h1>Develop</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						style={{
							transform: openSubMenu.develop ? "rotate(90deg)" : "rotate(0deg)",
						}}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>

				<div
					className="submenu-container"
					style={{ maxHeight: openSubMenu.develop ? "1500px" : "0" }}
				>
					<div className="submenu">
						<h3>FOR DEVELOPERS</h3>
						<div className="menu-links">
							<a href="#">Quick Start</a>
							<a href="#">Documentation</a>
							<a href="#">Certification</a>
						</div>
					</div>
					<div className="submenu">
						<h3>FOR ENTREPRISE</h3>
						<div className="menu-links">
							<a href="#">Quick Start</a>
							<a href="#">Deplyment Options</a>
							<a href="#">Application Blueprints</a>
						</div>
					</div>
					<div className="submenu">
						<h3>ECOSYSTEM</h3>
						<div className="menu-links">
							<a href="#">GEt Involved</a>
							<a href="#">Developer Funding</a>
						</div>
					</div>
				</div>
			</div>
			<div className="mobile-submenu">
				<div
					className="mobile-title"
					onClick={() =>
						setOpenSubMenu({
							getStarted: false,
							solutions: false,
							develop: false,
							foundation: !openSubMenu.foundation,
							connect: false,
							ecosystem: false,
						})
					}
				>
					<h1>Foundation</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						style={{
							transform: openSubMenu.foundation
								? "rotate(90deg)"
								: "rotate(0deg)",
						}}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
				<div
					className="submenu-container"
					style={{ maxHeight: openSubMenu.foundation ? "1500px" : "0" }}
				>
					<div className="submenu">
						<h3>THE IOTA FOUNDATION</h3>
						<div className="menu-links">
							<a href="#">Vision & Mission</a>
							<a href="#">Core Values</a>
							<a href="#">Our Team</a>
							<a href="#">Careers</a>
						</div>
					</div>
					<div className="submenu">
						<h3>SOCIAL IMPACT</h3>
						<div className="menu-links">
							<a href="#">Social Impact</a>
							<a href="#">Regulatory Affairs</a>
							<a href="#">Diversity Initiative</a>
						</div>
					</div>
					<div className="submenu">
						<h3>RESEARCH</h3>
						<div className="menu-links">
							<a href="#">Research Development</a>
							<a href="#">Our Research</a>
							<a href="#">Research Council</a>
							<a href="#">Researcher Profiles</a>
							<a href="#">Research Papers</a>
							<a href="#">Grants</a>
							<a href="#">Roadmap</a>
							<a href="#">Coordicide</a>
						</div>
					</div>
				</div>
			</div>
			<div className="mobile-submenu">
				<div
					className="mobile-title"
					onClick={() =>
						setOpenSubMenu({
							getStarted: false,
							solutions: false,
							develop: false,
							foundation: false,
							connect: !openSubMenu.connect,
							ecosystem: false,
						})
					}
				>
					<h1>Connect</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						style={{
							transform: openSubMenu.connect ? "rotate(90deg)" : "rotate(0deg)",
						}}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
				<div
					className="submenu-container"
					style={{ maxHeight: openSubMenu.connect ? "1500px" : "0" }}
				>
					<div className="submenu">
						<h3>GENERAL INQUIRIES</h3>
						<div className="menu-links">
							<a href="#">Contact Us</a>
							<a href="#">Discord Community</a>
						</div>
					</div>
					<div className="submenu">
						<h3>PRESS</h3>
						<div className="menu-links">
							<a href="#">IOTA Press Release</a>
							<a href="#">News Coverage</a>
						</div>
					</div>
					<div className="submenu">
						<h3>MEDIA ASSETS</h3>
						<div className="menu-links">
							<a href="#">Media Library</a>
							<a href="#">Videos & Podcast</a>
							<a href="#">Brand & Graphics</a>
						</div>
					</div>
				</div>
			</div>
			<div className="mobile-submenu">
				<div
					className="mobile-title"
					onClick={() =>
						setOpenSubMenu({
							getStarted: false,
							solutions: false,
							develop: false,
							foundation: false,
							connect: false,
							ecosystem: !openSubMenu.ecosystem,
						})
					}
				>
					<h1>Ecosystem</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						style={{
							transform: openSubMenu.ecosystem
								? "rotate(90deg)"
								: "rotate(0deg)",
						}}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
				<div
					className="submenu-container"
					style={{ maxHeight: openSubMenu.ecosystem ? "1500px" : "0" }}
				>
					<div className="ecosystem-submenu">
						<div className="menu-links">
							<a href="#">Blog</a>
							<a href="#">Wallet</a>
							<a href="#">Wiki</a>
							<a href="#">Coordicide</a>
							<a href="#">Tangle Explorer</a>
							<a href="#">IOTA Insights</a>
							<a href="#">Automation Series</a>
							<a href="#">Ecosystem Dev Fund</a>
							<a href="#">Roadmap</a>
							<a href="#">IOTA Merch (Partner)</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
