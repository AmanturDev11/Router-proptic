import { Link } from "react-router-dom";
import styled from "styled-components";

const ContactPage = () => {
	return (
		<div>
			<div className="container">
				<Content>
					ContactPage
					<Link to="/about">
						<button>Отмена</button>
					</Link>
				</Content>
			</div>
		</div>
	);
};

export default ContactPage;

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
