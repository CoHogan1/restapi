import {FaSignInAlt, FaSigOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'



function Header() {

    return(
        <div className="header" >
            <div className="logo">
                <Link to='/'>Goal Setter</Link>
            </div>
            <ul>
                <li>
                <Link to='/login'>
                    <FaSignInAlt/> Login
                </Link>
                </li>

                <li>
                <Link to='/register'>
                    <FaUser/> register
                </Link>
                </li>

            </ul>
        </div>
    )
}

export default Header
