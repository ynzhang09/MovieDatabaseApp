import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from './components/About';
import List from './components/List';
import {BrowserRouter, Route} from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";

//To do: list should be backened and persist if user refreshes
// anime review system, see reviews of other users, sign-in process 

function App() {

  const [list, setList] = useState([]);

  //Fetch list from database
  useEffect(() => {
    axios.get("http://localhost:5000/api/anime")
    .then(response => {
        //console.log(response.data.length);
        if(response.data.length > 0) {
            setList(response.data);
            //console.log(response.data[0]);
        }
    });
  }, []);

  const addToList = (anime) => {
    //console.log('added')
    //console.log(anime);
    axios.post("http://localhost:5000/api/anime", anime)
    .then(res => {
      console.log(res.data.success);
      if(res.data.success === false) {
        console.log('already in list');
      }
      else {
        setList(list => list.concat(anime));
        console.log('added to list');
      }
    });
  
    
  }

  const removeFromList = (id) => {
    console.log('removed')
    axios.delete(`http://localhost:5000/api/anime/${id}`)
    .then(res => console.log(res.data));
    const newList = list.filter(anime => anime._id !== id);
    setList(newList);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" render={(props) => <Home {...props} addToList={addToList} />}/> 
        <Route path="/list" render={(props) => <List {...props} list={list} removeFromList={removeFromList}/>}/> 
        <Route path="/about" component={About}/> 
      </div>
    
    </BrowserRouter>
  );
}

export default App;
