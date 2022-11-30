import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Airline = () => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})
  const { slug } = useParams()

  useEffect(() => {

    const url = `/api/v1/airlines/${slug}`
    // console.log(slug)

    axios.get(url)
      .then(resp => setAirline(resp.data))
      .catch(resp => console.log(resp))
  }, [])
  return (
    <div className="wrapper">
      <div className="column">
        <div className=""
      </div>
      <div className="column"></div>

    </div>
  )
}

export default Airline