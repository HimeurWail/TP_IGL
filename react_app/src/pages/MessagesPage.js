import { useEffect, useState } from "react";
import Title from "../Components/Style/Title";
import messageicon from "../images/icons/messageicon.png" ; 
import checked from "../images/icons/checked.png"




const MessagesPage = (props) => {

    const [listMsgs , setMsgs ] = useState([]) ;

    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/getmessages/?user="+props.userName).then((res) => {
        return res.json();
      }).then((data) => {setMsgs(data);}).catch((err) => console.log(err));
    }, [])

    

    return (
        <div className="bg-beige pt-[3%] flex flex-col space-y-4">
            <div className="flex flex-row justify-center  space-x-2 lg:space-x-5">
                    <img src={messageicon} className=" w-[30px] lg:w-[50px]" alt="" />
                    <Title first={' Your Messages '}></Title>
            </div>

            <div className="pt-[2%]" >
               {
                listMsgs.map((Msg) =>
        
                (
                   <div className="flex flex-col m-6">
                    <div className=" flex flex-col  mx-auto mb-[1px] border-lightgris border-2 rounded-xl w-[90%] lg:w-[60%] lg:p-6 p-4">
                   <div className="flex flex-row  space-x-1 text-center  lg:space-x-4">
                   <img src={checked} className="w-[30px] h-[30px] lg:w-[25px] " alt="" />

                 <div className="flex flex-col lg:flex-row space-x-3 ">
                   <p className="lg:text-lg text-sm font-bold "> Message from  :    </p>
                   <p className="lg:text-lg text-sm  ">  {Msg.senderEmail}</p>
                 </div>
                  
               
                    </div>    
                  <div className="flex flex-col text-center   lg:text-left" >
                     
                      <p className="lg:text-md  font-semibold text-gris  text-sm "> Announce title :{Msg.title} </p>
                      <p className="lg:text-md  font-medium  text-sm "> sent on : {Msg.createdAt} </p>
                  
                   
                   <div className="bg-lightgris w-[100%] h-1 my-2"></div>
                  
                 <p>
                    { Msg.message }
                 </p>
                   </div>
                   
                
                
                </div>

                 <div className="flex justify-center mb-[5px] pr-0">
                 <button className="btn1 cursor-pointer bg-ahmar text-white  mt-[10px] p-[5px] border-0 rounded-[8px]">
                 <a href={"mailto: "+Msg.senderEmail} target="_blank" > Contact sender </a>
                 </button >
                 </div>
                

                   </div> 
                  
                
                ))
               }

            </div>
            
        </div>
      );
}
 
export default MessagesPage;