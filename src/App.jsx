import React from 'react'
import './App.css'
import Header from './components/header'
import Body from './components/body'

function App() {
  const [scoreData,setScoreData]=React.useState(0);
  const [bestScore,setBestScore]=React.useState(0);

  function changeScore() {
    setScoreData(prevScore => prevScore + 1);
  }
  
  function lost(){
    setScoreData(0);
  }
  React.useEffect(() => {
    if(scoreData >= bestScore){
      setBestScore(scoreData);
    }
  },[scoreData,bestScore]); // maybe add bestScore to dependency array 
  

  return (
    <>
    <Header scoreData={scoreData} bestScore={bestScore}/>
    <Body changeScore={changeScore} lost={lost}/>
    </>
  )
}

export default App
