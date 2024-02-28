const Contact =() => {
    return(
<div>
    <h1 className="m-4 p-4 font-bold text-lg" >Contact Us</h1>
    <form>
        <input className="m-2 p-2 border-black border " placeholder="Name" ></input>
        <input className="m-2 p-2 border-black border " placeholder="Message" ></input>
        <button className="m-2 p-2 rounded-lg bg-gray-400 border  border-black " >Submit</button>
    </form>
   
</div>
    )
}
export default Contact;