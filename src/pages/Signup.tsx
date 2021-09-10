import LoginHeader from "../components/Signup/Header";
import LoginForm from "../components/Signup/LognForm";
import SignupLink from "../components/Signup/SIgnupLink";
import SocialLoginBtn from "../components/Signup/SocialLoginBtn";
const SignUp: React.FC = () => {
  return (
    <div>
      <LoginHeader />
      <SocialLoginBtn />
      <LoginForm />
      <SignupLink />
    </div>
  );
};

export default SignUp;
