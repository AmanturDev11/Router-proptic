import { NavLink } from "react-router-dom";
import scss from "./Header.module.scss";
import { useLocation } from "react-router-dom";

const links = [
	{
		name: "Materials",
		href: "/materials",
	},
	{
		name: "Students",
		href: "/students",
	},
	{
		name: "Ratings",
		href: "/ratings",
	},
];

const Header = () => {
	const location = useLocation();
	console.log(location);
	return (
		<div className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
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
	);
};

export default Header;
