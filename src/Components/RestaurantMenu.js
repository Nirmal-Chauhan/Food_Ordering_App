
// import "../Components/App.css"
import { useEffect, useState } from "react"
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addItem } from "../Utility/cartSlice";
const RestaurantMenu=()=>{

   

const {resId}=useParams();
console.log(resId)// string



    const[resInfo,setResInfo]=useState([]);
    const[details,setDetails]=useState({});

    const[showItems,setShowItems]=useState(false)
    


useEffect(()=>{
fetchMenu()
},[]);

 async function fetchMenu(){
    
    const response=await fetch(`https://jsonifyyy.com/restros/${resId}`);
    const data=await response.json();
    // console.log(data.data);
    setResInfo(data?.data?.menu);
    setDetails(data?.data?.info);
    

    
}

// console.log(resInfo)

 
const dispatch=useDispatch()
// dispatch an action
function handleAddItem(item){
dispatch(addItem(item))
}

function handleClick(){
    // console.log("clicked")
    setShowItems(!showItems)
}

if(resInfo.length===0 ){
    return(<ShimmerUI/>)
}

    return(
        <div className="menu ">
            <Header/>
 <h1 className="font-bold text-3xl text-center my-4">{details?.name}</h1>
 
<p className="font-medium  text-xl text-center">{details?.cuisines?.join(",")} -- {details?.avgRating}⭐</p>

<div className="flex flex-wrap shadow-md " onClick={handleClick}>
<h2 className="text-4xl m-4 items-center cursor-pointer">Menu Details</h2>
<span className="text-2xl my-5 cursor-pointer">🔽</span>
</div>
{
     resInfo.length>0 && resInfo.map((item)=>{
        return(  showItems && <li  className="font-medium  w-[800px] bg-slate-200 rounded-md mx-auto list-none p-4 shadow-lg m-4" key={item._id}>{item.name} -Rs.{Math.floor(item.price/100)} 
        <br/><img className="menu-details w-[170px] rounded-md border solid to-black"  src={item.imageUrl} alt=""/>
        <br/> 
        <button className="bg-gray-500 p-1 rounded-md" onClick={()=>handleAddItem(item)}>ADD</button>
       <p className="font-light">{item.description}</p> 
        </li>)
    })
}

        </div>
    )
}

export default RestaurantMenu