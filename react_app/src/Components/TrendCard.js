const TrendCard = ({trend}) => {
    return ( 
        <div className="w-[250px] h-[250px] border-gris shadow-gray-900 shadow-xl rounded-sm  ">
                 
                 <p>  this is trend nb : {trend.id}</p>
                 <p> {trend.title} </p>
              
        </div>
     );
}
 
export default TrendCard;