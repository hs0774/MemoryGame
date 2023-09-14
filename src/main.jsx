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
//have a click update the score DONE
    // but only if isClicked is false 
//update best score if score is higher than current best score DONE 
//lose modal IF isclicked is true card/play again OPTIONAL IT'LL JUST RESET SCORE
// win modal/ confetti/ play again 