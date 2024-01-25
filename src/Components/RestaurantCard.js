// import './App.css';


const RestaurantCard=(props)=>{
    // console.log(props);

// destructuring
    const{name,costForTwo,cuisines,avgRating,imageUrl,deliveryTime }=props?.resDatas?.info
    // const{resDatas}=props;

 return(
 <div className="res-card w-[240px] h-[350px] bg-slate-200 rounded-xl m-4 p-4 shadow-lg hover:bg-slate-300 ">
 <img className='image rounded-md h-32 w-48 m-auto p-0 ' src={imageUrl} alt=""/>
<h3 className="font-medium text-lg py-1">{name}</h3>
<h4>{cuisines.join(", ")}</h4>
<h5>{costForTwo}</h5>
<h5 className="font-medium">{deliveryTime} minutes</h5>
<h5 className="font-medium">{avgRating}⭐</h5>
        </div>
    )
};

//  export const withVegLabel=(RestaurantCard)=>{
//     return(props)=>{
//         console.log(props)
//         return(
//             <div>
//                 <label>Veg</label>
//                 <RestaurantCard {...props}/>
//             </div>
//         )
//     }
// }

export default RestaurantCard