import PropTypes from "prop-types";

function UserGreeting(props){
    // if (props.isLoggedIn){
    //     return (
    //         <p> Welcome {props.username}</p>
    //     )
    // }
    // else {
    //     return (
    //         <p>Please log in </p>
    //     )
    // }

    const welcomeMessage = <p className="welcome-message">Welcom {props.username}</p>
    const loginPrompt = <p className="login-message">please log in to continue</p>

    // ? ternery operator 
    return (
        props.isLoggedIn ? welcomeMessage : loginPrompt
    )
}

export default UserGreeting;

UserGreeting.propTypes = {
    isLoggedIn : PropTypes.bool,
    usename : PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn : false, 
    usename : "username"
}