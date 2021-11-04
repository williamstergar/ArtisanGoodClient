import React, { useState } from 'react';
import APIURL from '../../../helpers/environment.js'
import ItemDelete from './ItemDelete';
import EditItem from './ItemEdit';
const UserProfile = (props) => {
    const [items, setItems] = useState([])
    const getMyItems = (e) => {
        e.preventDefault();
        let url = `${APIURL}/item/mine`
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
            <h2 style={obj} >My Profile</h2>
            <button onClick={getMyItems}>My Items</button>
            {items.map(item => {
                return (
                    <div style ={{ color: 'white' }}>
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
                        <EditItem entryID={item.id} sessionToken={props.sessionToken}
                        name={props.name}
                        price={props.price}
                        description={props.description}
                        availability={props.availability}
                        photoURL={props.photoURL}
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default UserProfile;

// ${APIURL} 