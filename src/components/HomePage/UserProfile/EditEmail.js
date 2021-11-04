import React, { useState } from 'react';
import APIURL from '../../../helpers/environment.js'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap'
const EditEmail = (props) => {
    const [editEmail, setEditEmail] = useState("");
    const updateEmail = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/updateemail`, {
            method: 'PUT',
            body: JSON.stringify({user: {email: editEmail}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then((res) => {
            console.log("Update Success!");
        })
    }

    const obj = {
        color: 'whitesmoke',
        backgroundColor: 'transparent'
    }
    return (
        <div className= 'login' style={{textAlign: 'center', margin: 'auto', width: "15%", paddingLeft: "8px", paddingTop: "6px", paddingBottom: "6px"}}>
        <Form onSubmit={updateEmail}>
            <FormGroup>
                <Label htmlFor="email" style={obj}>Edit Email:</Label>
                <Input name="email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)}/>
            </FormGroup>
            <Button type="submit" style={obj}>Update your email!</Button>
        </Form>
    </div>
    )
}
export default EditEmail;