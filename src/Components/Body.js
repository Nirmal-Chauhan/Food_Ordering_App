// import './App.css';
import Header from "../Components/Header"
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from 'react';
import ShimmerUI from './ShimmerUI';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utility/useOnlineStatus';
// import {withVegLabel}  from "./RestaurantCard"

const Body=()=>{
    // const vegPromotedRestaurant=withVegLabel(RestaurantCard)
    let [listRestaurants,setListRestaurants]=useState([]);
    let [filteredRes,setFilteredRes]=useState([])
    let [searchText,setSearchText]=useState("")
    useEffect(()=>{
        fetchData()
    },[]);
    const fetchData=async()=>{
const response=await fetch("https://jsonifyyy.com/restros");
const data= await response.json();
console.log(data);
console.log(data.data);


setListRestaurants(data?.data)
setFilteredRes(data?.data)


    }

   

    
 const onlineStatus=useOnlineStatus();
 if(onlineStatus===false) return (<h1>Looks like You're offline!! Please Check your internet connection</h1> )    

if(listRestaurants.length===0){
    return <ShimmerUI/>
}

    return(
<>
<Header/>
<div className="body">
<div className='filtered flex justify-between items-center'>
    <div className="search p-4 m-4  ">
        <input className='input border border-solid border-black rounded-md' type="text" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
        }}/>
<button className='search-btn px-4 py-1 mx-2 bg-slate-300 rounded-md  hover:bg-green-400' onClick={()=>{
            
            
 let searchedRestaurant=listRestaurants.filter((res)=>

 res.info.name.toLowerCase().includes(searchText.toLowerCase())
 );
//  console.log(searchedRestaurant)
 
 setFilteredRes(searchedRestaurant)
 }}>Search</button>
    </div>

    <div  className="px-4 mx-2 py-[6px] bg-slate-300 rounded-md  hover:bg-green-400">
<button className='rated-btn ' onClick={()=>{
 let filteredRestaurants=  listRestaurants.filter((res)=>{
        return  res?.info?.avgRating>=4.2;
    }
    )
    // console.log(listRestaurants)
    setFilteredRes(filteredRestaurants)
}}>Top Rated Restaurant</button>
</div>
</div>
<div className="res-container flex  flex-wrap ml-16">
    {
        filteredRes.map((resData,index)=>{
            return(
            <Link to={`/restaurant/${resData._id}`} key={resData._id}>{  <RestaurantCard   resDatas={resData}/>
            }
                </Link>)
        })
    }
    
    {/* <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/> */}
</div>
</div>

</>
    )
}

export default Body