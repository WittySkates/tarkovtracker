/** @module TraderTree */

import React from "react";
import Tree from "react-d3-tree";
import Node from "./Node";
import { useCenteredTree } from "./helpers";
import "./styles/tree.scss";

const TraderTree = props => {
  const [translate, containerRef] = useCenteredTree();

  const { data } = props;
  const nodeSize = { x: 400, y: 375 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -200,
    y: -100,
  };

  return (
    <div className="tree-container" ref={containerRef}>
      {data && (
        <Tree
          data={data}
          translate={translate}
          renderCustomNodeElement={nodeProps =>
            Node({ ...nodeProps, foreignObjectProps, traderName: data.name })
          }
          nodeSize={nodeSize}
          orientation="vertical"
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          pathFunc="step"
          zoom="0.4"
        />
      )}
    </div>
  );
};

export default TraderTree;
