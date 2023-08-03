import { useState } from "react";
import { useContextProvider } from "../../../../../Providers/Provider";
import { useNavProvider } from "../../../../../Providers/NavProvider";
import "./DarkModeSlider.scss";

function DarkModeSlider() {
  const { setTheme } = useContextProvider();
  const { navbarClick, darkModeSwitch } = useNavProvider();

  const [isChecked, setIsChecked] = useState(darkModeSwitch);

  const toggleTheme = (e) => {
    const checkbox = e.target.checked;
    if (checkbox) {
      setTheme("dark");
      setIsChecked(true);
    } else {
      setTheme("light");
      setIsChecked(false);
    }
    navbarClick();
  };

  return (
    <label className="darkModeSwitch">
      <div>
        <input
          type="checkbox"
          className="darkModeSwitch_input"
          checked={isChecked}
          onChange={(event) => toggleTheme(event)}
        />
        <span className="darkModeSwitch_slider"></span>
      </div>
      <span className="darkModeSwitch_button">Dark Mode</span>
    </label>
  );
}

export default DarkModeSlider;
