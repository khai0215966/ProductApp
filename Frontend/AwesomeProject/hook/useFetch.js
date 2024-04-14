import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get('http://192.168.1.3:3000/api/products/')
        setData(response.data)
        setLoading(false)
      } catch (error) {
        setError(error.response.data) // Assigning the error response data to error state
      } finally{
        setLoading(false)
      }
    }

    useEffect(()=>{
        fetchData()
    },[])

    const refetch = ()=>{
        setLoading(true)
        fetchData()
    }

  return {data, loading, error, refetch}
}

export default useFetch
