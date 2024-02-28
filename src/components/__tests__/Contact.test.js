import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("",()=>
{
    it("should load contact us components",()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    
    it("should have button inside contact  components",()=>{
        render(<Contact/>);
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument();
    })
    describe ("",()=>
    {
        it("should have input box inside contact  components",()=>{
            render(<Contact/>);
            const name = screen.getByPlaceholderText("Name")
            expect(name).toBeInTheDocument();
        })
        it("should have all input box inside contact  components",()=>{
            render(<Contact/>);
            const input = screen.getAllByRole("textbox")
            expect(input.length).toBe(2);
        })
    })

})
