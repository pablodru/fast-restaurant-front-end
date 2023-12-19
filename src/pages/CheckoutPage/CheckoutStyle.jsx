import { styled } from "styled-components";

export const ScBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;

export const ScCancel = styled.button`
	border: ${(props) =>
		props.selectedPayment && props.name.length > 0
			? "1px solid #023d0a"
			: "1px solid #b4b0b0"};
	width: 300px;
	height: 50px;
	background-color: #fff;
	border-radius: 25px;
	color: ${(props) =>
		props.selectedPayment && props.name.length > 0 ? "#023d0a" : "#888585"};
	font-family: "Roboto", sans-serif;
	font-size: 22px;
	font-weight: 700;

	@media (max-width: 485px) {
		font-size: 18px;
	}
`;

export const ScFinish = styled.button`
	border: ${(props) =>
		props.selectedPayment && props.name.length > 0
			? "1px solid #023d0a"
			: "1px solid #888585"};
	width: 300px;
	height: 50px;
	background-color: ${(props) =>
		props.selectedPayment && props.name.length > 0 ? "#023d0a" : "#888585"};
	border-radius: 25px;
	font-family: "Roboto", sans-serif;
	font-size: 22px;
	font-weight: 700;
	color: ${(props) =>
		props.selectedPayment && props.name.length > 0 ? "#fff" : "#000"};
	@media (max-width: 485px) {
		font-size: 18px;
	}
`;

export const ScButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;
	margin-top: 50px;
	button {
		cursor: pointer;
	}

	@media (max-width: 485px) {
		gap: 20px;
		margin-top: 20px;
	}
`;

export const ScInput = styled.input`
	&::placeholder {
		font-family: "Roboto", sans-serif;
		font-size: 18px;
		font-weight: 500;
		color: #a3a1a1;
	}

	padding-left: 20px;
	background-color: #f7f3f3;
	border-radius: 10px;
	height: 40px;
	border: none;

	${({ value }) =>
		value.startsWith("R$ ") &&
		`
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #000;
  `}
`;

export const ScRight = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 20px;
	p:first-child {
		font-family: "Roboto", sans-serif;
		font-size: 22px;
		font-weight: 600;
		color: #000;
	}

	@media (max-width: 485px) {
		width: 100%;
	}
`;

export const ScForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 30px;
	div:first-child {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		label {
			font-family: "Roboto", sans-serif;
			font-size: 22px;
			font-weight: 600;
			color: #000;
		}
		input {
			&::placeholder {
				font-family: "Roboto", sans-serif;
				font-size: 18px;
				font-weight: 500;
				color: #a3a1a1;
			}
			padding-left: 20px;
			background-color: #f7f3f3;
			border-radius: 10px;
			height: 40px;
			border: none;
			font-family: "Roboto", sans-serif;
			font-size: 18px;
			font-weight: 500;
			color: #000;
		}
	}
	div:last-child {
		display: flex;
		flex-direction: column;
		gap: 10px;
		p {
			font-family: "Roboto", sans-serif;
			font-size: 22px;
			font-weight: 600;
			color: #000;
		}
		div {
			font-family: "Roboto", sans-serif;
			font-size: 18px;
			font-weight: 500;
			color: #000;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #f7f3f3;
			border-radius: 10px;
			height: 40px;
		}
	}

	@media (max-width: 485px) {
		gap: 20px;
		div:first-child {
			label {
				font-size: 18px;
			}
			input {
				&::placeholder {
					font-size: 18px;
				}
			}
		}
		div:last-child {
			p {
				font-size: 18px;
			}
			div {
				font-size: 16px;
			}
		}
	}
`;

export const ScPage = styled.div`
	padding: 60px 250px;
	display: flex;
	justify-content: space-between;
	gap: 150px;

	@media (max-width: 485px) {
		padding: 30px 30px;
		gap: 20px;
		flex-direction: column;
	}
`;

export const ScLeft = styled.div`
	display: flex;
	flex-direction: column;
	gap: 70px;
	width: 50%;

	@media (max-width: 485px) {
		width: 100%;
		gap: 20px;
	}
`;

export const ScResume = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	p {
		font-family: "Roboto", sans-serif;
		font-size: 24px;
		font-weight: 500;
		color: #000;
	}

	@media (max-width: 485px) {
		gap: 15px;
		p {
			font-size: 18px;
		}
	}
`;

export const ScTitle = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 60px 250px 0 250px;
	p {
		font-family: "Roboto", sans-serif;
		font-size: 38px;
		font-weight: 700;
		color: #000;
	}
	@media (max-width: 485px) {
		padding: 10px 30px 0 30px;
		p {
			font-size: 28px;
		}
	}
`;
