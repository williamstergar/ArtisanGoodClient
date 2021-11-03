let APIURL = ''

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3001'
        break;
    case 'artisangoodserver1.herokuapp.com':
        APIURL = 'https://artisangoodclient.herokuapp.com'
}

export default APIURL