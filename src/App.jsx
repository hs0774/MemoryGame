import React from 'react'
import './App.css'
import Header from './components/header'
import Body from './components/body'

function App() {
  const [scoreData,setScoreData]=React.useState(0);
  const [bestScore,setBestScore]=React.useState(0);

  function changeScore(){
    setScoreData(count => count+1);
  }

  React.useEffect(() => {
    if(scoreData >= bestScore){
      setBestScore(scoreData);
    }
  },[scoreData]); // maybe add bestScore to dependency array 
  

  return (
    <>
    <Header scoreData={scoreData} bestScore={bestScore}/>
    <Body changeScore={changeScore}/>
    </>
  )
}

export default App
