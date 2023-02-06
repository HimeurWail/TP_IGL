import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnnounceCard from "../Components/AnnounceCard";
const ListAnnonces = (props) => {
    const [Ais, setAis] = useState([]);
    useEffect(() =>{
      fetch('http://127.0.0.1:8000/api/userannounces/?user='+props.userName)
      .then((res) => {return res.json();}).then((data)=> {setAis(data);})
      .catch((err) => {console.log(err);});
    }, [])
    return (
        <div className=" w-full grid grid-cols-2 lg:grid-cols-3 mt-[30px] m-[10px] p-[10px]">

            {Ais.map((Ai, id) => (
              <div className=" hover:scale-105" key={Ai.id}>
                <Link to={`/Research/${Ai.announceCode}`}>
                          <AnnounceCard Ai={Ai}></AnnounceCard > 
                </Link>
              </div>
            ))}

        </div>
      );
}

export default ListAnnonces;