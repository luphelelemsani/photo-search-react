import ErrorIcon from "../../assets/images/error.svg";
import "./error.css";

const ErrorComponent = () => {
  return (
    <>
      <div className="error-container">
        <img src={ErrorIcon} alt="Error Page" />
        <h1>Couldn't find the topic</h1>
      </div>
    </>
  );
};
export default ErrorComponent;
