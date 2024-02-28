import { fireEvent, render,screen } from "@testing-library/react";
import Body from  "../Body";
import mocks from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter  } from "react-router-dom";

global.fetch = jest.fn(()=>
{
    return Promise.resolve({
        json: ()=>
        { 
            return Promise.resolve(mocks);
        }
    })
});


it("Should render the body components with Search Button",async()=>{


    await act( async()=> render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
    ));
    const cardBeforeSearch = screen.getAllByTestId("resDataCard");
    expect(cardBeforeSearch.length).toBe(1);

    const searchButton = screen.getByRole("button",{name:"Search"});
    const searchInput = screen.getByTestId("SearchInput");
    fireEvent.change(searchInput , { target: {value :"burger" } } );
    fireEvent.click(searchButton);
    const cards = screen.getAllByTestId("resDataCard");
    expect(cards.length).toBe(1);
});

it("Should filter top Rated resturant",async()=>{
    await act( async()=> render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
    ));
  //  const cardBeforeFilter = screen.getAllByTestId("resDataCard");
  //  expect(cardBeforeFilter.length).toBe(1);
 //   const topRatedRest = screen.getByRole("button", {name:"Top Rating Restaurant"});
 //   fireEvent.click(topRatedRest);
 //   const cardAfterFilter = screen.getAllByTestId("resDataCard");
 //   expect(cardAfterFilter).toBe(1);
});