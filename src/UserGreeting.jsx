import PropTypes from 'prop-types';
import { bool } from 'prop-types';



//conditional rendring 
function UserGreeting(props){
    const welcomeMessage = <h2>Welcome {props.username}</h2>
    const loggedMesssge  = <h2>You need to log in first</h2>

    return (props.isLoggedIn ? welcomeMessage : loggedMesssge );

}


UserGreeting.proptypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : 'Guest'
}
export default UserGreeting;