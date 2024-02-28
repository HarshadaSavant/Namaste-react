 import { gray } from "tailwindcss/colors";
import  { CDN_URL, MENU_URL}   from "../../util/constant";
import { useContext } from "react";
import UserContext  from "../../util/UserContext";



 const ResturantCard = (props) => {
    const { loggedInUser }  = useContext(UserContext);
    const { resData } = props;
       // console.log(resData);
    const {
        name,
        cuisines,
        costForTwo,
        sla,
        avgRating,
        cloudinaryImageId
    }= resData?.info;

    
    return (
        <div  className="m-4 p-4 w-[250px]  bg-gray-100 rounded-lg hover:bg-gray-200 transition-all  grid grid-cols-2 gap-1" >
            <div>
            <img className="object-contain w-24 rounded-lg" src={MENU_URL + cloudinaryImageId}    alt="Biryani" ></img>
            </div>
            <div>
                <h3 className="font-bold  py-1 text-lg">{name}</h3>
                <h5 className="text-left">{cuisines.join(", ")}</h5>
                <h5>{costForTwo}</h5>
                <h5>{sla?.slaString}</h5>
                <h5>{ "🟢" + avgRating}Star</h5>
                User:{loggedInUser}
                </div>
        </div>
    )
 }
 
//  export const WithPromotedLabel = (ResturantCard) =>
//  {
//     return (props) => {
//         return (
//             <div>
//                 <label>Veg</label>
//                 < ResturantCard {...props} />
//             </div>
//         );
//     };
//  };
 export default ResturantCard;