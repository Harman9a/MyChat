import { useHistory } from "react-router-dom";

const SignupLink: React.FC = () => {
  const history = useHistory();

  const SignUpRerirect = () => {
    history.push("/");
  };

  return (
    <div className="SinupLinkDiv">
      <p>
        Already have an account?
        <span className="SinupLinkSpan" onClick={SignUpRerirect}>
          Login
        </span>
      </p>
    </div>
  );
};

export default SignupLink;
