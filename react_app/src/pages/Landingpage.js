
import Header from "../Components/Header";
import Find from "../Components/Find" ; 
import Featured from "../Components/Featured";
import Trendings from "../Components/Trendings" ; 
import ContactUs from "../Components/ContactUs" ;
import Footer from "../Components/Footer"; 

const LandingPage = (props) => {
  const auth = props.auth
  const userName = props.userName
  const userPic = props.userPic 
  const name = props.name
  
    return (

        <div > 
            <Header></Header>
            <Find></Find>
            <Featured></Featured>
            <Trendings></Trendings>
            <ContactUs></ContactUs>
            <Footer></Footer>
            
        </div>
      );
}
 
export default LandingPage;