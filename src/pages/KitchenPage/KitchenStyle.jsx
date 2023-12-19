import { styled } from "styled-components";

export const ScBorder = styled.div`
	min-width: 2px;
	min-height: 100%;
	background-color: #000;
`;

export const ScPage = styled.div`
	padding: 60px 250px;
	display: flex;
	justify-content: space-between;
	gap: 150px;
`;

export const ScSide = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	width: 50%;
	height: 50%;
`;

export const ScPreparing = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 34px;
	font-weight: 800;
	color: #000;
`;