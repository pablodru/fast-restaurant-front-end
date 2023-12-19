import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {ScBoxContainer,ScImage, ScTitle, ScInputContainer, ScInput, ScButton} from "./KitchenLoginStyle";

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