import LoginHeader from "../components/Login/Header";
import LoginForm from "../components/Login/LognForm";
import SignupLink from "../components/Login/SIgnupLink";
import SocialLoginBtn from "../components/Login/SocialLoginBtn";

import "./Login.css";
const Login: React.FC = () => {
  return (
    <div>
      <LoginHeader />
      <SocialLoginBtn />
      <LoginForm />
      <SignupLink />
    </div>
  );
};
export default Login;
