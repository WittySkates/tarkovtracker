/** @module TraderTree */

import React from "react";
import Tree from "react-d3-tree";
import Node from "./Node";
import { useCenteredTree } from "./helpers";
import "./styles/tree.scss";

const TraderTree = props => {
  const [translate, containerRef] = useCenteredTree();

  const { data } = props;
  const nodeSize = { x: 300, y: 200 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -150,
    y: -50,
  };
  return (
    <>
      {data && (
        <div className="tree-container" ref={containerRef}>
          <Tree
            data={data}
            translate={translate}
            renderCustomNodeElement={props =>
              Node({ ...props, foreignObjectProps })
            }
            nodeSize={nodeSize}
            orientation="vertical"
            rootNodeClassName="node__root"
            branchNodeClassName="node__branch"
            leafNodeClassName="node__leaf"
            pathFunc="step"
          />
        </div>
      )}
    </>
  );
};

export default TraderTree;
