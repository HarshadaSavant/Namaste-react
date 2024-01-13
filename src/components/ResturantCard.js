 import  CDN_URL  from "../../util/constant";
 import { LOGO_URL } from "../../util/constant";
 const ResturantCard = (props) => {
    const { resData } = props;

    const {
        name,
        cuisines,
        costForTwo,
        deliveryTime,
        avgRating
    }= resData?.data;
    return (
        <div className="rest-cont-body">
<img className="Rest-logo" src={CDN_URL}></img>
<h3>{name}</h3>
<h3>{cuisines.join(", ")}</h3>
<h3>₹{costForTwo/100} For Two</h3>
<h3>{deliveryTime} Mins.</h3>
<h3>{avgRating}Star</h3>

        </div>
    )
 }
 
 export default ResturantCard;