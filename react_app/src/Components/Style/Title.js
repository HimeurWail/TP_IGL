import line from "../../images/pics/Line.png";

const Title = ( {first , second}) => {
    return ( 
        <div className=" flex flex-col justify-center items-center  ">
        <p className="lg:text-[30px] text-[20px] font-bold"> {first}</p>
        <p className="lg:text-[30px] text-[20px] font-bold"> {second} </p>
        <img className="lg:w-48 w-40 pt-[1%]" src={line} />
        </div>
     );
}
 
export default Title;