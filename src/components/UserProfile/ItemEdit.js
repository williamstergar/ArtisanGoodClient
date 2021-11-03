import React, {useState} from 'react';
import APIURL from '../../helpers/environment.js'
import { Form, FormGroup, Input, Label, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
const ItemEdit = (props) => {
    const [editName, setEditName] = useState(props.itemUpdate.name)
    const [editPrice, setEditPrice] = useState(props.itemUpdate.price)
    const [editDescription, setEditDescription] = useState(props.itemUpdate.description)
    const [editAvailability, setEditAvailability] = useState(props.itemUpdate.availability)
    const [editPhotoURL, setEditPhotoURL] = useState(props.itemUpdate.photoURL)
    useEffect(() => {
        console.log(props);
    }, [])
    const itemUpdate = (event, item) => {
        event.preventDefault();
        let url = `${APIURL}/item/update/${props.itemToUpdate.entryId}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({entryId:{name: editName, price: editPrice, description: editDescription, availability: editAvailability, photoURL: editPhotoURL }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((res) => {
            console.log('Item successfully edited');
        })
    }
    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit Workout</ModalHeader>
            <ModalBody>
        <Form onSubmit={itemUpdate}>
            <FormGroup>
                <Label htmlFor='name'>Edit Name:</Label>
                <Input name='name' value={editName} onChange={(e) => setEditName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='price'>Edit Price:</Label>
                <Input name='price' value={editPrice} onChange={(e) => setEditPrice(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='description'>Edit Description:</Label>
                <Input name='description' value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='availability'>Edit Availability:</Label>
                <Input name='availability' value={editAvailability} onChange={(e) => setEditAvailability(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='photoURL'>Edit Photo:</Label>
                <Input name='photoURL' value={editPhotoURL} onChange={(e) => setEditPhotoURL(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Update your Item.</Button>
        </Form>
        </ModalBody>
        </Modal>
    )
}
export default ItemEdit;