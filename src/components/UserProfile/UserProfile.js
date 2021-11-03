import React, { useState } from 'react';
import ItemDelete from './ItemDelete';
const UserProfile = (props) => {
    const [items, setItems] = useState([])
    const getMyItems = (e) => {
        e.preventDefault();
        let url = 'http://localhost:3001/item/mine'
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
            <h1>My Profile</h1>
            <button onClick={getMyItems}>My Items</button>
            {items.map(item => {
                return (
                    <div>
                        {item.name}
                        <br/>
                        {item.price}
                        <br/>
                        {item.description}
                        <br/>
                        {item.availability}
                        <br/>
                        {item.photoURL}
                        <ItemDelete id={item.id} sessionToken={props.sessionToken} />
                    </div>
                )
            })}
        </div>
    )
}

export default UserProfile;