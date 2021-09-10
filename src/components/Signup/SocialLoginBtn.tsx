const SocialLoginBtn: React.FC = () => {
  return (
    <div className="SocialLoginMainDiv">
      <div className="SocialText">
        <p>Sign up with one of the following options.</p>
      </div>
      <div className="SocialBtnDIv">
        <div className="SocialBtnContainer">
          <button className="SocialBtn">Google</button>
        </div>
        <div className="SocialBtnContainer">
          <button className="SocialBtn">Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default SocialLoginBtn;
