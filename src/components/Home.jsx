import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import classes from "./Home.module.css";

const Home = () => {
	return (
		<>
			<article
				id="home"
				className={classes.homeContainer}
			>
				<div className={classes.titleContainer}>
					<h1 className={classes.title}>
						Mar<span>tín</span>
						<span className="highlight">.</span>
					</h1>
					<h6>frontend developer</h6>
				</div>

				<div className={classes.socials}>
					<a
						href="https://www.instagram.com/lic_furaca/"
						target="_Blank"
						rel="noreferrer"
					>
						<InstagramIcon className={classes.socialIcon} />
					</a>
					<a
						href="https://www.linkedin.com/in/developermartindiaz/"
						target="_Blank"
						rel="noreferrer"
					>
						<LinkedInIcon className={classes.socialIcon} />
					</a>
					<a href="mailto:martinexequield@gmail.com?Subject=Contact%20From%20Portfolio">
						<EmailIcon className={classes.socialIcon} />
					</a>
				</div>
			</article>
		</>
	);
};
export default Home;
