import { useState } from "react";
import Slider from "react-slick";
import projectsData from "../../projects.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
	const [imageIndex, setImageIndex] = useState(0);

	const settings = {
		dots: true,
		infinite: true,
		lazyLoad: true,
		speed: 700,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: 0,
		beforeChange: (current, next) => setImageIndex(next),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					dots: true,
					arrows: false,
					infinite: true,
					lazyLoad: true,
					speed: 700,
					slidesToShow: 3,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: 0,
				},
			},
			{
				breakpoint: 992,
				settings: {
					dots: true,
					infinite: true,
					arrows: false,
					lazyLoad: true,
					speed: 700,
					slidesToShow: 3,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: 0,
				},
			},
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: true,
					infinite: true,
					lazyLoad: true,
					speed: 700,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					centerPadding: 0,
				},
			},
		],
	};

	return (
		<Slider {...settings}>
			{projectsData.map((project, index) => (
				<div
					key={project.id}
					className={index === imageIndex ? "slide activeSlide" : "slide"}
				>
					<img
						src={project.image}
						alt={project.title}
					/>

					<div className="textContainer">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<a
							href={project.link}
							target="_blank"
							rel="noreferrer"
						>
							<button>view project</button>
						</a>
					</div>
				</div>
			))}
		</Slider>
	);
};
export default Carousel;
