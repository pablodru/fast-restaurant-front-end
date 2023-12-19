import { styled } from "styled-components";

export const ScOrderBox = styled.div`
	width: 60%;
	height: auto;
	background-color: #fff;
	z-index: 2;
	position: absolute;
	top: 50px;
	left: 50%;
	transform: translate(-50%, 0);
	border-radius: 20px;
	overflow-y: auto;
	padding: 50px 80px;
	display: flex;
	flex-direction: column;
	gap: 50px;
	overflow-y: auto;

	@media (max-width: 485px) {
		width: 80%;
		padding: 20px 25px;
		gap: 35px;
	}
`;

export const ScTitle = styled.div`
	display: flex;
	justify-content: space-between;
	h6 {
		font-family: "Roboto", sans-serif;
		font-size: 38px;
		font-weight: 700;
		color: #000;
	}
	@media (max-width: 485px) {
		h6 {
			font-size: 28px;
		}
	}
`;

export const ScProductInfos = styled.div`
	display: flex;
	gap: 30px;
	align-items: center;
	position: relative;

	@media (max-width: 485px) {
		gap: 20px;
	}
`;

export const ScProductBox = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 10px;
	box-shadow: 0 4px 8px #e0dfdf;
	background-color: ${(props) => props.bgColor};
	position: relative;
	img:nth-child(1) {
		width: 100%;
		border-radius: 10px;
	}
	div {
		width: 100%;
		height: 100px;
		background-color: #fff;
		border-radius: 10px;
		position: absolute;
		bottom: 0;
	}

	@media (max-width: 485px) {
		min-width: 120px;
		height: 120px;
		div {
			height: 50%;
		}
	}
`;

export const ScImg = styled.img`
	border-radius: 15px;
	width: 150px;
	height: 150px;
	object-fit: scale-down;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media (max-width: 485px) {
		width: 80px;
		height: 80px;
	}
`;

export const ScNameDescription = styled.div`
	height: 200px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	p:nth-child(1) {
		font-family: "Roboto", sans-serif;
		font-size: 28px;
		font-weight: 700;
		color: #000;
	}
	p:nth-child(2) {
		font-family: "Roboto", sans-serif;
		font-size: 20px;
		font-weight: 400;
		color: #424141;
		max-width: 250px;
		line-height: 30px;
	}

	@media (max-width: 485px) {
		height: auto;
		gap: 5px;
		p:nth-child(1) {
			font-size: 22px;
		}
		p:nth-child(2) {
			font-size: 14px;
			line-height: auto;
		}
	}
`;

export const ScNumberOrdered = styled.div`
	width: 150px;
	height: 50px;
	border-radius: 25px;
	border: 2px solid #023d0a;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	div {
		width: 50px;
		height: 100%;
		border-radius: 20px;
		background-color: #023d0a;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "Roboto", sans-serif;
		font-size: 28px;
		font-weight: 600;
		color: #fff;
		cursor: pointer;
	}

	@media (max-width: 485px) {
		width: 120px;
		height: 40px;
		margin-top: 0px;
		div {
			width: 45px;
		}
	}
`;

export const ScPrice = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 28px;
	font-weight: 700;
	color: #000;
	position: absolute;
	right: 70px;
	top: 0;

	@media (max-width: 485px) {
		top: 170px;
		right: 90px;
		font-size: 24px;
	}
`;

export const ScAdittionalsBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	p:nth-child(2) {
		font-family: "Roboto";
		font-size: 18px;
		font-weight: 400;
		color: #353434;
	}

	@media (max-width: 485px) {
		margin-top: 30px;
		gap: 10px;
		p:nth-child(2) {
			font-size: 14px;
		}
	}
`;

export const ScTitleAdditionals = styled.p`
	font-family: "Roboto";
	font-size: 28px;
	font-weight: 700;
	color: #000;
	@media (max-width: 485px) {
		font-size: 22px;
	}
`;

export const ScObservationBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	p:nth-child(1) {
		font-family: "Roboto";
		font-size: 28px;
		font-weight: 700;
		color: #000;
	}
	input {
		height: 100px;
		border: none;
		border-radius: 10px;
		background-color: #d8d4d4;
		padding: 10px;
		line-height: 1;
		&::placeholder {
			font-family: "Roboto";
			font-size: 20px;
			font-weight: 500;
			color: #8f8c8c;
		}
	}

	@media (max-width: 485px) {
		p:nth-child(1) {
			font-size: 22px;
		}
		input {
			height: 60px;
			&::placeholder {
				font-size: 14px;
			}
		}
	}
`;

export const ScCommands = styled.div`
	width: 100%;
	padding: 50px;
	border: 1px solid #a8a5a5;
	border-radius: 8px;
	div:last-child {
		display: flex;
		flex-direction: column;
		gap: 20px;
		p:nth-child(1) {
			font-family: "Roboto";
			font-size: 24px;
			font-weight: 400;
			color: #5f5d5d;
		}
		p:nth-child(2) {
			font-family: "Roboto";
			font-size: 40px;
			font-weight: 900;
			color: #000;
		}
	}

	@media (max-width: 485px) {
		padding: 15px;
		div:last-child {
			gap: 10px;
			p:nth-child(1) {
				font-size: 18px;
			}
			p:nth-child(2) {
				font-size: 24px;
			}
		}
	}
`;

export const ScBorder = styled.div`
	margin-top: 50px;
	margin-bottom: 20px;
	border: 1.5px dashed #a8a5a5;

	@media (max-width: 485px) {
		margin-top: 25px;
	}
`;

export const ScProductOrdered = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	p {
		font-family: "Roboto";
		font-size: 24px;
		font-weight: 400;
		color: #5f5d5d;
	}

	@media (max-width: 485px) {
		p {
			font-size: 18px;
		}
	}
`;

export const ScButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 30px;
	button {
		width: 350px;
		height: 70px;
		border: 1px solid #023d0a;
		border-radius: 30px;
		cursor: pointer;
	}

	@media (max-width: 485px) {
		justify-content: space-between;
		gap: 15px;
		button {
			width: 50%;
		}
	}
`;
export const ScContinue = styled.button`
	background-color: #fff;
	font-family: "Roboto";
	font-size: 24px;
	font-weight: 700;
	color: #023d0a;
	@media (max-width:485px) {
		font-size: 18px;
	}
`;

export const ScAdd = styled.button`
	background-color: #023d0a;
	font-family: "Roboto";
	font-size: 24px;
	font-weight: 700;
	color: #fff;
	@media (max-width:485px) {
		font-size: 18px;
	}
`;
