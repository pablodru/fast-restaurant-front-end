import { styled } from "styled-components";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

export default function KitchenOrder({
	side,
	product,
	observation,
	orderAdditionals,
  customer
}) {

	return (
		<ScBoxKitchen side={side}>
			<ScBox>
				<img src={product.image} alt={product.name} />
				<ScDiv>
					<ScTitle>
						{product.codeNumber} - {customer}
					</ScTitle>
					<ScComment>1x {product.name}</ScComment>
          {orderAdditionals.length>0 && (orderAdditionals.map(additional => (<ScComment>1x {additional.additional.name}</ScComment>)))}
				</ScDiv>
				<ScButtons>
					<ScDelete>
						<IoClose
							style={{ color: "#da4328", width: "70%", height: "70%" }}
						/>
					</ScDelete>
					{side === "left" && (
						<ScConfirm>
							<FaCheck
								style={{ color: "#52b12c", width: "70%", height: "70%" }}
							/>
						</ScConfirm>
					)}
				</ScButtons>
			</ScBox>
			{observation.length>0 && (<ScObservation>
				<p>Observações:</p>
				<div>{observation}</div>
			</ScObservation>)}
		</ScBoxKitchen>
	);
}

const ScObservation = styled.div`
width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  align-items: flex-start;
	gap: 20px;
	p {
		font-family: "Roboto", sans-serif;
		font-size: 20px;
		font-weight: 700;
		color: #000;
	}
	div {
    border: 1px solid #807e7e;
    background-color: #eeeaea;
    width: 100%;
    min-height: 70px;
		font-family: "Roboto", sans-serif;
		font-size: 16px;
		font-weight: 500;
		color: #807e7e;
    border-radius: 5px;
    padding: 10px;
	}
`;

const ScDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;
  p {
    word-wrap: wrap;
    max-width: 120px;
  }
`;

const ScTitle = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 20px;
	font-weight: 700;
	color: #000;
`;

const ScComment = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 16px;
	font-weight: 400;
	color: #bdbaba;
`;

const ScBoxKitchen = styled.div`
	width: 450px;
	min-height: 70px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	padding: 10px;
	align-items: center;
	justify-content: space-between;
  flex-direction: column;
	gap: 30px;
	margin: 0 auto;
	border-radius: 10px;
	border: ${(props) => (props.side === "right" ? "1px solid #3dc921" : "")};
	img {
		width: 10%;
		height: 70%;
		object-fit: contain;
		border-radius: 10px;
	}
`;

const ScBox = styled.div`
	align-items: center;
	justify-content: space-between;
	display: flex;
`;

const ScButtons = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const ScDelete = styled.div`
	width: 40px;
	height: 40px;
	background-color: #da8686;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	cursor: pointer;
`;

const ScConfirm = styled.div`
	width: 40px;
	height: 40px;
	background-color: #97d6a6;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	cursor: pointer;
`;
