import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { fetchRandomGreeting } from '../redux/greetingSlice';
import Greeting from './greeting'

function App() {

  const dispatch = useDispatch();
  const {greeting, loading, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/greet' element={ <Greeting greeting={ greeting.message }/> }/>

      </Routes>    
    </BrowserRouter>
  )
}

export default App
