// src/app/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

//app
import { patientReducer } from './App/redux/reducers/patientReducer';
import { loginReducer } from './App/redux/reducers/loginReducer';
import { ProfileReducer } from './App/redux/reducers/StaffProfileReducer';

//web
import { accountReducer } from './website/redux/reducers/accountReducer'; // Ensure this path is correct
import { adReducer } from './website/redux/reducers/adReducer';
import paymentReducer from './website/redux/reducers/PaymentReducer';
import { loginUserAccount } from './website/redux/reducers/loginReducer';


const rootReducer = combineReducers({
    login: loginReducer,
    patient: patientReducer,
    profile: ProfileReducer,
    account: accountReducer,
    advertisement: adReducer,
    payment:paymentReducer
    
  });
  
  
  // Create the Redux store
  const store = configureStore({
    reducer: rootReducer,
    // Middleware can be added if needed
  });
  
  export default store;
  