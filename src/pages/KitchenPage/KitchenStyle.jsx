import { styled } from "styled-components";

export const ScBorder = styled.div`
	min-width: 2px;
	min-height: 100%;
	background-color: #000;

	@media (max-width:485px) {
		min-height:2px;
		min-width: 100%;	
	}
`;

export const ScPage = styled.div`
	padding: 60px 250px;
	display: flex;
	justify-content: space-between;
	gap: 150px;

	@media (max-width: 485px) {
		padding: 10px 30px;
		flex-direction: column;
		gap: 20px;
	}
`;

export const ScSide = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	width: 50%;
	height: 50%;

	@media (max-width: 485px) {
		width: 100%;
		height: auto;
	}
`;

export const ScPreparing = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 34px;
	font-weight: 800;
	color: #000;

	@media (max-width:485px) {
		font-size: 28px;	
	}
`;
