import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const url =
	"https://api-v2.elchocrud.pro/api/v1/26ffbcd54472682a6f7916d505edd500/routerDan";

const StudentDetails = () => {
	const { id } = useParams();
	const [student, setStudent] = useState(null);

	useEffect(() => {
		const getStudent = async () => {
			const response = await axios.get(`${url}/${id}`);
			setStudent(response.data);
		};
		getStudent();
	}, [id]);

	if (!student) return <div>Loading...</div>;

	return (
		<StudentDetailsContent>
			<div className="container">
				<Content>
					<Cards>
						<h1>{student.name}</h1>
						<img src={student.image} alt={student.name} />
						<p>Age: {student.age}</p>
					</Cards>
				</Content>
			</div>
		</StudentDetailsContent>
	);
};

export default StudentDetails;

const StudentDetailsContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Cards = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: 1px solid;
	width: "470px";
	height: "390px";
	border-radius: "6px";
	img {
		width: 300px;
	}
`;
