import ResturantCard from "./ResturantCard";
import resList from "../../util/mockdata";
import { useState } from "react";

const Body =() => {
     
    const [listOfRest,setlistOfRest] = useState(resList);

  
    return (
        <div className="Body">
            <div>
                <button  className="filter-rest" 
                onClick={
                    () => {
                       const avgfilter = listOfRest.filter((res) => res.data.avgRating > 4
                        );
                        setlistOfRest(avgfilter);
                }} >Top Rating Restaurant</button>
            </div>
            <div className="resturant-container">
                 { listOfRest.map((restaurant) => (
                  <ResturantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
 }

 export default Body;