// // import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import React, {useState, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
// import Auth from './components/RegistrationPage/Login';
// import CreateItem from './components/HomePage/UserProfile/ItemCreate';
// import Body from './components/HomePage/UserProfile/GetAllItems';
// import EditEmail from './components/HomePage/UserProfile/EditEmail';
// // import GetMyItems from './components/HomePage/UserProfile/GetMyItems';
// import UserProfile from './components/HomePage/UserProfile/GetMyItems';
// // import Navbar from './components/Navbar';

// function App() {
// const [sessionToken, setSessionToken] = useState('');
// useEffect(() => {
//   if(localStorage.getItem('token')){
//     setSessionToken(localStorage.getItem('token'))
//   }
// }, []);
// const updateToken = (newToken) => {
//   localStorage.setItem('token', newToken);
//   setSessionToken(newToken);
//   console.log(sessionToken);
// }
//   return (
//     <div className="App">
//         <Auth updateToken={updateToken} />
//         {/* <Navbar sessionToken={sessionToken}/>   */}
//         <CreateItem sessionToken={sessionToken}/>
//         <Body sessionToken={sessionToken}/>
//         <EditEmail sessionToken={sessionToken}/>  
//         {/* <GetMyItems sessionToken={sessionToken}/> */}
//         <UserProfile sessionToken={sessionToken}/>
//     </div>
//   );
// }
// export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Auth from './components/RegistrationPage/Login';
// import CreateItem from './components/HomePage/UserProfile/ItemCreate';
// import Body from './components/HomePage/UserProfile/GetAllItems';
// import EditEmail from './components/HomePage/UserProfile/EditEmail';
// import GetMyItems from './components/HomePage/UserProfile/GetMyItems';
import Navbar from './components/Navbar';
import EditEmail from './components/HomePage/UserProfile/EditEmail';
import CreateItem from './components/HomePage/UserProfile/ItemCreate';
import Body from './components/HomePage/UserProfile/GetAllItems';
import UserProfile from './components/HomePage/UserProfile/GetMyItems';
function App() {
const [sessionToken, setSessionToken] = useState('');
useEffect(() => {
  if(localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'))
  }
}, []);
const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}
  return (
    <div className="App">
        {/* <Auth updateToken={updateToken} />  
        <CreateItem sessionToken={sessionToken}/>
        <Body sessionToken={sessionToken}/>
        <EditEmail sessionToken={sessionToken}/>  
        <GetMyItems sessionToken={sessionToken}/> */}
                <Auth updateToken={updateToken}/>
               <Router>
               <Navbar sessionToken={sessionToken}/>
               <Switch>
                        <Route exact path='/EditEmail'>
                          <EditEmail sessionToken={sessionToken}/>
                        </Route>
                        <Route exact path='/CreateItem'>
                          <CreateItem sessionToken={sessionToken} />
                        </Route>
                        <Route exact path='/Body'>
                          <Body />
                        </Route>
                        <Route exact path='/UserProfile'>
                          <UserProfile sessionToken={sessionToken}/>
                        </Route>
                    </Switch>
               </Router>
    </div>
  );
}
export default App;