/** @module TraderTree */

import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import Tree from "react-d3-tree";
import Node from "./Node";
import { useCenteredTree } from "./utils/helpers";

import "./styles/tree.scss";

const TraderTree = props => {
  const [translate, containerRef] = useCenteredTree();
  const [userId, setUserId] = useState("");
  const { data } = props;
  const nodeSize = { x: 400, y: 375 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -200,
    y: -115,
  };

  const database = firebase.database();
  const auth = firebase.auth();
  auth.onAuthStateChanged(user => setUserId(user?.uid));

  return (
    <div className="tree-container" ref={containerRef}>
      {data && (
        <Tree
          key={data.name}
          data={data}
          translate={translate}
          renderCustomNodeElement={nodeProps => (
            <Node
              {...nodeProps}
              foreignObjectProps={foreignObjectProps}
              traderName={data.name}
              database={database}
              uid={userId}
            />
          )}
          nodeSize={nodeSize}
          orientation="vertical"
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          pathFunc="step"
          zoom="0.4"
          enableLegacyTransitions="True"
        />
      )}
    </div>
  );
};

export default TraderTree;
