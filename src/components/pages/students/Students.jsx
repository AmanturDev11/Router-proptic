import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const url =
	"https://api-v2.elchocrud.pro/api/v1/26ffbcd54472682a6f7916d505edd500/routerDan";

const Students = () => {
	const [cards, setCards] = useState([]);
	const navigate = useNavigate();

	const getTodos = async () => {
		const response = await axios.get(url);
		setCards(response.data);
	};

	useEffect(() => {
		getTodos();
	}, []);

	const handleCardClick = (id) => {
		navigate(`/students/${id}`);
	};

	return (
		<div>
			<div className="container">
				<Content>
					<ContentCards>
						{cards.map((item) => (
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
									borderRadius: "6px",
									border: "1px solid",
									width: "470px",
									height: "390px",
									cursor: "pointer",
								}}
								key={item._id}
								onClick={() => handleCardClick(item._id)}>
								<h1>{item.name}</h1>
								<img
									style={{ width: "300px" }}
									src={item.image}
									alt={item.name}
								/>
								<p>Age: {item.age}</p>
							</div>
						))}
					</ContentCards>
				</Content>
			</div>
		</div>
	);
};

export default Students;

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

const ContentCards = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 35px;
`;
