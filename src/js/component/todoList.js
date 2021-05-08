import React, { useState } from "react";

import { Horizontal } from "./horizontal.js";
import { Counter } from "./counter.js";

export function Todo() {
	const [toDo, setToDo] = useState([]);
	const newDo = event => {
		if (event.key === "Enter" && event.target.value === "") {
			//
			alert("No puedes dejar espacios en blanco");
		} else if (event.key === "Enter") {
			event.preventDefault();
			setToDo(toDo.concat(event.target.value));
			event.target.value = "";
		}
	};
	const removeDo = toRemove => {
		const updatedArray = toDo.filter(item => item.toString() !== toRemove);
		setToDo(updatedArray);
	};

	return (
		<div>
			<Horizontal />
			<ul className="list-group m-5">
				<input
					type="text"
					placeholder="Escriba una tarea "
					onKeyDown={newDo}
				/>
				{toDo.map(doItem => (
					<li
						key={doItem.toString()}
						className="list-group-item text-left">
						{doItem}
						<i
							className="fas fa-trash-alt pl-5"
							onClick={() => removeDo(doItem.toString())}></i>
					</li>
				))}
			</ul>
			<Horizontal />
			<Counter items={toDo.length} />
		</div>
	);
}
