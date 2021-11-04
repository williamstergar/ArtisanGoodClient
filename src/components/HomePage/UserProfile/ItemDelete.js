import React, {useState} from 'react'
import APIURL from '../../../helpers/environment.js'

const ItemDelete = (props) => {
    const handleDelete = (e, id) => {
        e.preventDefault()
        console.log('Delete Function')
        fetch (`${APIURL}/item/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            }
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <button onClick={(e) => handleDelete(e, props.id)} > Delete Item </button>
        </div>
    )
}

export default ItemDelete