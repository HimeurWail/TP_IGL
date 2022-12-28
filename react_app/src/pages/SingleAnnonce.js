import { useParams } from "react-router-dom";

const SingleAnnonce = () => {
   const{id} = useParams() ; 

   const Annonce=
   [
    {   id:1 , 
        name:"name1" , 
    },
    {   id:2 , 
        name:"name2" , }
    ,
    {   id:3 , 
        name:"name3" , }
   ]
    return ( 
        <div className="pt-[5px]">
           { /**/}
                {id}
                hiiiiiiiii 
                {Annonce[id-1].name}
        </div>
     );
}
 
export default SingleAnnonce;