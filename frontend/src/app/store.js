
import { configureStore } from '@reduxjs/toolkit';
 import { combineReducers} from '@reduxjs/toolkit';
 import {thunk} from 'redux-thunk';
 
 import {
   userLoginReducer,
   userRegisterReducer,
   userDetailsReducer,
   userUpdateProfileReducer,
 } from '../reducers/userReducers';
 //import { OTPAuthApi } from '../services/otpauthapi';

 
 
 const userInfoFromStorage = localStorage.getItem('userInfo')
   ? JSON.parse(localStorage.getItem('userInfo'))
   : null;
 
 const reducer = combineReducers({
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   userDetails: userDetailsReducer,
   userUpdateProfile: userUpdateProfileReducer,
  // [OTPAuthApi.reducerPath]: OTPAuthApi.reducer,
 });
 
 const initialState = {
   userLogin: { userInfo: userInfoFromStorage },
 };
 

 const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
  //  }).concat(thunk, OTPAuthApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});



 
 export default store;








