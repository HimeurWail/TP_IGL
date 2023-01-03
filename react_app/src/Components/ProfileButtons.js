import plus from "../images/icons/Vector.png"
const ProfileButtons = () => {
    return ( 
        <div className="flex flex-col w-[100%] justify-center items-center">

        <button className="w-[200px] h-[40px] px-4 mt-9 border-solid border rounded-md">
          <div className="flex flex-row justify-center items-center " >
          <img className="w-[33px] h-[33px] mr-2" src={plus} alt="" /> 
          <p className="text-[20px]">Add</p>
          </div>

        </button>
        <button className="w-[200px] h-[40px] text-[20px] mt-9 border-solid border rounded-md">Log out</button>
      </div>
     );
}

export default ProfileButtons;