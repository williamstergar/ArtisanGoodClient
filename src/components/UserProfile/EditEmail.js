import React, { useState } from 'react';
import { Form, Label, Input, FormGroup, Button } from 'reactstrap'
const EditEmail = (props) => {
    const [editEmail, setEditEmail] = useState("");
    const updateEmail = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/user/updateemail', {
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
    return (
    <div>
        <Form onSubmit={updateEmail}>
            <FormGroup>
                <Label htmlFor="email">Edit Email:</Label>
                <Input name="email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Update your email!</Button>
        </Form>
    </div>
    )
}
export default EditEmail;