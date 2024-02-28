import { render,screen  } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import mocks from "../mocks/resMockData.json";
import '@testing-library/jest-dom'

it("should render resturantCard data with props data",()=>{
   render(<ResturantCard resData={mocks} />);
    const name = screen.getByText("Andhra Gunpowder");
    expect(name).toBeInTheDocument();

});