import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Main from "./main/Main";
import styled from "styled-components";

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
					</Routes>
				</MainForm>
			</ContentClass>
			{/* <Hider /> */}
			<Footer />
		</div>
	);
};

export default Layout;

// const FLexBox = styled.div`
// 	display: flex;
// `;

const MainForm = styled.main`
	display: flex;
	justify-content: center;
	/* align-items: center; */
`;

const ContentClass = styled.div`
	display: flex;
`;
