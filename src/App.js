
// import './App.css';
import "./Components/App.css"
import Body from './Components/Body';
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import { Routes,Route } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
// import Grocery from "./Components/Grocery";
import { Suspense, lazy } from "react";
import ShimmerUI from "./Components/ShimmerUI";
import { Provider } from "react-redux";
import reduxStore from "./Utility/reduxStore";
import Cart from "./Components/Cart"




const Grocery=lazy(()=>import("./Components/Grocery"))

function App() {
  return (
    <Provider store={reduxStore}>
    <> 
    
    <Routes>
      <Route path="/" element={<Body/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/grocery" element={ <Suspense fallback={<ShimmerUI/>}><Grocery/></Suspense>}/>
    
<Route path="/contact" element={<Contact/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/restaurant/:resId" element={<RestaurantMenu/>}/>
<Route path="*" element={<NotFound/>}/>

    </Routes>
    
    </>
    </Provider>
  );
}

export default App;
