import { NavLink } from "react-router-dom";
import scss from "./Main.module.scss";
import { useLocation } from "react-router-dom";

const links = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Contact",
		href: "/contact",
	},
];
const Main = () => {
	const location = useLocation();
	console.log(location);
	return (
		<main className={scss.Main}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cardsContent}>
						{links.map((item, index) => (
							<li key={index}>
								<NavLink
									to={item.href}
									className={
										location.pathname === item.href
											? `${scss.link} ${scss.active}`
											: `${scss.link}`
									}>
									{item.name}
								</NavLink>
							</li>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
