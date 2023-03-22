import React from "react";
import ListItem from "./listItem";

function List(params) {
	const array = params.info;
	return (
		<div>
			{array.length > 0 &&
				array.map((user) => (
					// <ListItem key={e.id} info={e}/>
					<ListItem key={user.id} user={user} />
				))}
		</div>
	);
}

export default List;
