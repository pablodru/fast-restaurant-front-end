import { styled } from "styled-components";

export const ScButtons = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 70px;
	button {
		cursor: pointer;
	}
`;

export const ScCancel = styled.button`
	border: ${props => props.ordersLength>0 ? '1px solid #1fb41a' : '1px solid #b4b0b0'};
	width: 300px;
	height: 70px;
	background-color: #fff;
	border-radius: 15px;
	color: ${props => props.ordersLength>0 ? '#1fb41a' : '#888585'};
	font-family: "Roboto", sans-serif;
	font-size: 22px;
	font-weight: 700;
`;

export const ScFinish = styled.button`
	border: ${props => props.ordersLength>0 ? '1px solid #1fb41a' : '1px solid #888585'};
	width: 300px;
	height: 70px;
	background-color: ${props => props.ordersLength>0 ? '#1fb41a' : '#888585'};;
	border-radius: 15px;
	font-family: "Roboto", sans-serif;
	font-size: 22px;
	font-weight: 700;
	color: ${props => props.ordersLength>0 ? '#fff' : '#000'};
`;

export const ScPage = styled.div`
	padding: 60px 250px;
	display: flex;
	flex-direction: column;
	gap: 80px;
`;

export const ScWelcome = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;

	p {
		font-family: "Roboto", sans-serif;
		font-size: 30px;
		font-weight: 700;
		color: #000;
	}
	input {
		width: 350px;
		height: 50px;
		background-color: #f0f1ec;
		border: none;
		border-radius: 10px;
		padding-left: 20px;
		font-family: "Roboto";
		font-size: 18px;
		font-weight: 400;
		color: #8a8686;
	}
`;

export const ScBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
`;

export const ScTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	p:nth-child(1) {
		font-family: "Roboto";
		font-size: 28px;
		font-weight: 700;
		color: #000;
	}
	p:nth-child(2) {
		font-family: "Roboto";
		font-size: 18px;
		font-weight: 400;
		color: #353434;
	}
`;

export const ScCategories = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const ScProducts = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 70px;
`;

export const ScBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;
