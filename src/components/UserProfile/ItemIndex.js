import React,{useState} from 'react';
import ItemEdit from './ItemEdit';
const ItemToUpdate = (props) => {
const [updateActive, setUpdateActive] = useState(false);
const [itemToUpdate, setItemToUpdate] = useState({});
const editUpdateItem = (item) => {
    setItemToUpdate(item);
    console.log(item);
}
const updateOn = () => {
    setUpdateActive(true);
}
const updateOff = () => {
    setUpdateActive(false);
}
return(
    <div>
{updateActive ? <ItemEdit itemToUpdate={itemToUpdate} updateOff={updateOff} token={props.sessionToken} getMyItems={getMyItems}/> : <></>}
    </div>
)}
export default ItemToUpdate;