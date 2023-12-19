import { styled } from "styled-components";

export const ScBox = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 485px) {
		height: 120px;
	}
`;

export const ScAdditionalInfos = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 50px;

	div:nth-child(1) {
		box-shadow: 0 4px 8px #e0dfdf;
		border-radius: 10px;
		img {
			width: 120px;
			height: 120px;
			object-fit: cover;
		}
	}

	@media (max-width: 485px) {
		gap: 20px;

		div:nth-child(1) {
			img {
				width: 80px;
				height: 80px;
			}
		}
	}
`;

export const ScInfos = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 20px;

	@media (max-width: 485px) {
		gap: 10px;
	}
`;

export const ScDescription = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 20px;
	font-weight: 400;
	color: #424141;
	@media (max-width: 485px) {
		font-size: 13px;
	}
`;

export const ScName = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 28px;
	font-weight: 700;
	color: #000;

	@media (max-width: 485px) {
		font-size: 16px;
	}
`;

export const ScPriceSelect = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 80px;
	p:nth-child(1) {
		font-family: "Roboto", sans-serif;
		font-size: 28px;
		font-weight: 700;
		color: #747272;
	}
	@media (max-width: 485px) {
		flex-direction: column;
		gap: 7px;
		p:nth-child(1) {
			font-size: 20px;
		}
	}
`;

export const ScButton = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 20px;
	border: 1px solid #023d0a;
	padding: 2px;
	cursor: pointer;
	div {
		width: 100%;
		height: 100%;
		background-color: #023d0a;
		border-radius: 10px;
	}

	@media (max-width: 485px) {
		width: 20px;
		height: 20px;
		border-radius: 12px;
	}
`;
