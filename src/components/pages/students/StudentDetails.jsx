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
		<Container>
			<h1>{student.name}</h1>
			<img src={student.image} alt={student.name} />
			<p>Age: {student.age}</p>
		</Container>
	);
};

export default StudentDetails;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
