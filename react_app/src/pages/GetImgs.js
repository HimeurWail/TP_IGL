import React, { useEffect, useState } from 'react'

function GetImgs() {
  const [imgsURLs, setimgsURLs] = useState({});
  const [Ais, setAis] = useState([]);
  useEffect(() =>{
    fetch('http://127.0.0.1:8000/api/getimgs/?code=GSWXTJNGML').then((res) =>{
        return res.json()
    }).then((data)=>{setimgsURLs(data)})
  }, []);
  useEffect(() =>{
    fetch('http://127.0.0.1:8000/api/recentannounces/').then((res) =>{
        return res.json()
    }).then((data)=>{setAis(data)})
  }, []);
  return (
    <div>
        <img alt='img' src={`http://127.0.0.1:8000${imgsURLs[0]}`}/>
        {Ais.map((ai) =>{
          return (
            <div className='border-2'>
              <h1>{ai.announceCode}</h1>
              <h2>{ai.category}</h2>
              <h2>{ai.type}</h2>
              <h2>{ai.price}</h2>
              <h2>{ai.surface}</h2>
              <h2>{ai.createdAt}</h2>
              <h2>{ai.imgURL}</h2>
            </div>
          )})}
    </div>
  )
}

export default GetImgs