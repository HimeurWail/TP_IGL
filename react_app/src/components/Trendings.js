import useFetchTrends from "./Functions/UseFetchTrends";
import { Link } from "react-router-dom";
import TrendCard from "./TrendCard";
import Title from "./Style/Title";

const Trending = () => {

    const { trends , isPending, error } = useFetchTrends("http://localhost:8003/trendings");
    return ( 
         
        <div id="Trendings" className=" w-full h-screen  pt-[10%] ">

            <Title first="Trending Destination" ></Title>
           <div className=" flex flex-row justify-center items-center mx-auto mt-[50px] ">
                        {error ? <div> there's an error : {error} </div> : <></>}
                        {isPending ? <div> Loading ... </div> : <></>}
                        {trends ? 
                        
                        trends.map((trend) =>
                            (<div className=" flex flex-row  mx-auto mb-[30px]" key={trend.id}>
                                <Link to={`/Trend/${trends.id}`}>
                                    <TrendCard trend={trend}> </TrendCard>
                                </Link>
                            </div>

                            ))
                        
                        : <></>}
           </div>
            



         

        </div>
    );
}
 
export default Trending;