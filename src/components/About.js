import React,  { Component } from "react";
import Contact from "./Contact";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../../util/UserContext";

    class About extends React.Component
    {
        constructor(props)
        {
            super(props);
           // console.log('Parent constructor');
        }
        componentDidMount()
        {
            //console.log("Parent componentDidMount");
        }
        
        
        render() {
          //  console.log('Parent render');
            return(
                <div> 
                    <h1>this is about us Class </h1>
                    <h1> About Us </h1>
                    <div>
                        <UserContext.Consumer> 
                            {({loggedInUser}) => <h1>{loggedInUser}</h1>} 
                        </UserContext.Consumer>
                    </div>
                    <UserClass Name={"Harshada Savant (Class)"} Contact={"harshusavant0311@gmail.com"}/>
                  
                 </div>
            )
        }
    }
export default About;