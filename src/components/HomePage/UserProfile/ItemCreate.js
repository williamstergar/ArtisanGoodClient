import React, {useState} from 'react';
import APIURL from '../../../helpers/environment.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCreate.css'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap'
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
                'Content-Type' : 'application/json',
                'Authorization' : props.sessionToken
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
            <Button style={{ backgroundColor: 'transparent' }} type='submit' onClick={postItem}>Submit</Button>
        </Form>
    </div>
    )
}
export default CreateItem;