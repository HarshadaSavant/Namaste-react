import { LOGO_URL } from "../../util/constant";

const Header  = () => {
    return (
      <div className="Header">
        <div className="Logo-container">
        <img className="logo"  src={LOGO_URL}></img>
        </div>
        <div className="Nav-details">
            <ul>
            <li>Home </li>
            <li>About Us </li>
            <li>Sign In </li>
            <li>Card </li>
         </ul>
        </div>
      </div>
      )
    }

    export default Header;