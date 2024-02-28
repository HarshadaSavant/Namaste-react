import useRestaurantMenu from "../../util/useRestaurantMenu";
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu"; 
import { MENU_URL } from "../../util/constant";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu =() => {
    
        const { resId } = useParams();
        const resInfo = useRestaurantMenu(resId);
        const [showIndex, setshowIndex] = useState(0);
        const dummy ='dummy Data';

       

        if(resInfo === null) return <ShimmerMenu /> 
        
        const {name,cuisines,costForTwoMessage,avgRating,cloudinaryImageId,deliveryTime} = resInfo?.cards[0]?.card?.card?.info;
        const {slaString} = resInfo?.cards[0]?.card?.card?.info?.sla;

        const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

        const categories =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
             c.card?.["card"]?.["@type"] ===
             "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    
    return (
        <div className="text-center">
            <h1 className="font-extrabold my-6 text-2xl">{name}</h1>
            <p className="my-2 p-1 font-semibold text-lg" >
            {cuisines.join(', ')}
            {"🟢" +avgRating}
            {slaString}
            {deliveryTime}
            {costForTwoMessage}
           
            </p>
                {categories.map((category,index) => (
                   <RestaurantCategory key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={ index === showIndex ? true : false}
                    setshowIndex={() => setshowIndex(index)}
                    dummy = {dummy}
                    />
                ))}
            </div> 
    );
};

export default RestaurantMenu;

