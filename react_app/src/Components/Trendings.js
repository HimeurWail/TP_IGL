import { Link } from "react-router-dom";
import Title from "./Style/Title";
import Algiers from "../images/pics/AlgiersPic.png"
import Oran from "../images/pics/OranPic.png"
import Constantine from "../images/pics/ConstantinePic.png"
import Setif from "../images/pics/SetifPic.png"


const Trending = () => {

    const trends = [
        {   title: "Alger",
            picture : Algiers , 
            id: 1 
        } , 
        {   title: "Oran",
            picture : Oran, 
            id: 2
        } ,  
        {   title: "Setif",
            picture : Setif, 
            id: 3
        } ,
        {   title: "Constantine",
            picture : Constantine, 
            id: 4
        }
         ]


    return ( 
         
        <div id="Trendings" className=" w-full h-screen  pt-[10%] ">

            <Title first="Trending Destination" ></Title>
           <div className=" flex flex-row justify-center items-center mx-auto mt-[50px] ">
                      
                        {trends ? 
                        
                        trends.map((trend) =>
                            (<div className=" flex flex-row justify-center mx-auto mb-[30px]" key={trend.id}>
                            <Link to={`/Trend/${trends.id}`}>
                               { /*<TrendCard trend={trend}> </TrendCard>*/}
                              <div className="relative flex flex-col justify-center items-start w-[250px] h-[250px] border-gris shadow-gray-900 shadow-xl rounded-sm ">                                
                                    <img className="absolute" src={trend.picture} alt="" />
                                    <p className="absolute text-white text-center bottom-1/4 left-1/3"> {trend.title} </p>              
                              </div>
                            </Link>
                        </div>
                            

                            ))
                        
                        : <></>}
           </div>
            



         

        </div>
    );
}
 
export default Trending;