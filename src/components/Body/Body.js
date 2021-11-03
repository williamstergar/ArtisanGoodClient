import React, { useState } from 'react';
import APIURL from '../../helpers/environment.js'
const Body = (props) => {
    const [items, setItems] = useState([])
    const getAllItems = (e) => {
        e.preventDefault();
        let url = `${APIURL}/item/`
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Body</h1>
            <button onClick={getAllItems}>Fetch</button>
            {items.map(item => {
                return (
                    <div>
                        {item.name}
                        <br/>
                        {item.price}
                    </div>
                )
            })}
        </div>
    )
}
export default Body;