import { useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import { fetchWeather } from './store/actions/weatherAction'


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchWeather('noida'))
  },[])
  return (
    <>
    <h1 className='bg-red-500'>ewfheo</h1>
    </>
  )
}

export default App
