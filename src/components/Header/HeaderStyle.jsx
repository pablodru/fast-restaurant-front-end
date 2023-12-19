import { styled } from "styled-components";

export const ScHeader = styled.div`
	width: 100%;
	height: 80px;
	background-color: #0c5702;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 50px;

	@media (max-width: 485px) {
		padding: 10px 20px;
	}
`;

export const ScLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	cursor: pointer;
	p {
		font-family: "Roboto", sans-serif;
		font-size: 24px;
		font-weight: 700;
		color: #fff;
	}

	@media (max-width: 485px) {
		flex-direction: column;
		p {
			font-size: 18px;
		}
	}
`;

export const ScButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 70px;
	p {
		font-family: "Roboto", sans-serif;
		font-size: 18px;
		font-weight: 600;
		color: #fff;
		padding: 10px 15px;
		cursor: pointer;
		border-radius: 10px;
	}
	@media (max-width: 485px) {
		gap: 20px;
		p {
			font-size: 16px;
			padding: 5px;
		}
	}
`;

export const ScProduct = styled.p`
	background-color: ${(props) =>
		props.actualPage === "product" ? "#023d0a" : ""};
`;

export const ScKitchen = styled.p`
	background-color: ${(props) =>
		props.actualPage === "kitchen" ? "#023d0a" : ""};
`;

export const ScOrder = styled.p`
	background-color: ${(props) =>
		props.actualPage === "order" ? "#023d0a" : ""};
`;
