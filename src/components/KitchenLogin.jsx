import { useState } from "react";
import { styled } from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function KitchenLogin({setSigned}) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    if(password === "admin") {
        setSigned(true)
    }
  };

  return (
    <ScBoxContainer>
      <ScImage
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MiczTPf5WRfHW42fzfC3tJ8GLr0T8f8f71w1vLzycXJcC_IlmwoozobeVaGE34cvGGQ&usqp=CAU"
        alt="successImage"
      />
      <ScTitle>Digite a senha para acessar a cozinha:</ScTitle>
      <ScInputContainer>
        <ScInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          placeholder="admin"
        />
        {showPassword ? (
          <FaEyeSlash onClick={togglePasswordVisibility} className="eye-icon" />
        ) : (
          <FaEye onClick={togglePasswordVisibility} className="eye-icon" />
        )}
      </ScInputContainer>
      <ScButton onClick={handleLogin}>Entrar</ScButton>
    </ScBoxContainer>
  );
}

const ScBoxContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 5px 5px 5px 5px #ccc9c9;
`;

const ScImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;

const ScTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: #000;
  text-align: center;
`;

const ScInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ScInput = styled.input`
  flex-grow: 1;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #ccc9c9;
  background-color: #f1efef;
  padding: 20px;
  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: #000;
  }
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #000;
`;

const ScButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: #fff;
  width: 100%;
  height: 50px;
  background-color: #023d0a;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;
