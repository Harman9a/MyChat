interface InterLabel {
  label: string;
  placeholder: string;
  type: string;
}
const LoginInput: React.FC<InterLabel> = ({ label, placeholder, type }) => {
  return (
    <div className="LoginSingleInputDiv">
      <h6 className="LoginInputLabel">{label}</h6>
      <input className="LoginInput" value={label} placeholder={placeholder} type={type} />
    </div>
  );
};

export default LoginInput;
