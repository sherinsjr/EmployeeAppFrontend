import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../navbar/Navbar'

export const Home = () => {
  const [apiData, setApiData] = useState([])

  const getData = ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response)=>{
      setApiData(response.data)
    })
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row-g-3 mt-5">
        <table className="table p-3 text-primary-emphasis bg-info-subtle border border-primary-subtle rounded-3 ">
  <thead>
    <tr>
     
      <th scope="col " className=''>ID</th>
      <th scope="col" className=''>NAME</th>
      <th scope="col" className=''>E-MAIL</th>
    </tr>
  </thead>
  <tbody>
    {apiData.map((data)=>{
      return(
        <tr>
      
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
    </tr>
      )
    })}
    
    
  </tbody>
</table>
        </div>
      </div>
    </div>
  )
}
