/** @module GeneralNav */

import React, { useEffect } from "react";
import "./styles/generalnav.scss";

const GeneralNav = props => {
  const { navArray, id, setCurrentValue, currentValue } = props;

  useEffect(() => {
    transformSelected(currentValue, id, false);
  }, []);

  useEffect(() => {
    transformSelected(currentValue, id, true);
    window.removeEventListener("resize", () => transformSelected(currentValue, id, false));
    window.addEventListener("resize", () => {
      transformSelected(currentValue, id, false);
    });
  }, [currentValue]);

  const transformSelected = (selectedValue, navContainer, animate) => {
    const navContainerRect = document.getElementById(navContainer).getBoundingClientRect();
    const navElementRect = document.getElementById(selectedValue).getBoundingClientRect();
    const sliderTranslateHorizontal =
      ((navContainerRect.right + navContainerRect.left) / 2 -
        (navElementRect.right + navElementRect.left) / 2) *
      -1;
    const sliderTranslateVertical =
      ((navContainerRect.bottom + navContainerRect.top) / 2 -
        (navElementRect.bottom + navElementRect.top) / 2) *
      -1;
    const navSlider = document.getElementById(`${id}navSlider`);
    !animate
      ? (navSlider.style.transition = "all 0s")
      : (navSlider.style.transition = "transform 0.5s, width 0.3s");
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
            setCurrentValue(map);
            // transformSelected(map, id);
          }}
        >
          {map}
        </div>
      ))}
      <div id={`${id}navSlider`} />
    </div>
  );
};

export default GeneralNav;
