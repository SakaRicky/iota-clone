/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./items-carousel.scss";
import videoImage from "assets/images/IOTA_Videos_and_Podcast.jpeg";
import chrystalImage from "assets/images/chrysalis-status-page.png";

export const ItemsCarousel = () => {
	const [slidesState, setSlidesState] = useState(0);

	const nextSlide = () => {
		slidesState === 2 ? setSlidesState(0) : setSlidesState(slidesState + 1);
	};

	const previousSlide = () => {
		slidesState === 0 ? setSlidesState(2) : setSlidesState(slidesState - 1);
	};

	return (
		<div className="slider-container">
			<div className="slider">
				<div className="slider__btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						onClick={previousSlide}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</div>
				<a href="#" style={{ display: slidesState === 0 ? "block" : "none" }}>
					<div className="itemslide">
						<div className="itemslide__image">
							<img src={videoImage} alt="podcast video" />
						</div>
						<div className="itemslide__text">
							<h6>DISCOVER</h6>
							<h5>VIDEOS & PODCASTS</h5>
							<p>
								Listen to the latest news and updates from the IOTA Foundation
							</p>
						</div>
					</div>
				</a>
				<a href="#" style={{ display: slidesState === 1 ? "block" : "none" }}>
					<div className="itemslide">
						<div className="itemslide__image">
							<img src={chrystalImage} alt="chrystal status page" />
						</div>
						<div className="itemslide__text">
							<h6>PINNED</h6>
							<h5>CRYSTAL STATUS PAGE</h5>
						</div>
					</div>
				</a>
				<a href="" style={{ display: slidesState === 2 ? "block" : "none" }}>
					<div className="itemslide">
						<div className="itemslide__text">
							<h6>ANNOUNCEMENT</h6>
							<h5>IOTA BLOG</h5>
							<p>IOTA, Shimmer and Assembly Staking Roadmap</p>
						</div>
					</div>
				</a>
				<div className="slider__btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						onClick={nextSlide}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
			</div>

			<div className="items">
				<a href="#">
					<div className="items__card">
						<div className="items__image">
							<img src={chrystalImage} alt="chrystal status page" />
						</div>
						<div className="items__text">
							<h6>PINNED</h6>
							<h5>CRYSTAL STATUS PAGE</h5>
						</div>
					</div>
				</a>
				<a href="#">
					<div className="item-no-image">
						<div className="items__text">
							<h6>ANNOUNCEMENT</h6>
							<h5>IOTA BLOG</h5>
							<p>IOTA, Shimmer and Assembly Staking Roadmap</p>
						</div>
					</div>
				</a>
				<a href="#">
					<div className="items__card">
						<div className="items__image">
							<img src={videoImage} alt="podcast video" />
						</div>
						<div className="items__text">
							<h6>DISCOVER</h6>
							<h5>VIDEOS & PODCASTS</h5>
							<p>
								Listen to the latest news and updates from the IOTA Foundation
							</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};
