import Carousel from "./UI/Carousel";

import classes from "./Projects.module.css";

const Projects = () => {
	return (
		<section
			id="projects"
			className={classes.projectsContainer}
		>
			<article>
				<div className={classes.titlesContainer}>
					<h2>
						Projects
						<span className="highlight">.</span>
					</h2>
					<h6>swipe</h6>
				</div>
				<div className={classes.slider}>
					<Carousel />
				</div>
			</article>
		</section>
	);
};
export default Projects;
