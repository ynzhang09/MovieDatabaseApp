import React from "react";

function ListCard(props) {
    const {anime} = props;
    
    return(
        <div className="card" key={anime._id}>
            <button onClick={() => props.removeFromList(anime._id)}>Remove From List</button>
            <img className="card-image" src={anime.image_url} alt={anime.title}></img>
            <div className="card-content">
                <h3 className="card-title">{anime.title}</h3>
                <p><small>RELEASE DATE: {anime.start_date}</small></p>
                <p><small>RATING: {anime.score}</small></p>
                <p className="card-desc">{anime.synopsis}</p>
            </div>
        </div>
    );
}

export default ListCard;