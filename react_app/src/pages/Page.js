import React from 'react'
import { useContext } from 'react'
import MyContext from '../utils/MyContext.js'
import AnnounceCard from '../Components/AnnounceCard.js'
import chambre from "../images/pics/chambre.svg"

function Page() {
 // const {username,setUsername} = useContext(MyContext)
  return (
    <div className='' id=''>
        hoiiiiiiiiiiiiiiiiiiii
        hi
        <AnnounceCard mainImg={chambre} ></AnnounceCard>
        {/*username*/}
    </div>
  )
}

export default Page