import React, {useState} from 'react'; 
import APIURL from '../../../helpers/environment.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCreate.css'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap'
const CreateItem = (props) => { // create item function, arrays below consisting of the characteristics of our items
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [availability, setAvailability] = useState(true);
    const [photoURL, setPhotoURL] = useState('');
    const postItem = (e) => { // postItem function
        e.preventDefault(); // preventing our page from always refreshing
        let url = `${APIURL}/item/create`; // string interpolated fetch URL from server side
        fetch(url, {
            method: 'POST', // post method
            body: JSON.stringify({ // converting our JS object to a JSON string
                name: name,
                price: price,
                description: description,
                availability: availability,
                photoURL: photoURL
            }),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : props.sessionToken // login and authentication, how we validate the token ( the correct user creating only their items )
            })
        }).then((res) => res.json())
        .then((data) => { // calling to the API
            console.log(data);
            setName('');
            setPrice(0);
            setDescription('');
            setAvailability(true);
            setPhotoURL('');
            // props.CreateItem()//when fetch works, call it here <-- (can be use for GET)
        })
    }
    
    const obj = { 
        color: 'whitesmoke', 
        // fontSize: '23px',
        // fontFamily: 
        // fontWeight: 'bold'
    }

    return(
        <div className= 'login' style={{textAlign: 'center', margin: 'auto', width: "30%", paddingLeft: "8px", paddingTop: "6px", paddingBottom: "6px"}}>
        <Form onSubmit={postItem}>
            <h2 style={obj}> What's The Name? </h2>
            <Input type='text' value={name} onChange={(e) => setName(e.target.value)}  placeholder='Item Name'/>
            <br/>
            <h2 style={obj}> How Much Does It Cost? </h2>
            <Input type='text' value={price} onChange={(e) => setPrice(e.target.value)}  placeholder='Item Price'/>
            <br/>
            <h2 style={obj}> Describe Your Item </h2>
            <Input type='text' value={description} onChange={(e) => setDescription(e.target.value)}  placeholder='Item Description'/>
            <br/>
            <h2 style={obj}> How Many Are Available? </h2>
            <Input type='boolean'onChange={(e) => setAvailability(e.target.value)} value={availability} placeholder='Item Availability'/>
            <br />
            <Button style={{backgroundColor: 'transparent'}} value ={availability} onClick={() => setAvailability(!availability)}> Select Availability </Button>
            {availability ? "true" : "false"}
            <br/>
            {/* <h2 style={obj}> Upload A Photo! </h2>
            <Input type='text' value={photoURL} onChange={(e) => setPhotoURL(e.target.value)}  placeholder='Item Image'/>
            */}
            <br/>
            <Button style={{ backgroundColor: 'transparent' }} type='submit' onClick={postItem}>Submit</Button> // button to create the item
        </Form>
    </div>
    )
}
export default CreateItem;