import { combineReducers, configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctorsSlice';
import { usersSlice } from './users';

const reducer = combineReducers({
  users: usersSlice.reducer,
  doctors: doctorsSlice.reducer,
});

const store = configureStore({ reducer });

export default store;
