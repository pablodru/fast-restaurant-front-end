import { styled } from "styled-components";

export const ScObservation = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	gap: 20px;
	p {
		font-family: "Roboto", sans-serif;
		font-size: 20px;
		font-weight: 700;
		color: #000;
	}
	div {
		border: 1px solid #807e7e;
		background-color: #eeeaea;
		width: 100%;
		min-height: 70px;
		font-family: "Roboto", sans-serif;
		font-size: 16px;
		font-weight: 500;
		color: #807e7e;
		border-radius: 5px;
		padding: 10px;
	}
`;

export const ScDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;
	p {
		word-wrap: wrap;
		max-width: 120px;
	}
`;

export const ScTitle = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 20px;
	font-weight: 700;
	color: #000;
`;

export const ScComment = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 16px;
	font-weight: 400;
	color: #bdbaba;
`;

export const ScBoxKitchen = styled.div`
	width: 450px;
	min-height: 70px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	padding: 10px;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	gap: 30px;
	margin: 0 auto;
	border-radius: 10px;
	border: ${(props) => (props.side === "right" ? "1px solid #3dc921" : "")};
	img {
		width: 10%;
		height: 70%;
		object-fit: contain;
		border-radius: 10px;
	}

	@media (max-width:485px) {
		width: 100%;	
	}
`;

export const ScBox = styled.div`
	align-items: center;
	justify-content: space-between;
	display: flex;
`;

export const ScButtons = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const ScDelete = styled.div`
	width: 40px;
	height: 40px;
	background-color: #da8686;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	cursor: pointer;
`;

export const ScConfirm = styled.div`
	width: 40px;
	height: 40px;
	background-color: #97d6a6;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	cursor: pointer;
`;
