import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { List } from "./todoList.js";

//create your first component
export function Home() {
	return (
		<div>
			<todoList />
		</div>
	);
}
