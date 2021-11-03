import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const name = req.body.name
// const price = req.body.price
// const description = req.body.description
// const availability = req.body.availability
// const photoURL = req.body.photoURL

// db.query(
//   "INSERT INTO artisanitems (name, price, description, availability, photoURL) VALUES (?,?,?,?,?)",
//   [name, price, description, availability, photoURL],
//   (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send('Values Inserted')
//     }
//   })

// app.put('/update'), (req, res) => {
//   const id = req.body.id
//   const name = req.body.name
//   db.query('UPDATE artisanitems SET name = ? WHERE id = ?', [wage])
// }