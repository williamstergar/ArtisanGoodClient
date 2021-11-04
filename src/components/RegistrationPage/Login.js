import React, {useState} from 'react';
import { Form, Label, Input, FormGroup, Button } from 'reactstrap'
import APIURL from '../../helpers/environment.js'
import './Login.css';
const Auth = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);
    const title = () => {
        return !login ? 'Register' : 'Login'
    }
    const loginToggle = (e) => {
        e.preventDefault();
        setLogin(!login)
        setEmail('');
        setPassword('');
    }
    const handleSubmit = event => {
        event.preventDefault();
        let reqBody = login ?
            {
                user:{
                    email: email,
                    password: password
                }
            } :
            {
                user:{
                    email: email,
                    password: password
                  }
            }
            let url = login ?
            `${APIURL}/user/login` :
            `${APIURL}/user/register`;
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(reqBody),
                headers: new Headers({
                    'Content-Type': 'application/json',
                })
            })
            .then(
            (response) => response.json())
            .then((data) => {
                props.updateToken(data.SessionToken)
                console.log(data);
            })
            .then(console.log('user logged in.'))
            .catch(err => console.log(err))
    }
    return(
        <div className= 'title' style={{textAlign: 'center', marginTop:'30px', color: 'white', Zindex: '1'}}><h1>Artisan Lovers Cafe</h1>
        <div className= 'login' style={{textAlign: 'center', margin:'auto', marginTop:'10%', width: '15%', color: 'white'}}>
            <Form>
                <FormGroup>
                <h1>{title()}</h1>
                <Label htmlFor="email">Email:</Label>
                <br />
                <Input type='text' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <Label htmlFor="password">Password:</Label>
                <br />
                <Input type='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <Button style={{backgroundColor: 'transparent'}}onClick={loginToggle}>Login / Register</Button>
                <br />
                <br />
                <Button style={{backgroundColor: 'transparent'}} type="submit" onClick={handleSubmit}>Submit</Button>
                </FormGroup>
            </Form>
            </div>
            </div>
    )
}
export default Auth;


// import APIURL from '../../helpers/environment.js'
// `${APIURL}/user/login` :
// `${APIURL}/user/register`;