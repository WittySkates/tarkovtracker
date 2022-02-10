/** @module Map */

import React, { useEffect, useRef, useState } from "react";
import Minature from "./MapTools/Minature";
import Toolbar from "./MapTools/Toolbar";

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

const Map = props => {
  const { currentLocation } = props;
  const [currentMap, setCurrentMap] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const mapContainerRef = useRef();
  const Viewer = useRef(null);

  const handleResize = () => {
    setDimensions(mapContainerRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    Viewer.current.fitToViewer();
    setCurrentMap(0);
  }, [currentLocation]);

  useEffect(() => {
    if (mapContainerRef.current) {
      setDimensions(mapContainerRef.current.getBoundingClientRect());
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mapContainerRef]);

  return (
    <div className="mapContainer" ref={mapContainerRef}>
      <UncontrolledReactSVGPanZoom
        ref={Viewer}
        width={dimensions.width}
        height={dimensions.height}
        SVGBackground="transparent"
        background={`transparent`} //colors.navColor
        onZoom={e => console.log("zoom")}
        onPan={e => console.log("pan")}
        onClick={event => console.log("click", event.x, event.y, event.originalEvent)}
        detectAutoPan={false}
        defaultTool="pan"
        customMiniature={props => (
          <Minature
            {...props}
            currentMap={currentMap}
            setCurrentMap={setCurrentMap}
            locationMaps={allMaps[currentLocation]}
            viewer={Viewer}
          />
        )}
        customToolbar={props => <Toolbar {...props} />}
      >
        <svg width={dimensions.width} height={dimensions.height}>
          <image
            href={allMaps[currentLocation][currentMap]?.map}
            width={dimensions.width}
            height={dimensions.height}
          />
        </svg>
      </UncontrolledReactSVGPanZoom>
    </div>
  );
};

export default Map;
