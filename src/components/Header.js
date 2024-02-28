import { useContext, useState } from "react";
import { LOGO_URL } from "../../util/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../util/useOnlineStatus";
import UserContext from "../../util/UserContext";
import { useSelector } from "react-redux";
import cardSlice from "../../util/cardSlice";


const Header  = () => {
  const [btnNameReact,setbtnNameReact] = useState(["Login"]);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser }  = useContext(UserContext);
  const cardItems = useSelector((store)=>store.card.items);

 // console.log(loggedInUser);

    return (
      <div className="flex justify-betwwen  px-4 shadow-lg bg-pink-200    ">
        <img  className="w-24 h-24" src={LOGO_URL}></img>
        <div className="flex items-center p">
            <ul className="flex p-4 m-4  ">
              <li className="px-4">Online Status: { onlineStatus  ? '🟢' : '🔴'}</li>
              <li className="px-4"><Link to="/">Home</Link> </li>
              <li className="px-4"><Link to="/about" >About Us</Link></li>
              <li className="px-4"><Link to="/contact">Contact</Link></li>
              <li className="px-4"><Link to="/grocery">Grocery</Link></li>
              <li className="px-4 font-bold text-lg"><Link to="/card">🛒 - {cardItems.length} items</Link></li>
              <button className="px-4 " onClick={() => {
                btnNameReact ==="Login"
                ? setbtnNameReact("LogOut")
                : setbtnNameReact("Login");
              }}
              >{btnNameReact}</button> 
              <li className="px-4 text-sm font-bold" >{loggedInUser}</li>
            </ul>
        </div>
      </div>
      )
    }

    export default Header;