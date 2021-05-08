import React from "react";

//import your own components
import { Header } from "./header.js";
import { Todo } from "./todoList.js";

//create your first component
export const Home = () => {
	return (
		<div className="text-center mx-auto mt-5 w-25 rounded border border-info">
			<Header />
			<Todo />
		</div>
	);
};
