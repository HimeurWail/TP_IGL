import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnnounceCard from "../Components/AnnounceCard";
const ListAnnonces = (props) => {
    /*const [Ais, setAis] = useState([]);
    useEffect(() =>{
      fetch('http://127.0.0.1:8000/api/userannounces/?user='+props.userName)
      .then((res) => {return res.json();}).then((data)=> {setAis(data);})
      .catch((err) => {console.log(err);});
    }, [])*/
    const Ais = [
        {
          title: "something",
          aiCategory: "location",
          aiType: "villa",
          aiSurface: "240",
          price: "Oum El Bouaghi",
          bedroom: "03",
          Description: " this is the Description for our little thin gbsjhgkjsg",
          id: 1,
        },
        {
          title: "something",
          aiCategory: "location ",
          aiType: "villa",
          aiSurface: "240",
          price: "Oum El Bouaghi",
          bedroom: "03",
          Description: " this is the Description for our little thin gbsjhgkjsg",
          id: 2,
        },
        {
          title: "something",
          aiCategory: "location",
          aiType: "villa",
          aiSurface: "240",
          price: "Oum El Bouaghi",
          bedroom: "03",
          Description: " this is the Description for our little thin gbsjhgkjsg",
          id: 3,
        },
        {
          title: "something",
          aiCategory: "location",
          aiType: "villa",
          aiSurface: "240",
          price: "Oum El Bouaghi",
          bedroom: "03",
          Description: " this is the Description for our little thin gbsjhgkjsg",
          id: 4,
        },
      ];
    return (
        <div className=" w-full flex  flex-wrap justify-evenely mt-[30px] m-[10px] p-[10px]">

            {Ais.map((Ai, id) => (
              <div className="  flex flex-row w-1/2 lg:w-1/3 mx-auto mb-[30px] " key={Ai.id}>
                <Link to={`/Research/${Ai.announceCode}`}>
                          <AnnounceCard Ai={Ai}></AnnounceCard > 
                </Link>
              </div>
            ))}

        </div>
      );
}

export default ListAnnonces;