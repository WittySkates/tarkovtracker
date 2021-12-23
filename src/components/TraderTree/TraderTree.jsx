/** @module TraderTree */

import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import Tree from "react-d3-tree";
import Node from "./Node";
import { useCenteredTree } from "./utils/helpers";
import { getLinkClasses } from "./utils/treeUtils";

import "./styles/tree.scss";

const TraderTree = props => {
  const { traderData, trader } = props;
  const [translate, containerRef] = useCenteredTree();
  const [userId, setUserId] = useState("");
  const [doneCount, setDoneCount] = useState("");
  const completedQuests = useRef({});
  const autoTimeout = useRef();
  const isTimedOut = useRef(false);

  const nodeSize = { x: 400, y: 375 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -200,
    y: -115
  };

  const database = firebase.database();
  const auth = firebase.auth();

  if (isTimedOut.current) {
    firebase.database().goOnline();
    isTimedOut.current = false;
  }
  const hourInMilli = 3600000;

  // useEffect(() => {
  //   if (userId) {
  //     console.log("timeout");
  //     setTimeout(() => {
  //       auth.signOut();
  //       setTimeout(() => {
  //         setIsSessionDialogOpen(true);
  //       }, 500);
  //     }, hourInMilli * 6);
  //   }
  // }, [userId]);

  const timeoutFunction = () => {
    if (autoTimeout.current) {
      clearTimeout(autoTimeout.current);
    }
    autoTimeout.current = setTimeout(() => {
      setTimeout(() => {
        firebase.database().goOffline();
        isTimedOut.current = true;
      }, 500);
    }, hourInMilli);
  };

  auth.onAuthStateChanged(user => {
    if (user) {
      timeoutFunction();
    }
    setUserId(user?.uid);
  });

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
      ;
    </div>
  );
};

export default TraderTree;
