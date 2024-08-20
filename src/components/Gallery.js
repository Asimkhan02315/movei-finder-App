
import React, { useState, useEffect } from 'react';
import Listdata from './Listdata'
import Slider from './Slider'
import axios from 'axios';
import { Cards } from './Card';

const Gallery = () => {

  const [movie, setMovie] = useState([]);
  const [searchResult, setSearchResult] = useState([])
  const [random, setRandom]= useState();

  const randomFunction = arr => [...arr].sort(() => Math.random() - 0.5);

  useEffect(() => {
    axios.get('http://localhost:5000/movies').then(res => {
      // console.log(res.data)
      setMovie(res.data)
      setRandom(randomFunction(res.data))  
    })
  }, [])

  const handleSearch=(e)=>{
    const input = e.target.value.toLowerCase();
    if(input.length !== 0){
      let res = [];
      res = movie.filter((d)=>{
         return d.title.toLowerCase().search(input) !== -1;
     })
     setSearchResult(res);
    }else{
      setSearchResult([])
    }
  }

  return (
    <>

      <div className='container '>
        <div className='row'>
          <div className='col-sm-4'>
            <Listdata />
          </div>
          <div className='col-sm-8'>
            <div className='row'>
              <div className='col-sm-12'>

                <input className='mt-3' type='text' placeholder='Search here...' onChange={(e)=>{ handleSearch(e)}} ></input>
              </div>
              <div className='col-sm-12'>
                <Cards search={searchResult} />
              </div>
              <div className='col-sm-12'>
                <Slider movie={movie} />
              </div>
              <div className='col-sm-12'>
                <Cards search={random?.slice(0, 4)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Gallery