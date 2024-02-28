import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = (props) =>
{
   // const [showitems,setshowitems]= useState(false);
   const{ data, showItems, setshowIndex, dummy } = props;
    const handleClick =() => 
    {
        setshowIndex();
    };

    return(
        <div className="shadow-lg   w-6/12 p-4 mx-auto my-4  bg-gray-50">
            <div className="justify-between flex cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {showItems && <ItemList items={data.itemCards} dummy={dummy} /> }
        </div>
    )
}

export default RestaurantCategory;