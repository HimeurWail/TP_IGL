import useFetchTrends from "./Functions/UseFetchTrends";
import { Link } from "react-router-dom";
import TrendCard from "./TrendCard";
import Title from "./Style/Title";

const Trending = () => {

    const { trends , isPending, error } = useFetchTrends("http://localhost:8003/trendings");
    return ( 
         
        <div id="Trendings" className=" w-full h-screen bg-ahmar  pt-[5%] ">

            <Title first="Trending Destination"></Title>
            {error ? <div> there's an error : {error} </div> : <></>}
            {isPending ? <div> Loading ... </div> : <></>}
            {trends ? 
             
              trends.map((trend) =>
                (<div className=" flex flex-row w-1/5 mx-auto mb-[30px]" key={trend.id}>
                    <Link to={`/Trend/${trends.id}`}>
                        <TrendCard trend={trend}> </TrendCard>
                    </Link>
                        hereeeeeee
                </div>

                ))
            
            : <></>}



         

        </div>
    );
}
 
export default Trending;