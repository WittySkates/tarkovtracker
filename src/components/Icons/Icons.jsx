/** @module Icons */

import React from "react";

export const HyperLinkIcon = ({ className, onClick }) => (
  <svg
    className={className}
    onClick={onClick}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title />
    <g id="Link">
      <path d="M20.71,12.71,17.42,16,16,17.42l-3.3,3.29a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L14.59,16,16,14.59l3.29-3.3a1,1,0,0,1,1.42,1.42Z" />
      <path d="M20.71,12.71,17.42,16,16,17.42l-3.3,3.29a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L14.59,16,16,14.59l3.29-3.3a1,1,0,0,1,1.42,1.42Z" />
      <path d="M16.72,18.13h0l-3.29,3.28a2,2,0,1,1-2.82-2.82l3.29-3.28h0a3,3,0,0,0-4.25,0L4,20.95A3,3,0,0,0,4,25.2L6.81,28A3,3,0,0,0,11,28l5.66-5.66a3,3,0,0,0,0-4.23Z" />
      <path d="M28,6.81,25.19,4A3,3,0,0,0,21,4L15.29,9.64a3,3,0,0,0,0,4.24h0l3.29-3.3a2,2,0,1,1,2.82,2.82l-3.29,3.3a3,3,0,0,0,4.24,0L28,11A3,3,0,0,0,28,6.81Z" />
    </g>
  </svg>
);

export const PopoutIcon = ({ className, onClick }) => (
  <svg
    className={className}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 100 125"
    x="0px"
    y="0px"
  >
    <g data-name="Group">
      <path
        data-name="Path"
        d="M88.7,12.7v-.4h-.1l-.6-.6H65.1a2,2,0,0,0,0,4H81.9L42.6,54.6a2,2,0,1,0,2.8,2.8L84.8,18.1V34.9a2,2,0,0,0,4,0V13.2a2,2,0,0,0,0-.4Z"
      />
      <path
        data-name="Path"
        d="M21.2,88.8H68.6a10,10,0,0,0,10-10V50.5a2,2,0,0,0-4,0V78.8a6,6,0,0,1-6,6H21.2a6,6,0,0,1-6-6V31.4a6,6,0,0,1,6-6H49.5a2,2,0,0,0,0-4H21.2a10,10,0,0,0-10,10V78.8A10,10,0,0,0,21.2,88.8Z"
      />
    </g>
  </svg>
);
