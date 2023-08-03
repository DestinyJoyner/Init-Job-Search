import "./ShowHidePasswordButton.scss"

function ShowHidePasswordButton({setFunction, stateVar}) {
    
    function togglePassword(e){
        e.preventDefault()
        setFunction(!stateVar)
    }
    
    return (
        <button 
        className="showHidePass" 
        onClick={(event) => togglePassword(event)}>
        {!stateVar ? "SHOW" : "HIDE"}
      </button>
    );
}

export default ShowHidePasswordButton;