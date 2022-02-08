import React, { useEffect, useState } from "react";


function Card(props) {
    const {movie} = props;
    
    const [movieInfo, setMovieInfo] = useState([]);

    useEffect(() => {
        getInfo();
        //const url = `https://imdb-api.com/en/API/Title/k_y9ov2nev/${movie.id}`;
        //fetch(url)
          //  .then((res) => res.json())
            //.then((data) => setMovieInfo(data))
    }, []);

    const getInfo = async () => {
        const url = `https://imdb-api.com/en/API/Title/k_y9ov2nev/${movie.id}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            //console.log(data.results);
            //console.log(data);
            setMovieInfo(data);
            
        }
        catch(error) {
            console.log(error);
        }

    }

    return(
        <div className="card" key={movie.id}>
            <button onClick={() => props.addToList(movie)}>Add To List</button>
            <img className="card-image" src={movieInfo.image} alt={movie.title}></img>
            <div className="card-content">
                <h3 className="card-title">{movieInfo.title}</h3>
                <p><small>RELEASE YEAR: {movieInfo.year}</small></p>
                <p><small>RATING: {movieInfo.imDbRating}</small></p>
                <p className="card-desc">{movieInfo.plot}</p>
            </div>
        </div>
    );
}

export default Card;