import React, { useState, useEffect } from "react";
import _ from "lodash";
import firebase from "firebase/app";
import "firebase/database";
import { TopNav, TraderTree, Traderbar } from "./components";
import "./App.scss";

const database = firebase.database();

const App = () => {
	const dayInMS = 86400000;
	const [traderTrees, setTraderTrees] = useState({});
	const [traderNames, setTraderNames] = useState([]);
	const [currentTrader, setCurrentTrader] = useState(0);

	useEffect(() => {
		(async () => {
			if (
				!localStorage.getItem("tarkov-tree") ||
				Date.now() - Number(localStorage.getItem("tarkov-time")) >
					3 * dayInMS
			) {
				localStorage.setItem("tarkov-time", Date.now().toString(10));
				await database
					.ref("traderTree")
					.get()
					.then((snapshot) => {
						if (snapshot.exists()) {
							localStorage.setItem("tarkov-tree", snapshot.val());
						} else {
							return null;
						}
					})
					.catch((error) => {
						console.log("Erroring getting trader tree" + error);
					});
			}

			const traderTrees = JSON.parse(localStorage.getItem("tarkov-tree"));
			setTraderTrees(traderTrees);

			const traderNames = _.reduce(
				traderTrees,
				(acc, entry) => [
					...acc,
					{ name: entry.name, attributes: entry.attributes },
				],
				[]
			);
			setTraderNames(traderNames);
		})();
	}, []);

	return (
		<>
			<TopNav />
			<Traderbar
				traderNames={traderNames}
				traderTrees={traderTrees}
				currentTrader={currentTrader}
				setCurrentTrader={setCurrentTrader}
			/>
			<TraderTree
				traderData={traderTrees[currentTrader]}
				trader={traderNames[currentTrader]?.name}
				traderIndex={currentTrader}
			/>
		</>
	);
};

export default App;
