/** @module TraderTree */

import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import Tree from "react-d3-tree";
import Node from "./Node";
import { useCenteredTree } from "./utils/helpers";
import _ from "lodash";

import "./styles/tree.scss";

const TraderTree = (props) => {
  const { traderData, trader } = props;

  const [translate, containerRef] = useCenteredTree();
  const [userId, setUserId] = useState("");
  const [doneCount, setDoneCount] = useState("");

  const nodeSize = { x: 400, y: 375 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -200,
    y: -115,
  };

  const database = firebase.database();
  const auth = firebase.auth();
  auth.onAuthStateChanged((user) => {
    setUserId(user?.uid);
  });

  const nodeRef = database.ref(`users/${userId}/completedQuests/${trader}`);

  useEffect(() => {
    nodeRef.on("value", (snapshot) => {
      const res = snapshot.val();
      console.log(trader);
      let traderCount = 0;
      if (res != null) {
        Object.keys(res).forEach((quest) => {
          if (res[quest]) {
            traderCount = traderCount + 1;
          }
        });
      }
      setDoneCount(traderCount);
    });
  }, [nodeRef]);

  return (
    <div className="tree-container" ref={containerRef}>
      {traderData && (
        <Tree
          key={trader}
          data={traderData}
          translate={translate}
          renderCustomNodeElement={(nodeProps) => (
            <Node
              {...nodeProps}
              foreignObjectProps={foreignObjectProps}
              traderName={trader}
              database={database}
              uid={userId}
              doneCount={doneCount}
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
