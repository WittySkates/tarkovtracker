import { ConnectionLineType, Edge, Node } from "reactflow";
import dagre from "dagre";
import { ElkNode, ElkExtendedEdge } from "elkjs";
import Elk from "elkjs/lib/elk.bundled.js";
import _ from "lodash";

export type Traders = Record<string, FirebaseTrader>;
export type Quests = Record<string, QuestData>;

export interface FirebaseTrader {
    image: string;
    quests: Quests;
}

export interface TraderData {
    name: string;
    quests: Quests;
    image: string;
}

export interface QuestData {
    kappa: boolean;
    link: string;
    name: string;
    objectives: string[];
    rewards: string[];
    prior: string[];
    next: string[];
    type: string;
    trader: string;
    dbId: string;
    traderQuests: Quests;
}

export interface QuestNode extends Node {
    data: QuestData;
}

export interface TraderNode extends Node {
    data: TraderData;
}

export interface QuestEdge {
    id: string;
    source: string;
    target: string;
    type?: string;
    animated: boolean;
}

export interface TraderGraphData {
    name: string;
    nodes: QuestNode[];
    edges: QuestEdge[];
}

export const NODE_WIDTH = 200;
export const NODE_HEIGHT = 100;

const transformFirebaseTraderData = (
    firebasesTraderData: Traders
): TraderData[] => {
    const data = Object.entries(firebasesTraderData).map(
        ([trader, data]): TraderData => {
            return {
                name: trader,
                quests: data.quests,
                image: data.image
            };
        }
    );
    return data;
};

const generateElkNodes = (trader: TraderData): ElkNode[] => {
    const nodes = Object.entries(trader.quests).map(
        ([quest, data]) => {
            return {
                id: quest,
                width: NODE_WIDTH,
                height: NODE_HEIGHT,
                data
            };
        }
    );
    return nodes;
};

const generateElkEdges = (trader: TraderData): ElkExtendedEdge[] => {
    const questNames = new Set(Object.keys(trader.quests));
    const edges = Object.entries(trader.quests).flatMap(
        ([quest, data]) => {
            if (!data.prior) return [];
            return data.prior.reduce<ElkExtendedEdge[]>(
                (result, prior) => {
                    if (questNames.has(prior)) {
                        result.push({
                            id: `${quest}-${prior}`,
                            sources: [quest],
                            targets: [prior]
                        });
                    }
                    return result;
                },
                []
            );
        }
    );
    return edges;
};

const generateElkGraph = (trader: TraderData): ElkNode => {
    return {
        id: "root",
        layoutOptions: { "elk.algorithm": "layered" },
        children: generateElkNodes(trader),
        edges: generateElkEdges(trader)
    };
};

const generateTraderNodes = (trader: TraderData): Node[] => {
    const rootNode: TraderNode = {
        id: "root",
        type: "traderNode",
        // Needs QuestNode data
        data: trader,
        position: { x: 0, y: 0 }
    };
    const questNodes = Object.entries(trader.quests).map(
        ([quest, data]): QuestNode => {
            return {
                id: quest,
                type: "questNode",
                data: {
                    ...data,
                    next: data.next ?? [],
                    prior: data.prior ?? [],
                    trader: trader.name,
                    dbId: quest,
                    traderQuests: trader.quests
                },
                position: { x: 0, y: 0 }
            };
        }
    );
    return [rootNode, ...questNodes];
};

const generateTraderEdges = (quests: Quests): QuestEdge[] => {
    const edgeType = ConnectionLineType.Bezier;
    const [childrenQeusts, parentQuests] = _.partition(
        Object.entries(quests),
        ([quest, data]) => {
            if (!data.prior) return false;
            // @ts-ignore
            const priorQuests = data.prior.filter(priorQuest => {
                return !!quests[priorQuest];
            });
            return priorQuests.length;
        }
    );

    childrenQeusts.sort(([questA, dataA], [questB, dataB]) => {
        return dataA.prior.length - dataB.prior.length;
    });

    const questEdges = childrenQeusts.map(
        ([quest, data]): QuestEdge[] => {
            const priorEdges: QuestEdge[] = data.prior.map(
                priorQuest => {
                    return {
                        id: `${priorQuest}-${quest}`,
                        source: priorQuest,
                        target: quest,
                        animated: false,
                        type: edgeType
                    };
                }
            );
            return priorEdges;
        }
    );

    const rootEdges: QuestEdge[] = parentQuests.map(
        ([quest, data]): QuestEdge => {
            return {
                id: `root-${quest}`,
                source: "root",
                target: quest,
                animated: false,
                type: edgeType
            };
        }
    );

    return [...rootEdges, ...questEdges.flat()];
};

const generateTraderGraphData = (
    firebaseTraderData: Traders | null
) => {
    if (!firebaseTraderData) return null;
    const allTraderData = transformFirebaseTraderData(
        firebaseTraderData
    );
    const allTraderQuestNodes: Promise<TraderGraphData>[] =
        allTraderData.map(
            async (trader): Promise<TraderGraphData> => {
                const elk = new Elk();
                const graph = await elk.layout(
                    generateElkGraph(trader)
                );
                // const questNodes = generateTraderNodes(trader);
                // const questEdges = generateTraderEdges(trader.quests);

                const nodes =
                    graph.children?.map(child => ({
                        ...child,
                        type: "questNode",
                        data: {
                            // @ts-ignore
                            ...child.data,
                            trader: trader.name
                        },
                        position: { x: child.x, y: child.y }
                    })) ?? [];
                const edges = graph.edges;
                console.log({
                    name: trader.name,
                    // @ts-ignore
                    nodes: nodes,
                    // @ts-ignore
                    edges: edges
                });
                return {
                    name: trader.name,
                    // @ts-ignore
                    nodes: nodes,
                    // @ts-ignore
                    edges: edges
                };
            }
        );
    return Promise.all(allTraderQuestNodes);
};

export const getLayoutedElements = ({
    nodes,
    edges
}: {
    nodes: Node<any>[];
    edges: Edge[];
}) => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({});

    nodes.forEach((node: Node) => {
        dagreGraph.setNode(node.id, {
            width: NODE_WIDTH,
            height: NODE_HEIGHT
        });
    });

    edges.forEach((edge: Edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node: Node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        node.position = {
            x: nodeWithPosition.x - NODE_WIDTH / 2,
            y: nodeWithPosition.y - NODE_HEIGHT / 2
        };

        return node;
    });

    const centerOfScreen = window.innerWidth / 2;
    const rootFromCenter = nodes[0].position.x - centerOfScreen;

    nodes.forEach((node: Node) => {
        node.position = {
            x: node.position.x - rootFromCenter - NODE_WIDTH / 2,
            y: node.position.y + 100
        };

        return node;
    });

    return { nodes, edges };
};

export default generateTraderGraphData;
