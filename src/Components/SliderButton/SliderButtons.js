import { useState } from "react";
import "./SliderButtons.scss";

function SliderButtons({
  button1,
  button2,
  setFunction,
  accountToggle,
  setAccountToggle,
}) {
  const [slider, setSlider] = useState(true);

  function handleButtonClick(e) {
    const buttonValue = e.target.value;
    const buttonValue1 = button1.toLowerCase();
    const buttonValue2 = button2.toLowerCase();
    if (buttonValue === buttonValue1) {
      setFunction(buttonValue1);
      setSlider(true);
    }
    if (buttonValue === buttonValue2) {
      setFunction(buttonValue2);
      setSlider(false);
    }

    if (accountToggle && buttonValue !== "applicant") {
      setAccountToggle(false);
    }
    if (!accountToggle && buttonValue !== "recruiter") {
      setAccountToggle(true);
    }
  }

  return (
    <div className="sliderButton_container">
      <span
        className={
          slider
            ? "sliderButton_slider slideLeft"
            : "sliderButton_slider slideRight"
        }
      ></span>
      <div className="sliderButton_buttons">
        <button
          onClick={(event) => handleButtonClick(event)}
          className={
            slider
              ? "sliderButton_buttons_button buttonSelected"
              : "sliderButton_buttons_button"
          }
          value={button1.toLowerCase()}
        >
          {button1}
        </button>
        <button
          onClick={(event) => handleButtonClick(event)}
          className={
            slider
              ? "sliderButton_buttons_button"
              : "sliderButton_buttons_button buttonSelected"
          }
          value={button2.toLowerCase()}
        >
          {button2}
        </button>
      </div>
    </div>
  );
}

export default SliderButtons;
