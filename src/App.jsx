
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Counter = React.lazy(() => import('./components/counter/counter'));
const StarRating = React.lazy(() => import('./components/starRating/starRating'));
const TicTacToe = React.lazy(() => import('./components/ticTacToe/ticTacToe'));
const Chessboard = React.lazy(() => import('./components/chess/chessBoard'));
const Stopwatch = React.lazy(() => import('./components/stopWatch/stopWatch'));
const DemoStopWatch = React.lazy(() => import('./components/stopWatch/demoStopWatch'));
const Carousel = React.lazy(() => import('./components/carousel/carousel'));
const MainTic = React.lazy(() => import('./components/tic/main'));
const MainProgressBar = React.lazy(() => import('./components/progressBar/mainProgressBar'));
const Folder = React.lazy(() => import('./components/folder/folder'));
const Form = React.lazy(() => import('./components/form/form'));
const Windowing = React.lazy(() => import('./components/windowing/windowing'));
const NewComment = React.lazy(() => import('./components/newComment/newComment'));


function App() {
  return (
    <Router>
     
        <React.Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/counter' Component={Counter} />
          <Route path='/starrating' Component={StarRating} />
          <Route path='/tictactoe' Component={TicTacToe} />/
          <Route path='/chess' Component={Chessboard} />
          <Route path='/stopwatch' Component={Stopwatch} />
          <Route path='/demostopwatch' Component={DemoStopWatch} />
          <Route path='/carousel' Component={Carousel} />
          <Route path='/maintic' Component={MainTic} />
          <Route path='/progress' Component={MainProgressBar} />
          <Route path='/folder' Component={Folder} />
          <Route path='/form' Component={Form} />
          <Route path='/windowing' Component={Windowing} />
          <Route path='/newcomment' Component={NewComment} />



      </Routes>

        </React.Suspense>


    </Router>
  )
}

export default App
