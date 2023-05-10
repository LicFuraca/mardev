import { useEffect, useState } from "react";
import experienceData from "../experiences.json";

import classes from "./Experience.module.css";

const Experience = () => {
	const [experiences, setExperiences] = useState([]);

	useEffect(() => {
		setExperiences(experienceData);
	}, []);

	return (
		<>
			<section
				id="experience"
				className={classes.experienceContainer}
			>
				<article className="container">
					<h2 className="section-title">
						experience<span className="highlight">.</span>{" "}
					</h2>
					{experiences.map((experience) => (
						<div
							key={experience.id}
							className={classes.content}
						>
							<div
								className={classes.imageContainer}
								style={{ order: `${experience.order}` }}
							>
								<a
									href={experience.link}
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={experience.image}
										alt={experience.title}
									/>
								</a>
							</div>
							<div className={classes.textContainer}>
								<h3>{experience.title}</h3>
								<span>
									{experience.begin} to {experience.end}
								</span>
								<p>{experience.description}</p>
							</div>
						</div>
					))}
				</article>
			</section>
		</>
	);
};
export default Experience;
