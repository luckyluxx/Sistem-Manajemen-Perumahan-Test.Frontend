import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function useReadControllers() {
  const API_URL = process.env.REACT_APP_API_URL
  //set datafetch to false -> prevent loop
  const [isDataFetched, setIsDataFetched] = useState(false)
  // define what to fetch
  const [houses, setHouse] = useState([])
  const [payments, setPayments] = useState([])

  // fetch all data
  const fetchAllData = async () => {
    await axios.get(`${API_URL}/houses`).then((res) => setHouse(res.data))
    await axios.get(`${API_URL}/payments`).then((res) => setPayments(res.data))
  }

  // use
  useEffect( () => {
    fetchAllData(); //fetch all data
  }, [isDataFetched]) //until all data is fetched
  
  return {
    houses,
    setHouse,
    payments,
    setPayments,
  }
}

export default useReadControllers