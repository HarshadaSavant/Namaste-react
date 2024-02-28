import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../../util/cardSlice";

const Card = () => 
{
    const cardItems = useSelector((store)=>store.card.items);
    const dispatch = useDispatch();
   const handleClearCards =  ()=>
   {
    dispatch(clearItem());
   }
    return (
        <div className="m-5 p-5 text-center ">
          <h1 className="text-xl font-bold">Cards</h1>  
         <div className="w-6/12 text-right m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg " onClick={handleClearCards}>ClearCards</button></div>
          <div className="w-6/12 shadow-sm m-auto">
            {cardItems.length === 0  && (<h1>Card is empty add Item to the Card</h1>)}
               <ItemList items={cardItems} />
          </div>
            </div>
    )
}
export default Card;