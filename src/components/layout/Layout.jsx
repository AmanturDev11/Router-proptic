import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Main from "./main/Main";
import styled from "styled-components";
import Materials from "../pages/materials/Materials";
import Ratings from "../pages/ratings/Ratings";
import Students from "../pages/students/Students";
import Schedule from "../pages/Schedule";
import StudentDetails from "../pages/students/StudentDetails";

const Layout = () => {
	return (
		<div>
			<Header />
			<ContentClass>
				<Main />
				<MainForm>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="/schedule" element={<Schedule />} />
						<Route path="/materials" element={<Materials />} />
						<Route path="/ratings" element={<Ratings />} />
						<Route path="/students" element={<Students />} />
						<Route path="/students/:id" element={<StudentDetails />} />
					</Routes>
				</MainForm>
			</ContentClass>
			<Footer />
		</div>
	);
};

export default Layout;

const MainForm = styled.main`
	display: flex;
	justify-content: center;
`;

const ContentClass = styled.div`
	display: flex;
`;
