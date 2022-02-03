/** @module Map */

import React, { useEffect, useRef, useState } from "react";

import customsJPG from "./mapimages/Customs/customs.jpg";
import customsSVG from "./mapimages/Customs/Customs.svg";

import shorelineJPG from "./mapimages/Shoreline/shoreline.jpg";
import shorelineSVG from "./mapimages/Shoreline/Shoreline.svg";

import factoryJPG from "./mapimages/Factory/factory.jpg";
import factorySVG from "./mapimages/Factory/Factory.svg";

import woodsJPG from "./mapimages/Woods/woods.jpg";
import woodsSVG from "./mapimages/Woods/Woods.svg";

import reserveJPG from "./mapimages/Reserve/reserve.jpg";
import reserveSVG from "./mapimages/Reserve/Reserve.svg";

import interchangeJPG from "./mapimages/Interchange/interchange.jpg";
import interchangeSVG from "./mapimages/Interchange/Interchange.svg";

import lighthouseMap from "./mapimages/Lighthouse/lighthouse.jpg";

import labsMap from "./mapimages/Labs/labs.jpg";

import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";
import { colors } from "../../constants";

import "./styles/map.scss";

const allMaps = {
  Customs: [
    { map: customsJPG, about: "3D" },
    { map: customsSVG, about: "2D" }
  ],
  Shoreline: [
    { map: shorelineJPG, about: "3D" },
    { map: shorelineSVG, about: "2D" }
  ],
  Factory: [
    { map: factoryJPG, about: "3D" },
    { map: factorySVG, about: "2D" }
  ],
  Woods: [
    { map: woodsJPG, about: "3D" },
    { map: woodsSVG, about: "2D" }
  ],
  Reserve: [
    { map: reserveJPG, about: "3D" },
    { map: reserveSVG, about: "2D" }
  ],
  Interchange: [
    { map: interchangeJPG, about: "3D" },
    { map: interchangeSVG, about: "2D" }
  ],
  Lighthouse: [{ map: lighthouseMap, about: "3D" }],
  Labs: [{ map: labsMap, about: "3D" }]
};

const MapSelector = props => {
  const { currentMap, setCurrentMap, locationMaps } = props;
  const changeMap = newMap => {
    setCurrentMap(newMap);
  };
  return (
    <div className="miniContainer">
      {locationMaps.map((mapData, index) => (
        <div className={`miniMapElement ${currentMap === index && "selectedMap"}`}>
          <img src={mapData.map} alt="NO MAP" onClick={() => changeMap(index)} />
        </div>
      ))}
    </div>
  );
};

const Map = props => {
  const { currentLocation } = props;
  const [currentMap, setCurrentMap] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const Viewer = useRef(null);
  const ref = useRef();

  useEffect(() => {
    Viewer.current.fitToViewer();
    setCurrentMap(0);
  }, [currentLocation]);

  useEffect(() => {
    if (ref.current) {
      setDimensions(ref.current.getBoundingClientRect());
    }
  }, [ref]);

  return (
    <div className="mapContainer" ref={ref}>
      <UncontrolledReactSVGPanZoom
        ref={Viewer}
        width={dimensions.width - 100}
        height={dimensions.height}
        SVGBackground="transparent"
        background={colors.navColor}
        onZoom={e => console.log("zoom")}
        onPan={e => console.log("pan")}
        onClick={event => console.log("click", event.x, event.y, event.originalEvent)}
        detectAutoPan={false}
        defaultTool="pan"
        customMiniature={props => (
          <MapSelector
            currentMap={currentMap}
            setCurrentMap={setCurrentMap}
            locationMaps={allMaps[currentLocation]}
          />
        )}
      >
        <svg width={dimensions.width - 100} height={dimensions.height}>
          <image
            href={allMaps[currentLocation][currentMap]?.map}
            width={dimensions.width - 100}
            height={dimensions.height}
          />
        </svg>
      </UncontrolledReactSVGPanZoom>
    </div>
  );
};

export default Map;
