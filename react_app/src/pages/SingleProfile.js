import Info from "../Components/Infos";
import ListAnnonces from "../Components/ListAnnonces";
import ProfileButtons from "../Components/ProfileButtons";
import ProfileSwitchButtons from "../Components/ProfileSwitchButtons";

const SingleProfile = () => {
return (
    <div className=" flex flex-col lg:flex-row ">

      <div className="lg:w-[30%] mx-9 mt-16"  align="center">
      <Info></Info>
      <ProfileButtons></ProfileButtons>
      </div>

      <div className="lg:w-[64%] ">
        <ProfileSwitchButtons></ProfileSwitchButtons>
        <ListAnnonces></ListAnnonces>
      </div>
    </div>
  );
};

export default SingleProfile;