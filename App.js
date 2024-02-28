import React, { lazy ,Suspense, useEffect, useState}  from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import Footer from "./src/components/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About.js";
import Contact from "./src/components/Contact.js";
import Error from "./src/components/Error.js";
import RestaurantMenu from "./src/components/RestaurantMenu.js";
import { render } from "react-dom/client";
import UserContext from "./util/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./util/appStore.js";
import Card from "./src/components/Card.js";
window.React = React
  
const Grocery = lazy(() => import("./src/components/Grocery.js"));

const Applayout = () => {
    const [userName ,setuserName] =useState(0);
   
useEffect(() => {
 const data = {
    name : "Harshada Savant",
 }
 setuserName(data.name);
},[]);
    
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName ,setuserName }}>
        <div className="app">
            <Header/>
            <Outlet />
            {/* <Footer /> */}
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const app_router = createBrowserRouter([
    {
     path:"/",
      element:<Applayout/>,
      children : [
        {
            path:'/',
            element:<Body/>,
        },
        {
            path:'/about',
            element:<About/>,
        },
        {
            path:'/contact',
            element:<Contact />,
        },
        {
            path:'/grocery',
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
        },
        {
            path:'/Restaurants/:resId',
            element:<RestaurantMenu></RestaurantMenu>,
        },
        {
            path:'/card',
            element:<Card></Card>,
        },
      ],
      errorElement:<Error />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={app_router} future={{ v7_startTransition: true }}  />);



