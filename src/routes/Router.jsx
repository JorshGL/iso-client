import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home';
import Login from '../screens/Login';

const Router = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <Routes>
      { user ? (
        <>
          <Route path="/" element={<Home />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
        </>
      )}
    </Routes>
  )
}

export default Router
