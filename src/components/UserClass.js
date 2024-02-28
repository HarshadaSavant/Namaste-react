 import React, { Component }  from "react";
import { render } from "react-dom";
 
class UserClass extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            userInfo : {
                login :'Dummy name',
                location: "Dummy Location",
            },
        }
       // console.log('Child constructor');
    }
    async componentDidMount()
    {
       // console.log('componentDidMount');
       
            const data = await fetch('https://api.github.com/users/HarshadaSavant');
            const json = await data.json();
                this.setState({
                    userInfo: json,
                  });
              
                //  console.log(json);
    }
    componentDidUpdate()
    {
        //console.log('componentDidUpdate...');
    }
    componentWillUnmount()
    {
        //console.log('componentWillUnmount....');
    }
    render()
    {
        const {Name,Contact} =this.props;
const {login,avatar_url} =this.state.userInfo
   // console.log('Child Render');

        return(
            <div className="User">
                <h2>Name:{login}</h2>
                <h3>Location:{avatar_url}</h3>
            </div>
            
            )
    }
}
export default UserClass;