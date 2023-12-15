import { styled } from "styled-components";

export default function Category(props) {
    const {image, category} = props.category
	return (
		<ScCategory>
			<img src={image} alt={category} />
			{category === "COMBO" && <p>Combos</p>}
            {category === "SIDE" && <p>Acompanhamentos</p>}
            {category === "DRINK" && <p>Bebidas</p>}
            {category === "DESSERT" && <p>Sobremesas</p>}
		</ScCategory>
	);
}

const ScCategory = styled.div`
	width:250px;
    height:150px;
	display: flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	gap:8px;
	border-radius: 8px;
	box-shadow: 0 4px 8px #e0dfdf;
	img {
		width:100px;
		height:100px;
		object-fit:contain;
	}
	p {
		font-family: "Roboto";
		font-size: 18px;
		font-weight: 700;
		color: #000;
	}
`;
