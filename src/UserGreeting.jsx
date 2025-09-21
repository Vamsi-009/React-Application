import { jsx } from 'react/jsx-runtime'; 
import { jsxDEV } from 'react/jsx-dev-runtime';
import propTypes from 'prop-types';        

function UserGreeting(props){
    // if(props.isLoggedIn){    
    //     return <h2>Welcome to {props.username}</h2>  
    // }
    // else{
    //     return <h2>please login to continue</h2>
    // }


    // return(props.isLoggedIn ? <h2 className="wel-msg">Welcome {props.username} </h2> : 
    //                           <h2 className="log-msg">please login to countinue</h2> );




    const welcomeMsg = <h2 className="wel-msg">Welcome {props.username} </h2>
    const logMsg = <h2 className="log-msg">please login to countinue</h2>

    return(props.isLoggedIn ? welcomeMsg : logMsg);
}

UserGreeting.propTypes = {
    isLoggedIn : propTypes.bool,
    username :propTypes.string,
}

UserGreeting.defaultprops ={
    isLoggedIn: false,
    username: "Guest"
}
export default UserGreeting