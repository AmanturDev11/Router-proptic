import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutPage = () => {
	return (
		<div>
			<div className="container">
				<Content>
					AboutPage
					<Link to="/">
						<button>Отмена</button>
					</Link>
					{/* <Link to="..">
						<button style={{backgroundColor: 'red'}}>ADD STUDENT</button>
					</Link> */}
				</Content>
			</div>
		</div>
	);
};

export default AboutPage;

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
