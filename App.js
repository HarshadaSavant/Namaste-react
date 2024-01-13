import React  from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import Footer from "./src/components/Footer.js";
import { render } from "react-dom/client";
window.React = React
  

const Applayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);



