/** @module TraderTree */

import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import Tree from "react-d3-tree";
import Node from "./Node";
import SessionExpired from "../Popups/SessionExpired";
import { useCenteredTree } from "./utils/helpers";
import { getLinkClasses } from "./utils/treeUtils";

import "./styles/tree.scss";

const TraderTree = props => {
  const { traderData, trader } = props;
  const [translate, containerRef] = useCenteredTree();
  const [userId, setUserId] = useState("");
  const [doneCount, setDoneCount] = useState("");
  const [isSessionDialogOpen, setIsSessionDialogOpen] = useState(false);
  const completedQuests = useRef({});

  const nodeSize = { x: 400, y: 375 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -200,
    y: -115
  };

  const database = firebase.database();
  const auth = firebase.auth();

  const hourInMilli = 3600000;

  auth.onAuthStateChanged(user => {
    if (user) {
      console.log("One hour to timeout");
      setTimeout(() => {
        auth.signOut();
        setTimeout(() => {
          setIsSessionDialogOpen(true);
        }, 500);
      }, hourInMilli * 6);
    }
    setUserId(user?.uid);
  });

  useEffect(() => {
    if (userId && isSessionDialogOpen) setIsSessionDialogOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const userTraderRef = database.ref(`users/${userId}/completedQuests/${trader}`);
  useEffect(() => {
    if (userId) {
      userTraderRef.on("value", snapshot => {
        const res = snapshot.val();
        let traderCount = 0;
        if (res != null) {
          Object.keys(res).forEach(quest => {
            if (res[quest]) {
              traderCount = traderCount + 1;
            }
          });
        }
        completedQuests.current = res;
        setDoneCount(traderCount);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userTraderRef]);
  return (
    <div className="tree-container" ref={containerRef}>
      {traderData && (
        <Tree
          key={trader}
          data={traderData}
          translate={translate}
          renderCustomNodeElement={nodeProps => (
            <Node
              {...nodeProps}
              foreignObjectProps={foreignObjectProps}
              traderQuests={traderData.attributes.Quests}
              traderName={trader}
              database={database}
              uid={userId}
              doneCount={doneCount}
            />
          )}
          pathClassFunc={(node, orientation) => {
            return getLinkClasses(node, orientation, completedQuests.current);
          }}
          nodeSize={nodeSize}
          orientation="vertical"
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          pathFunc="diagonal"
          zoom="0.4"
          enableLegacyTransitions="True"
        />
      )}
      <SessionExpired
        isOpen={isSessionDialogOpen}
        handleClose={() => setIsSessionDialogOpen(false)}
      />
      ;
    </div>
  );
};

export default TraderTree;
