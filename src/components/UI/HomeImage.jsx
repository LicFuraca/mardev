import classes from "./HomeImage.module.css";

const HomeImage = ({ children }) => {
	return <section className={classes.homeImage}>{children}</section>;
};
export default HomeImage;
