/** @module GeneralNav */

import React, { useEffect } from "react";
import "./styles/generalnav.scss";

const GeneralNav = props => {
  const { navArray, id, setCurrentValue, currentValue } = props;

  useEffect(() => {
    window.addEventListener("resize", () => {
      transformSelected(currentValue, id, false);
    });
    transformSelected(currentValue, id, false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      transformSelected(currentValue, id, false);
    });
    transformSelected(currentValue, id, true);
  }, [currentValue]);

  const transformSelected = (selectedValue, navContainer, animate) => {
    const navContainerRect = document.getElementById(navContainer).getBoundingClientRect();
    const navElementRect = document.getElementById(selectedValue).getBoundingClientRect();
    const sliderTranslateHorizontal =
      (navElementRect.right + navElementRect.left) / 2 -
      (navContainerRect.right + navContainerRect.left) / 2;

    const sliderTranslateVertical =
      (navElementRect.bottom + navElementRect.top) / 2 -
      (navContainerRect.bottom + navContainerRect.top) / 2;

    const navSlider = document.getElementById(`${id}Slider`);
    !animate
      ? (navSlider.style.transition = "all 0s")
      : (navSlider.style.transition = "transform 0.5s, width 0.5s");

    navSlider.style.transform = `translate(${sliderTranslateHorizontal}px, ${
      sliderTranslateVertical + 12
    }px)`;
    navSlider.style.width = `${navElementRect.width}px`;
  };

  return (
    <div className={`generalNav`} id={id}>
      {navArray.map((map, index) => (
        <div
          className={`navElement ${currentValue === map && "navSelected"}`}
          id={map}
          onClick={() => {
            window.removeEventListener("resize", () => transformSelected(currentValue, id, false));
            setCurrentValue(map);
          }}
        >
          {map}
        </div>
      ))}
      <div className="generalSlider" id={`${id}Slider`} />
    </div>
  );
};

export default GeneralNav;
