 import {types} from '../types/types';

 const initialState = {}
 
 export default (state = initialState, { type, payload }) => {
   switch (type) {
 
   case types.productloading:
     return { ...state, ...payload }
 
   default:
     return state
   }
 }
 