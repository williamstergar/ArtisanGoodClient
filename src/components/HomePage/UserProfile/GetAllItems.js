import React, { useState } from 'react';
import APIURL from '../../../helpers/environment.js'
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

    const obj = {
        color: 'white'
    }

    return (
        <div className= 'login' style={{textAlign: 'center', margin: 'auto', width: "30%", paddingLeft: "8px", paddingTop: "6px", paddingBottom: "6px"}}>
            <h2 style={obj}> View All Items </h2>
            <button style={{ backgroundColor: 'transparent', color: 'white' }} onClick={getAllItems}> Get All Items </button>
            {items.map(item => {
                return (
                    <div style ={{ color: 'white' }}>
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