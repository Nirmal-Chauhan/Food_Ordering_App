import { useContext, useEffect, useState } from "react"
import UserContext from "../Utility/UserContext";
// import "../Components/App.css"
 function User(){
const{loggedInUser}=useContext(UserContext)

    let s1={
        width:"100px",
        border:"2px solid black",
        borderRadius:"10px"

    }
    const [info,setInfo]=useState([]);

    useEffect(()=>{
        fetchMenu()
    },[])

   const fetchMenu=async()=>{
        const response= await fetch(" https://api.github.com/users/Nirmal-Chauhan");
        const data= await response.json();
        console.log(data);
        setInfo(data)
    }
    return (
        <div className="user-cart  bg-slate-200 w-[320px] rounded-lg h-[280px] m-auto p-4 ">
            <div className="userClass   m-4">
            <h2 className="font-bold text-lg"> Name:{info?.name}</h2>
            <img  style={s1}src={info.avatar_url} alt=""/>
            </div>
            <h3 className="font-medium m-2">Contact :{info?.blog}</h3>
            <h3 className="font-medium m-2">Location :{info?.location}</h3>
            <h3> User:{loggedInUser}</h3>
        </div>
    )
}

export default User