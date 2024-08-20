
import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import axios from "axios";


const Category = () => {

  let { state } = useLocation();

  // console.log(state)

  const [categorys, setCategory] = useState([]);
  const [ref, setref] = useState();
  const [localData, setlocalData] = useState()


  useEffect(() => {
   axios.get(`http://localhost:5000/movies`).then(res => {
      // setCategory(() => getFilter(res.data))
      // getFilter(res.data);
      const movieObj = localStorage.getItem('movies')
      let dataParse = JSON.parse(movieObj)
      setlocalData(dataParse)
      getFilter(res.data, dataParse )
     })

  }, [ref])

  const getFilter=(data, dataParse)=>{
  //  console.log(data.length, state.cat,'all data without filter')
   let res = []
      const input = state.cat;
      data.map(item=>{
      if(item.id == dataParse.filter(d=>{return d.id === item.id ? true : false})){
        item['status'] = 'saved'
      }
    let all= item.genres.filter((d)=>{
         if(d.search(input) !== -1){
          res.push(item)
         }
    })
    })
      //     for(let i=1 ; i <= res.length; i++ ){
      //   for(let j=1 ; j <= localData?.length; j++ ){
      //     // console.log(res.data[i].id ,dataParse[j].id);
      //     if(res[i]?.id == localData[j]?.id){
      //       res[i]['status'] = 'saved'
      //     }else{
      //       res[i]['status'] = 'save'
      //     }
      //   } 
      // }
    setCategory([])
    setCategory(res)
    // console.log(res.length, 'genresData');
   }


  const handleDislike = (item) => {

    let data = {
      "id": item.id,
      "title": item.title,
      "year": item.year,
      "runtime": item.runtime,
      "genres": item.genres,
      "director": item.director,
      "actors": item.actors,
      "plot": item.plot,
      "posterUrl": item.posterUrl,
      'like': item?.like,
      'unlike': item?.unlike ? item?.unlike + 1 : 1
    }
    axios.put(`http://localhost:5000/movies/${item.id}`, data).then(res => {
      setref(!ref)
    })
  }



  const handleLike = (item) => {

    let data = {
      "id": item.id,
      "title": item.title,
      "year": item.year,
      "runtime": item.runtime,
      "genres": item.genres,
      "director": item.director,
      "actors": item.actors,
      "plot": item.plot,
      "posterUrl": item.posterUrl,
      'like': item?.like ? item?.like + 1 : 1,
      'unlike': item?.unlike
    }
    axios.put(`http://localhost:5000/movies/${item.id}`, data).then(res => {
      setref(!ref)
    })
  }



  const handleSave = (item) => {
    const movieObj = localStorage.getItem('movies')
    let temp = JSON.parse(movieObj)
    temp.push(item)
    localStorage.setItem('movies', JSON.stringify(temp))
    setref(!ref)

  }

  // const handleGetData = (id) => {
  //   // console.log(localData, id)
  //   let saved = 'saved----'
  //   let save = 'jkjhnjk'
  // localData?.filter((val) => {
  //   // console.log(val)
  //     if(val.id == id){
  //       console.log('saved')
  //       return saved
  //     }else{
  //       return save
  //     }   
  //   // return val.id === id ? 'saved' : 'save'
  //   })
  // }
// console.log(handleGetData(1),"")

  return (
    <>
      <div className="row">
        {
          categorys && categorys.map((item, index) => {
            return (
              <div className="col-sm-3">
                <div className="card " key={index}>
                  <img className="card-img-top" src={item.posterUrl} alt="..."></img>
                  <div className="card-body">
                    <h6 className="card-title">Name : {item.title}</h6>

                    <button className="mx-1" onClick={() => handleLike(item)}> Like:{item.like}</button>
                    <button className="mx-1" onClick={() => handleDislike(item)}>Dislike:{item.unlike}</button>
                     
                        <button onClick={() => {
                      handleSave(item)
                    }}>{item?.status}</button>

                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>

  )
}
export default Category