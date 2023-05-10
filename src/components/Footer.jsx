import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import classes from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={classes.footerContainer}>
			<hr className={classes.line} />
			<div className="container">
				<div className={classes.content}>
					<article className={classes.socials}>
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
					</article>
					<article className={classes.copy}>
						© 2023. All rights reserved. Total or partial reproduction is
						prohibited.
					</article>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
