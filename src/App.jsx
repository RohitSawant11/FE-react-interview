import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Counter from './components/counter/counter'
import StarRating from './components/starRating/starRating'
import TicTacToe from './components/ticTacToe/ticTacToe'
import Chessboard from './components/chess/chessBoard'
import Stopwatch from './components/stopWatch/stopWatch'
import DemoStopWatch from './components/stopWatch/demoStopWatch'
import Carousel from './components/carousel/carousel'
import MainTic from './components/tic/main'
import MainProgressBar from './components/progressBar/mainProgressBar'
import Folder from './components/folder/folder'
import Form from './components/form/form'
import CommentSection from './components/comment/commentSection'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/counter' Component={Counter}  />
        <Route path='/starrating' Component={StarRating}  />
        <Route path='/tictactoe' Component={TicTacToe}  />/
        <Route path='/chess' Component={Chessboard}  />
        <Route path='/stopwatch' Component={Stopwatch}  />
        <Route path='/demostopwatch' Component={DemoStopWatch}  />
        <Route path='/carousel' Component={Carousel} />
        <Route path='/maintic' Component={MainTic} />
        <Route path='/progress' Component={MainProgressBar} />
        <Route path='/folder' Component={Folder} />
        <Route path='/form' Component={Form} />
        <Route path='/comment' Component={CommentSection} />


      </Routes>
    </Router>
  )
}

export default App
