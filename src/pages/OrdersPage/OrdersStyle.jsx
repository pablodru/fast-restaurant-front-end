import { styled } from "styled-components";

export const ScNameNotReady = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 90px;
	font-weight: 800;
	color: #7e7b7b;
	margin-bottom: 20px;

	@media (max-width: 485px) {
		font-size: 46px;
	}
`;

export const ScNameReady = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 90px;
	font-weight: 800;
	color: #023d0a;
	margin-bottom: 20px;

	@media (max-width: 485px) {
		font-size: 46px;
	}
`;

export const ScBorder = styled.div`
	min-width: 5px;
	min-height: 100%;
	background-color: #000;

	@media (max-width: 485px) {
		min-width: 100%;
		min-height: 5px;
	}
`;

export const ScPage = styled.div`
	padding: 60px 250px;
	display: flex;
	justify-content: space-between;
	gap: 150px;

	@media (max-width: 485px) {
		padding: 20px 20px;
		flex-direction: column;
		gap: 30px;
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
		gap: 20px;
	}
`;

export const ScPreparing = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 48px;
	font-weight: 800;
	color: #000;

	@media (max-width: 485px) {
		font-size: 28px;
	}
`;
