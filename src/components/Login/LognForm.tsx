import { useHistory } from "react-router-dom";
import LoginInput from "./LoginInput";

const LoginForm: React.FC = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push("/home");
  };
  return (
    <div>
      <div className="LoginInputDiv">
        <LoginInput label="Email" placeholder="Enter Your Email" type="text" />
        <LoginInput
          label="Password"
          placeholder="Enter Your Password"
          type="password"
        />
        <div className="LoginBtnDiv">
          <button className="LoginBtn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
