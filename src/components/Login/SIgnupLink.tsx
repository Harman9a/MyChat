import { useHistory } from "react-router-dom";

const SignupLink: React.FC = () => {
  const history = useHistory();

  const SignUpRerirect = () => {
    history.push("/signup");
  };

  return (
    <div className="SinupLinkDiv">
      <p>
        Dont have an account?
        <span className="SinupLinkSpan" onClick={SignUpRerirect}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default SignupLink;
