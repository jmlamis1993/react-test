import { types } from "../types/types";

const initialState = {
  categorys: [],
  products: [],
  branchs: [],
  sales: [],
  activeCategory: 0,
  activeProduct: 0,
  activeBrach:0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.productloading:
      return { ...state, products:payload };
    case types.categoryloading:
      return { ...state, categorys:payload };
    case types.branchloading:
      return { ...state, branchs:payload };
    case types.salesloading:   
    return { ...state, sales : payload } 
   
    
    default:
      return state;
  }
};
