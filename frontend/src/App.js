import React from 'react';
import {Routes, Route, Outlet } from 'react-router-dom';
import './App.css';


import Navba from './component/navbar/navba';
import Home from './component/pages/Home/Home';
import Newlaunch from './component/pages/new-launch';
import Ethenic from './component/pages/ethenic-wear';
import Western from './component/pages/western-wear';
import AhikaPlus from './component/pages/akhika-plus';
import Bestseller from './component/pages/best-seller';
import Lounge from './component/pages/lounge-wear';
import Footer from './component/footer/footer';
import CategoryData from './component/category/cardslider/cardslider';
import CategoryDetails3 from './component/category/category3/categorydetails3';
import Category3 from './component/category/category3/category3';
import Error from './component/pages/error';

import Popup from './component/popup/popup';
import LoginScreen from './sign-in/loginscreen';
import Login from './sign-in/login';
import RegisterScreen from './sign-in/Registerscreen';
import ProductPage from './component/Productlist/Productscreen';
import { RecentlyViewedProvider } from './constants/recentlyviewcontext';

const App=()=> {
  return (
    <>
      
      <Popup/>
      <RecentlyViewedProvider>
    
    <Routes>
 
        <Route path="/" element= {<Navba />}>

        <Route index element= {<Home />}/>
        <Route path="/new-launch" element={<Newlaunch />} />
        {/* <Route path="/ethenic-wear" element={<Ethenic />} />
        <Route path="/western-wear" element={<Western />} /> */}
  
         <Route path="/ahika-plus" element={<AhikaPlus />} />
        <Route path="/best-seller" element={<Bestseller />} />
        {/* <Route path="/lounge-wear" element={<Lounge />} /> */}
     

        <Route path="/product/ethenic/:category/:label?" component={ProductPage} />
       

        <Route path="/cardslider" element={<CategoryData />} />
        <Route path='/cardslider/:id' element={<CategoryDetails3 section="bestseller" />}/>


        <Route path="/category" element={<Category3 />} />
      <Route path="/category/:id" element={<CategoryDetails3  section="newarrival" />} />
    
        {/* <Route path="/category2/:category.id" element={<CategoryDetail />} />  */}
       {/* <Route path="/cart/:id?" component={CartScreen} />*/}
        <Route path="sign-in" element={<Login/>}/>
        <Route path="/login" element={<LoginScreen />} />
  <Route path="/register" element={<RegisterScreen />} />
  <Route path="/*" element={<Error />} />  

         </Route>
       
        
    </Routes>
    </RecentlyViewedProvider>
   
  
  <Footer/>
    
    
    
    </>
    
  );
}

export default App;
