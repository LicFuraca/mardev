import HomeImage from "./components/UI/HomeImage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";
import About from "./components/About";

const App = () => {
	return (
		<>
			<HomeImage>
				<Navbar />
				<Home />
				<Experience />
				<Projects />
				<About />
				<Footer />
			</HomeImage>
		</>
	);
};

export default App;
