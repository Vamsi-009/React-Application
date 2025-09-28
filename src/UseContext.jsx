/*useContext() = React hook that  allow you to share values
                 between multiple levels of components without
                 passing props through each level

Provider Component: 
1. import {createContext} from 'react';
2. export const MyContext = createContext();
3. <MyContext.provider value = {value}>
     <child />
   </MyContext.provider>


Consumer Component
1. import React, { useContext } from 'react';
   import { MyContext } from './componrnt';
2. const value = useContext(MyContext);
*/

import React, { useState, createContext ,useEffect} from "react";

export const UserContex = createContext();

function UseContext(){
    const [user, setUser ] = useState("BroFc");

    return(<div>
        <h1>{user}</h1>
    </div>)
}
export default UseContext;