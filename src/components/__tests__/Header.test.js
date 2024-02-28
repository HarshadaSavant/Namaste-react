import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../../util/appStore";
import { BrowserRouter } from "react-router-dom";


it("should load a header component with  login button",
()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    //const LoginBtn = screen.getByText("Login");
    //const LoginBtn = screen.getByRole("button");
    // if u want to find  specfic btn in th document then  also add paramenter like below
    const loginBtn = screen.getByRole("button",{name:"Login"});
    expect(loginBtn).toBeInTheDocument();
})
it("should load a header component with card Items with zero ",
()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
   
    const cardItems = screen.getByText("🛒 - 0 items");
    expect(cardItems).toBeInTheDocument();
})
//it("should load a header component with card  ",
//()=>{
  //  render(
 //       <BrowserRouter>
   //         <Provider store={appStore}>
 //               <Header />
//            </Provider>
 //       </BrowserRouter>
 //   );
   
 //   const _cards = screen.getByText(/card/);
 //   expect(_cards).toBeInTheDocument();

//});

// it("should click Login Button to LogOut Button ",
// ()=>{
//     render(
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <Header />
//             </Provider>
//         </BrowserRouter>
//     );

    
 
//     const loginBtn = screen.getByRole("button",{name:"Login"});
//     fireEvent.click(loginBtn);
//     const logOutBtn = screen.getByRole("button",{name:"LogOut"});
//     expect(logOutBtn).toBeInTheDocument();
// });
