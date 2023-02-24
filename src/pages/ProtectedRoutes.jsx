import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
const {trainer}  =  useSelector(state => state)

 if(trainer){
    return <Outlet/> 
 } else {
    return  <Navigate to='/'/>
 }
}

export default ProtectedRoutes