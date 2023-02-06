import AnnounceCard from "./AnnounceCard";
import { Link } from "react-router-dom";

const AnnMap = ({Ais}) => {
    return ( 
        <div className="w-[100%] grid grid-cols-2 lg:grid-cols-3 gap-12">  
        {Ais.map((Ai) =>
        
        (<div className=" mb-[30px] " key={Ai.id}>
            <Link to={`/Research/${Ai.announceCode}`}>
                <div className="  hover:scale-105 hover:shadow-xl hover:shadow-lightgris">
                <AnnounceCard Ai={Ai}></AnnounceCard > 
                </div>
                
            </Link>

        </div>
        ))}
    </div>
     );
}
 
export default AnnMap;