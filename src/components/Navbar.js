import {Route, Link, Switch} from 'react-router-dom';
import React from 'react'
// import './Navbar.css';
// import EditEmail from './HomePage/UserProfile/EditEmail';
// import CreateItem from './HomePage/UserProfile/ItemCreate';
// import Body from './HomePage/UserProfile/GetAllItems';
// import UserProfile from './HomePage/UserProfile/GetMyItems';
const Navbar = (props) => {
    return(
        <div className='navbar'>
            <div className='navbar-styling'>
                <ul className='unorderedlist'>
                    <p><Link to='/EditEmail'><button>EditEmail</button></Link></p>
                    <br/>
                    <p><Link to='/CreateItem'><button>CreateItem</button></Link></p>
                    <br/>
                    <p><Link to='/Body'><button>View All Items</button></Link></p>
                    <br/>
                    <p><Link to='/UserProfile'><button>My Items</button></Link></p>
                </ul>
                <div className='navbar-route'>
                    {/* <Switch>
                        <Route exact path='/EditEmail'><EditEmail /></Route>
                        <Route exact path='/CreateItem'><CreateItem /></Route>
                        <Route exact path='/Body'><Body /></Route>
                        <Route exact path='/UserProfile'><UserProfile /></Route>
                    </Switch> */}
                </div>
            </div>
        </div>
    )
}
export default Navbar;