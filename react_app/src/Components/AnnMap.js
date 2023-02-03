import AnnounceCard from "./AnnounceCard";
import { Link } from "react-router-dom";

const AnnMap = ({Ais}) => {
    return ( 
        <div className=" flex flex-wrap justify-center p-[10px]">  
        {Ais.map((Ai) =>
        
        (<div className=" flex flex-row w-1/3 mx-auto mb-[30px] " key={Ai.id}>
            <Link to={`/Research/${Ai.announceCode}`}>
                <div className=" w-12">
                <AnnounceCard Ai={Ai}></AnnounceCard > 
                </div>
                
            </Link>

        </div>
        ))}
    </div>
     );
}
 
export default AnnMap;