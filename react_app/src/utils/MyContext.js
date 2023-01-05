import { createContext, useState } from "react";
const Mycontext = createContext() ; 

export const MyProvider = ({children}) => {
   const [username , setUsername] = useState(" ouael sahbi ")
   
    return ( 
     
        <Mycontext.Provider value={{username,setUsername}}>
                {children}
        </Mycontext.Provider>
        
     );
}
 
export default MyProvider;