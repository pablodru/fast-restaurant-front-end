import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import apiUtil from "../../utils/api";
import {ScObservation,ScDiv,ScTitle,ScComment,ScBoxKitchen,ScBox,ScButtons,ScDelete,ScConfirm} from './KitchenOrderStyle';

export default function KitchenOrder({
	side,
	product,
	observation,
	orderAdditionals,
  customer,
  id,
  setHandleKitchenFeed
}) {

  async function deleteOrder() {
    await apiUtil.deleteOrder(id);
    setHandleKitchenFeed(prev => !prev);
  }

  async function orderReady() {
    await apiUtil.orderReady(id);
    setHandleKitchenFeed(prev => !prev);
  }

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
					<ScDelete onClick={deleteOrder}>
						<IoClose
							style={{ color: "#da4328", width: "70%", height: "70%" }}
						/>
					</ScDelete>
					{side === "left" && (
						<ScConfirm onClick={orderReady}>
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
