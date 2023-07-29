import "./RadioSliderButtons.scss";

function RadioSliderButtons({button1, button2, setFunction}) {

    function handleRadioButton (e) {
        const buttonValue = e.target.value
        console.log(buttonValue)
      setFunction(e.target.value)
    }

  return (
    <div className="radioSlider_container flex-center">
      <div className="radioSlider_buttons"
      >
        <input 
        type="radio" 
        id="radio-1" 
        value = {button1}
        name="radioButtonSlider" 
        onChange={(event) => handleRadioButton(event)}
        checked />

        <label 
        className="radioSlider_buttons_label flex-center" 
        htmlFor="radio-1">
        {button1}
        </label>

        <input 
        type="radio" 
        id="radio-2" 
        value={button2}
        name="radioButtonSlider"
        onChange={(event) => handleRadioButton(event)}
         />
        
        <label className="radioSlider_buttons_label flex-center" 
        htmlFor="radio-2">
          {button2}
        </label>

        <span className="radioSlider_slider"></span>
      </div>
    </div>
  );
}

export default RadioSliderButtons;
