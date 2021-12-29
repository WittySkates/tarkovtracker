/** @module TraderTree */

import React, { useRef } from "react";
import { database } from "../../utils/firebase";
import Tree from "react-d3-tree";
import Node from "./Node";
import { useCenteredTree } from "./utils/helpers";
import { getLinkClasses } from "./utils/treeUtils";
import { getDoneCount } from "../../utils/common";
import "./styles/tree.scss";

const TraderTree = props => {
  const { traderData, trader, uid, completedQuestsTrader } = props;
  const [translate, containerRef] = useCenteredTree();
  const autoTimeout = useRef();
  const isTimedOut = useRef(false);

  const nodeSize = { x: 420, y: 300 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -210,
    y: -75
  };

  if (isTimedOut.current) {
    database.goOnline();
    isTimedOut.current = false;
  }

  const hourInMilli = 3600000;
  const timeoutFunction = () => {
    if (autoTimeout.current) {
      clearTimeout(autoTimeout.current);
    }
    autoTimeout.current = setTimeout(() => {
      setTimeout(() => {
        console.log("Timed out for inactivity");
        database.goOffline();
        isTimedOut.current = true;
      }, 500);
    }, hourInMilli);
  };

  timeoutFunction();

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
              uid={uid}
              doneCount={getDoneCount(
                completedQuestsTrader ?? {},
                traderData?.attributes?.Quests ?? {}
              )}
            />
          )}
          pathClassFunc={(node, orientation) => {
            return getLinkClasses(node, orientation, completedQuestsTrader);
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
