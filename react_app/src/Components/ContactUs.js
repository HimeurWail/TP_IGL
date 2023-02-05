import { useState } from "react";
import illustration from "../images/pics/illustration.png"
import Title from "./Style/Title";

const ContactUs = () => {
    const[name , setName] = useState('') ; 
    const[email , setEmail] = useState('') ; 
    const[message, setMessage] = useState('') ; 


    const[isPending , setIsPending]= useState(false)  ; 
 
        const handleSubmit =(e) =>
        {
            e.preventDefault() ; 
            const user = { name,email,message} ; 
            setIsPending(true) ; 

            fetch('http://localhost:8000/users' , 
            {
                method: 'POST' , 
                headers: {"Content-Type" : "application/json"} , 
                body: JSON.stringify(user)
            } 
            ) 
            .then((data)=>
            { 
                console.log('new user added') ;
                setIsPending(false) ; 
                const token = data.token
                localStorage.setItem("token",token)
            

            })}


    return ( 
    <div id="ContactUs" className="pt-[5%] h-screen w-full lg:mt-[-100px] mt-[630px]">
        <Title className="m-[30px]" first={"Get in touch"}></Title>

        <div className="createform p-[30px] flex flex-col lg:flex-row justify-center items-center items-start gap-[10%]">
      
        <div>
           <img  className="w-[300px] lg:w-[400px]" src={illustration} alt="" />
        </div>
      
        <form onSubmit={handleSubmit}>
    
        <label> Full Name : </label>
            <input 
            type="text"
            required 
            value={name}
            className= " shadow-md "
            onChange ={(e)=> setName(e.target.value)}  
            />


    <label > Email : </label>
        <input 
        type="text"
        required 
        value={email}
        className= " shadow-md "
        onChange ={(e)=> setEmail(e.target.value)}  
        />

    <label > Message : </label>
        <input 
        type="textarea"
        required 
        value={message}
        className= " shadow-md h-[100px] "
        onChange ={(e)=> setMessage(e.target.value)}  
        />


       {!isPending ? 
       <div className="bg-white relative ">
 <button className="btn1 cursor-pointer bg-ahmar text-white  mt-[10px] p-[8px] border-0 rounded-[8px]"> send your message  </button>
        
       </div>
       
        :<button disabled> loading  ... </button>}

        </form>
        </div>
        
           
    
    </div> );
}
 
export default ContactUs;