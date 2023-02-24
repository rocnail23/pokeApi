import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerName } from '../store/slices/trainerName.slice'



const Home = () => {
   
   const dispatch = useDispatch()
   const {register, handleSubmit, reset} = useForm()
   const navigate = useNavigate()
   const submit = data => {dispatch(setTrainerName(data.trainerName.trim()))
    reset({
        trainerName: ""
    })
    navigate('/pokedex')}
    
  return (
    <div className='home'>

        <img src="/images/pokedex-image.png" alt="" />
        <h2 className='hi'>¡Hi trainer!</h2>
        <p>to start the pokedex enter your name</p>
        <form onSubmit={handleSubmit(submit)}>
            <input {...register("trainerName")} placeholder="your name" id='trainerNAME' type="text" className='input_name' />
            <button className='enter'>enter</button>
        </form>
    </div>
  )
}

export default Home