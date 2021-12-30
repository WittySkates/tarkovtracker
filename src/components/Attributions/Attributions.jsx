/** @module Attributions */

import React from "react";
import "./styles/attributions.scss";

const Attributions = () => {
  return (
    <>
      <div className="credits">
        <h2>Quest Information</h2>
        <p>
          A huge thank you to the Official Escape from Tarkov Wiki, without their hard work this
          website would not be possible. If you want to check them out they can be found{" "}
          <a
            href="https://escapefromtarkov.fandom.com/wiki/Escape_from_Tarkov_Wiki"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          . All quest information is sourced directly from the Official Escape from Tarkov Wiki and
          is licensed under the Creative Commons Attribution-Share Alike License.
        </p>
        <h2>Tree Visualization</h2>
        For the tree visualization we are using bkrem's D3 tree graph react component. For more
        information you can visit{" "}
        <a
          href="https://bkrem.github.io/react-d3-tree/docs/index.html"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </div>
    </>
  );
};

export default Attributions;
