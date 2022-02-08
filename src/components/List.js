import React from "react";
import ListCard from "./ListCard";

function List(props) {
    //const {list} = props;
    const {list} = props;
    
    return(
        <div>
            <h1 className="title">Anime List</h1>
            <hr />
            <div className="title" id="empty-list">{(list === undefined || list.length === 0) ? "List is empty" : null}</div>
            {list.map(anime => {
                return(
                    <ListCard key={anime._id} anime={anime} removeFromList={props.removeFromList}/>
                );
            })}
        </div>
    );
}

export default List;