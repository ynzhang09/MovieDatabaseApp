import React, {useState, useEffect} from "react";
import Search from "./Search";

function Home(props) {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('/api/customers')
        .then(res => res.json())
        .then(data => setCustomers(data));
    },[])

    return(
        <div>
            <h1 className="title">Movie Search</h1>
            <h1>{customers.map(customer => customer.firstName)}</h1>
            <Search addToList={props.addToList} />
        </div>
    );
}

export default Home;