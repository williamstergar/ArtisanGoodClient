import React, { useEffect, useState } from 'react';
import APIURL from '../../helpers/environment.js'
const CreateItem = (props) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [availability, setAvailability] = useState(true);
    const [photoURL, setPhotoURL] = useState('');
    // useEffect(() => {
    //     console.log(props);
    // }, [])
    const postItem = (e) => {
        e.preventDefault();
        let url = `${APIURL}/item/create`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                price: price,
                description: description,
                availability: availability,
                photoURL: photoURL
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                setName('');
                setPrice(0);
                setDescription('');
                setAvailability(true);
                setPhotoURL('');
                // props.CreateItem()//when fetch works, call it here <-- (can be use for GET)
            })
    }
    return (
        <div> <h1> Create An Item </h1>
            <form onSubmit={postItem}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Item Name' />
                <br />
                <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Item Price' />
                <br />
                <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Item Description' />
                <br />
                {/* <input type='boolean'onChange={(e) => setAvailability(e.target.value)} value={availability} placeholder='Item Availability'/> */}
                <button value={availability} onClick={() => setAvailability(!availability)}>select availability</button>
                {availability ? "true" : "false"}
                <br />
                <input type='text' value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} placeholder='Image' />
                <br />
                <button type='submit' onClick={postItem}>Submit</button>
            </form>
        </div>
    )
}
export default CreateItem;