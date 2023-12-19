import { styled } from "styled-components";

export const ScProductBox = styled.div`
	width: 240px;
	height: 300px;
	border-radius: 15px;
	background-color: ${(props) => props.bgColor};
	position: relative;
	box-shadow: 0 4px 8px #e0dfdf;
	cursor: pointer;

	img:nth-child(1) {
		width: 100%;
		border-radius: 15px;
	}

	div {
		width: 100%;
		height: 200px;
		border-radius: 15px;
		position: absolute;
		background-color: #fff;
		bottom: 0;
		padding-top: 80px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		p:nth-child(1) {
			font-family: "Roboto";
			font-size: 20px;
			font-weight: 600;
			color: #000;
		}
		p:nth-child(2) {
			font-family: "Roboto";
			font-size: 16px;
			font-weight: 400;
			color: #000;
		}
		p:last-child {
			font-family: "Roboto";
			font-size: 20px;
			font-weight: 600;
			color: #000;
			margin-top: 20px;
		}
	}
`;

export const ScImg = styled.img`
	border-radius: 15px;
	width: 180px;
	height: 120px;
	object-fit: scale-down;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -90%);
`;