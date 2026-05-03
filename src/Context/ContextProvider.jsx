'use client'
import { createContext } from "react";
 

export const NameContext = createContext()

const ContextProvider = ({children}) => {
    

    return (
        <NameContext.Provider>
            {children}
        </NameContext.Provider>
         
    );
};

export default ContextProvider;