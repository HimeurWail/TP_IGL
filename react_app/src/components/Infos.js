import profile_pic from "../images/pics/profile_pic.png";

const Info = () => {
    const user = {
        photo: { profile_pic },
        nom: "cherif",
        prenom: "norhane",
        email: "kn_cherif@esi.dz",
        phone: "0656028159",
        adresse: "Tenes,Chlef,Algeria",
      };
    return ( 
        <div className=" rounded-md w-[100%] h-[500px] shadow-md  ">
        <img
          className="w-[165px] h-[165px] rounded-full my-2.5"
          src={profile_pic}
          alt="user"
        />
        <div className="my-2.5 text-3xl font-semibold">
          <span>{user.nom}</span> <span>{user.prenom}</span>
        </div>
        <div>
          <div>
            <p className="font-semibold my-2.5 bg text-lightgris">email : </p>
            <p>{user.email}</p>
          </div>

          <div>
            <p className="font-semibold my-2.5 bg text-lightgris">phone : </p>
            <p>{user.phone}</p>
          </div>

          <div>
            <p className="font-semibold my-2.5 bg text-lightgris">adresse : </p>
            <p>{user.adresse}</p>
          </div>
        </div>
        </div>
     );
}

export default Info;