import React, { useState } from 'react';
import APIURL from '../../../helpers/environment.js'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap'
const EditItem = (props) => {
    const [editName, setEditName] = useState("");
    const [editPrice, setEditPrice] = useState(0);  //integer
    const [editDescription, setEditDescription] = useState("");
    const [editAvailability, setEditAvailability] = useState(true);  //boolean
    const [editPhotoURL, setEditPhotoURL] = useState("");
    const updateItem = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/item/update/${props.entryID}`, {
            method: 'PUT',
            body: JSON.stringify({
                artisanItem: {
                    name: editName,
                    price: editPrice,
                    description: editDescription,
                    availability: editAvailability,
                    photoURL: editPhotoURL
                }
            }),
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
            <Form onSubmit={updateItem}>
                <FormGroup>
                    <Label htmlFor="name">Edit Name:</Label>
                    <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                    <Label htmlFor="price">Edit Price:</Label>
                    <Input name="price" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
                    <Label htmlFor="description">Edit description:</Label>
                    <Input name="description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                    <Label htmlFor="availability">Edit availability:</Label>
                    <Input name="availability" value={editAvailability} onChange={(e) => setEditAvailability(e.target.value)} />
                    <Label htmlFor="photoURL">Edit photoURL:</Label>
                    <Input name="photoURL" value={editPhotoURL} onChange={(e) => setEditPhotoURL(e.target.value)} />
                </FormGroup>
                <Button type="submit">Update your item!</Button>
            </Form>
        </div>
    )
}
export default EditItem;