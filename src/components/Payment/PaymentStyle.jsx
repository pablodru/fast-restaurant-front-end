import styled from "styled-components";

export const ScBox = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: ${(props) =>
		props.selected ? "1px solid #5fc424;" : "1px solid #747272"};
	padding: 30px;
	border-radius: 10px;

	@media (max-width:485px) {
		height: 80px;	
	}
`;

export const ScInfos = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	p {
		font-family: "Roboto", sans-serif;
		font-size: 28px;
		font-weight: 700;
		color: #000;
	}
	@media (max-width:485px) {
		p {
			font-size:24px;
		}	
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
`;
