import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Auth from './components/Login/Login';
import CreateItem from './components/Sidebar/Sidebar'
import Body from './components/Body/Body';
import EditEmail from './components/UserProfile/EditEmail';
import GetMyItems from './components/UserProfile/UserProfile';
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
        <Auth updateToken={updateToken}/>
        <CreateItem sessionToken={sessionToken}/>
        <Body sessionToken={sessionToken}/>
        <GetMyItems sessionToken={sessionToken}/>
        <EditEmail sessionToken={sessionToken}/>
    </div>
  );
}
export default App;