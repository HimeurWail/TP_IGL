import AnnounceCard from "./AnnounceCard";
import { Link } from "react-router-dom";

const AnnMap = ({Ais}) => {
    return ( 
        <div className=" w-full flex flex-wrap justify-center p-[10px]">
          
        {Ais.map((Ai) =>
        
        (<div className=" flex flex-row w-1/4 mx-auto mb-[30px]" key={Ai.id}>
            <Link to={`/Research/${Ai.id}`}>
                <AnnounceCard Ai={Ai}></AnnounceCard > 
            </Link>

        </div>
        ))}
    </div>
     );
}
 
export default AnnMap;