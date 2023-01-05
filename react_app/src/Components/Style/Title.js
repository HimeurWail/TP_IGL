import line from "../../images/pics/Line.png";

const Title = ( {first , second}) => {
    return ( 
        <div className=" flex flex-col justify-center items-center  ">
        <p className="text-[30px] font-bold"> {first}</p>
        <p className="text-[30px] font-bold"> {second} </p>
        <img className="w-48 pt-[1%]" src={line} />
        </div>
     );
}
 
export default Title;