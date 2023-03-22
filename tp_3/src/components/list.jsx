import React from "react";
import ListItem from "./listItem";

function List(params){
    // console.log(params)
    const array=params.info
    console.log(array)
    return (
        <div>
            {array.length>0&&
            array.map((user)=>
                <ListItem key={user.id} user={user}/>)}
        </div>
    )
}


export default List;