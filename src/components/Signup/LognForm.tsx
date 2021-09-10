import { useHistory } from "react-router-dom";
import LoginInput from "./LoginInput";

const LoginForm: React.FC = () => {
  const history = useHistory();
  const handleSignup = () =>{
    history.push("/home");
  }
  return (
    <div>
      <div className="LoginInputDiv">
        <LoginInput label="Name" placeholder="Enter Your Name" type="text" />
        <LoginInput label="Email" placeholder="Enter Your Email" type="text" />
        <LoginInput
          label="Password"
          placeholder="Enter Your Password"
          type="password"
        />
        <div className="LoginBtnDiv">
          <button className="LoginBtn" onClick={handleSignup}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
