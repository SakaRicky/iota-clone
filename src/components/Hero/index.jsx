import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import videoWoman from "assets/videos/woman.webm";
import videoMachine from "assets/videos/machine.webm";
import videoEarth from "assets/videos/earth.webm";
import { ItemsCarousel } from "./ItemsCarousel";
import "./hero.scss";

export const Hero = () => {
	const [slidesState, setSlidesState] = useState(0);

	// const intervalTime = 5000;
	let slideInterval;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const autoSlide = () => {
		slideInterval = setInterval(() => {
			nextSlide();
		}, 5000);
	};

	useEffect(() => {
		autoSlide();
		return () => clearInterval(slideInterval);
	}, [autoSlide, slideInterval, slidesState]);

	const nextSlide = () => {
		slidesState === 2 ? setSlidesState(0) : setSlidesState(slidesState + 1);
	};

	const previousSlide = () => {
		slidesState === 0 ? setSlidesState(2) : setSlidesState(slidesState - 1);
	};

	const data = [
		{
			source: videoWoman,
			title: "Empowering People",
			desc: "IOTA helps people securely navigate their digital lives",
		},
		{
			source: videoMachine,
			title: "Connecting Machines",
			desc: "IOTA connects IoT with secure data and value exchange",
		},
		{
			source: videoEarth,
			title: "Securing Data",
			desc: "IOTA protects the intergrity and verifiability of your data",
		},
	];

	const slideVariants = {
		hidden: {
			opacity: 0,
			x: 50,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: "tween", duration: 1 },
		},
		exit: {
			x: -100,
			opacity: 0,
			transition: { ease: "easeInOut", duration: 0.5 },
		},
	};

	const slide = (
		<motion.div
			key={data[slidesState].source}
			variants={slideVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
			className="slide"
		>
			<video autoPlay loop muted>
				<source src={data[slidesState].source} type="video/webm" />
			</video>
			<div className="text">
				<h1>
					<span>{data[slidesState].title.split(" ")[0]}</span>{" "}
					{data[slidesState].title.split(" ")[1]}
				</h1>
				<p>{data[slidesState].desc}</p>
			</div>
		</motion.div>
	);

	const buttonVariants = {
		hidden: {
			stroke: "#c6c6c6",
			pathLength: 0,
		},
		visible: {
			pathLength: 1,
			stroke: "#6fe6e6",
			transition: {
				duration: 5,
			},
		},
	};

	return (
		<div className="hero">
			<div className="slideshow-container">
				<div className="slides">
					<AnimatePresence>{slide}</AnimatePresence>
				</div>

				<div className="controls">
					<hr />
					<div className="control-btn">
						<svg
							width="100"
							height="100"
							viewBox="0 0 50 50"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="svg-circle"
							onClick={previousSlide}
						>
							<circle
								cx="25"
								cy="25"
								r="24"
								transform="rotate(-180 25 25)"
								stroke="none"
								className="svg-circle"
							></circle>
							<path d="M27 31L21 25L27 19" stroke="white"></path>
						</svg>
						<motion.svg
							width="100"
							height="100"
							viewBox="0 0 50 50"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="svg-circle"
							onClick={nextSlide}
						>
							<motion.circle
								cx="25"
								cy="25"
								r="24"
								stroke="#6fe6e6"
								className="svg-circle"
								variants={buttonVariants}
								initial="hidden"
								animate="visible"
							></motion.circle>
							<path d="M23 19L29 25L23 31" stroke="white"></path>
						</motion.svg>
					</div>
				</div>
			</div>
			<ItemsCarousel />
		</div>
	);
};
