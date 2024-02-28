//import ResturantCard , { WithPromotedLabel } from "./ResturantCard";
import ResturantCard from "./ResturantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../util/useOnlineStatus";
import UserContext from "../../util/UserContext";

const Body = () => {
     
    const [listOfRest,setlistOfRest] = useState([]);
    const [filterlistOfRest,setfilterlistOfRest] = useState([]);

    const [Searchtext,setSearchtext] = useState("");
    const {loggedInUser,setuserName }= useContext(UserContext);

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async() => {
       const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json();
       setlistOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setfilterlistOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
        Looks like you're offline! Please check your internet connection
      </h1>
    );
    
    if (listOfRest.length === 0)
    {
        return <Shimmer />
    }
    
    return (
        <div>
            <div  className="flex flex-auto " >
                <div  className="m-4 px-4 ">
                  <input type="text" data-testid="SearchInput" className="border border-solid border-black" value={Searchtext}
                onChange={(e)=> {
                    setSearchtext(e.target.value);
                   // console.log("onclick render");

                }}></input>
                <button className="m-4 px-4 bg-blue-400 rounded-lg "  onClick={()=> {
                  const filterSearch = listOfRest.filter((restaurants)=> 
                  restaurants.info.name.toLowerCase().includes(Searchtext.toLowerCase()));
                  setfilterlistOfRest(filterSearch);
                }} 
                >Search</button>
                </div>
                <div className="m-4 px-4 " >
                <button  className="m-4 px-4 bg-gray-500 rounded-lg" 
                onClick={
                    () => {
                       const avgfilter = listOfRest.filter((res) => res.info.avgRating > 4
                        );
                        filterlistOfRest(avgfilter);
                }} >Top Rating Restaurant</button>
                
                 <label >User :</label>
                <input type="text" className="border border-solid border-black m-1 p-1" 
                value={loggedInUser} 
                onChange={(e) => setuserName(e.target.value)} ></input>
                </div>
            </div>
            <div data-testid ="resDataCard" className="grid grid-cols-5 gap-1 w-[250px] h-[200px] ">
              
                 { filterlistOfRest.map((restaurant) => (
                  
                    <Link  key={restaurant?.info.id} style={{
                    textDecoration: 'none',
                    color: '#000',
                  }} 
                   to={"/Restaurants/"+ restaurant?.info.id}>
                   
                   {/* {restaurant.info.veg ? (
                      <WithPromotedLabel resData={restaurant} />
                    ) : (
                      <ResturantCard resData={restaurant} />
                    )} */}
                    <ResturantCard resData={restaurant} />
                    </Link>  
                ))}
            </div>
        </div>
    )
 }

 export default Body;