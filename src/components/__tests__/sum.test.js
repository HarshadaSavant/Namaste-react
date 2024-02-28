import { sum } from "../sum";
import "@testing-library/jest-dom"


test ("sum of two number",()=>{
    const result = sum(3,4);
    expect(result).toBe(7);
}) 

