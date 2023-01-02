import React, { useEffect, useState } from 'react'

function GetImgs() {
  const [imgsURLs, setimgsURLs] = useState({})
  useEffect(() =>{
    fetch('http://127.0.0.1:8000/api/getimgs/?code=FQCSKFIHHF').then((res) =>{
        return res.json()
    }).then((data)=>{setimgsURLs(data)})
  }, []);
  return (
    <div>
        <img alt='img' src={`http://127.0.0.1:8000${imgsURLs[0]}`}/>
        <img alt='img' src={`http://127.0.0.1:8000${imgsURLs[1]}`}/>
        <img alt='img' src={`http://127.0.0.1:8000${imgsURLs[3]}`}/>
    </div>
  )
}

export default GetImgs