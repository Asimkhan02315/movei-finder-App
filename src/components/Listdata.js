import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Listdata = () => {

  const [list, setlist] = useState()

  useEffect(() => {
    axios.get('http://localhost:5000/genres').then(res => {
      // console.log(res.data)
      setlist(res.data)
       })
  }, [])

  return (
    <div className='container mt-4' >
      <h5>Movie List</h5>
      <div className='row'>
        <div className='col'>
          <ul className="list-group" >

            {list && list.map((item, index) => {
              return (
                <li key={index} className="list-group-item">
                  <Link className="link" to='/Category'
                    state={{ "cat": item }}
                  >{item}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Listdata