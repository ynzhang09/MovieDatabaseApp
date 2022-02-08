import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

function Search(props) {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
       // let advanced = document.getElementById('advancedsearch');
        //advanced.style.display = "none";
        //let noResults = document.getElementById('no-results');
        //noResults.style.display = "none";
    }, [])

    useEffect(() => {
        //console.log('test')
        let noResults = document.getElementById('no-results');
        if(movies === undefined || movies.length === 0) {
            noResults.style.display = "block";
        }
        else {
            noResults.style.display = "none";
        }
    }, [movies])

    const searchMovies = async (event) => {
        event.preventDefault();
        //genre=1,2,3,4,5,25,41
        //let genreString = genres.join();
        
        const url = `https://imdb-api.com/en/API/Search/k_y9ov2nev/${query}`;
        //&type=${medium}&status=${status}&rated=${rating}
        
        try {
            const res = await fetch(url);
            const data = await res.json();
            //console.log(data.results);
            if(query.length >= 3) {
                //console.log(data.results);
                setMovies(data.results);
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return(
        <>
            <div>
                <form className="form" onSubmit={searchMovies}>
                    <div className="search-container">   
                       <input 
                            className="input-text" 
                            type="text" 
                            name="query" 
                            placeholder="Search for movies (minimum 3 letters)"
                            value={query}
                            onChange={handleChange}
                        />
                        <button className="search-button" type="submit">Search</button>
                    </div>                   
                </form>
            </div>
            <div className="title" id="no-results">No Search Results Found</div>
            <div className="card-list">
                {movies.map(movie => <Card key={movie.id} movie={movie} addToList={props.addToList}/>)}
            </div>
        </>
    );
}

export default Search;