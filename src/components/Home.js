
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "./Slider";
const Home = () => {

  const [homeSlider, setHomeSlider] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/movies').then(res => {
      // console.log(res.data)
      setHomeSlider(res.data) 
    })
  }, [])

  return (
   
       <>
       <div className='container mt-4 '>
       <div className='row'>
      <div className='col'>
      <Slider movie={homeSlider} />
    </div>
    </div>
 
    </div>


<div className='container mt-3'>

<Link to='/Gallery'>
    <input type='submit' value='Explore more..' className='btn btn-primary'/>
</Link>
</div>


    </>
    
    
  )
}

export default Home