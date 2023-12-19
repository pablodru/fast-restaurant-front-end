import { useState } from "react";
import { styled } from "styled-components";
import { FaCreditCard, FaMoneyBill } from "react-icons/fa";

export default function Payment({ mode, isSelected, onSelect }) {
    function selectPayment() {
      onSelect(mode);
    }
  
    return (
      <ScBox selected={isSelected}>
        <ScInfos>
          {mode!=="Dinheiro" && (<FaCreditCard style={{ width: "30px", height: "30px", color: "#023d0a" }} />)}
          {mode==="Dinheiro" && (<FaMoneyBill style={{ width: "30px", height: "30px", color: "#023d0a" }} />)}
          <p>{mode}</p>
        </ScInfos>
        <ScPriceSelect>
          <ScButton onClick={selectPayment}>
            {isSelected && <div></div>}
          </ScButton>
        </ScPriceSelect>
      </ScBox>
    );
  }
  

const ScBox = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: ${props => props.selected ? '1px solid #5fc424;' : '1px solid #747272'};
    padding: 30px;
    border-radius: 10px;
`;

const ScInfos = styled.div`
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
`;

const ScPriceSelect = styled.div`
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

const ScButton = styled.div`
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