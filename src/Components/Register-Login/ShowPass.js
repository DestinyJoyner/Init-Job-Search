import "./ShowPass.css";

export default function ShowPass({ stateVar, setFunction }) {
  const togglePass = () => {
    setFunction(!stateVar);
  };
  return (
    <button id="show-hide-button" onClick={togglePass}>
      {stateVar ? "SHOW" : "HIDE"}
    </button>
  );
}
