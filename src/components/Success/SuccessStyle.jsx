import { styled } from "styled-components";

export const ScBoxContainer = styled.div`
	z-index: 2;
	width: 40%;
	height: 50%;
	background-color: #fff;
	border-radius: 15px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 30px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    gap: 20px;

	img {
		width: 100%;
		height: 70%;
		margin-top: 50px;
	}
    p {
        text-align: center;
    }
    p:last-child {
    font-family: "Roboto", sans-serif;
	font-size: 22px;
	font-weight: 500;
	color: #6e6e6e; 
    }
`;

export const ScTitle = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 32px;
	font-weight: 800;
	color: #000;
`;
