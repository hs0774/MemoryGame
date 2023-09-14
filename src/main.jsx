import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//to do 
//have a click update the score 
    // but only if isClicked is false
//update best score if score is higher than current best score
//lose modal if click on isclicked is true card/play again 
// win modal/ confetti/ play again 