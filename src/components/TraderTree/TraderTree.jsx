/** @module TraderTree */

import React, { useRef } from "react";
import { database } from "../../utils/firebase";
import Tree from "react-d3-tree";
import Node from "./Node";
import { useCenteredTree } from "./utils/helpers";
import { getLinkClasses } from "./utils/treeUtils";
import { getDoneCount } from "../../utils/common";
import { connect } from "react-redux";
import "./styles/tree.scss";

const mapStateToProps = (state, ownProps) => {
  return { completedQuests: state.completedQuests.value[ownProps.trader] };
};

const TraderTree = props => {
  const { traderData, trader, uid, completedQuests } = props;
  const [translate, containerRef] = useCenteredTree();
  const autoTimeout = useRef();
  const isTimedOut = useRef(false);

  const nodeSize = { x: 420, y: 320 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -210,
    y: -50
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
              questState={completedQuests?.[nodeProps.nodeDatum.attributes.id] ?? false}
              doneCount={getDoneCount(completedQuests ?? {}, traderData?.attributes?.Quests ?? {})}
            />
          )}
          pathClassFunc={(node, orientation) => {
            return getLinkClasses(node, orientation, completedQuests);
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

export default connect(mapStateToProps)(TraderTree);
