import React, {useState} from 'react' // 
import APIURL from '../../../helpers/environment.js' // heroku 

const ItemDelete = (props) => { // we are declaring that ItemDelete cannot be modified, and we are passing information to the ItemDelete component
    const handleDelete = (e, id) => { 
        e.preventDefault() // 
        console.log('Delete Function') // console logging our ItemDelete function
        fetch (`${APIURL}/item/delete/${id}`, { // string interpolated URL fetch from server side; interpolated for heroku deployment purposes
            method: 'DELETE', // delete method
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken // login and authentication, how we validate the token ( the correct user deleting only their items )
            }
        })
        .then(res => console.log(res))
        .catch(error => console.log(error)) // catching errors, console logging them
    }

    return (
        <div>
            <button onClick={(e) => handleDelete(e, props.id)} > Delete Item </button> //button to delete an item
        </div>
    )
}

export default ItemDelete // exporting our component