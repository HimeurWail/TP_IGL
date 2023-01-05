
import Header from "../Components/Header";
import Find from "../Components/Find" ; 
import Featured from "../Components/Featured";
import Trendings from "../Components/Trendings" ; 
import ContactUs from "../Components/ContactUs" ;
import Footer from "../Components/Footer"; 

const LandingPage = (props) => {
    /*<div className={`${(!props.auth) && 'hidden'}`}>
                <h1>username: {props.userName}</h1>
                <img alt="pic" src={props.userPic} />
                <h4>name: {props.name}</h4>
            </div>*/
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