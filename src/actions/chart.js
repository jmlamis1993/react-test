import { types } from "../types/types";
import {chartServices} from "../services/chartServices";
import { prepereChart } from "../helpers/prepereChart";

export const categoryStartLoading = () => {
    return async (dispatch) => {
      try {
        const response = await chartServices.ListCategorys();
        if (response.status === 200) { 
          dispatch(categoryLoaded(response.data));
        }
      } catch (error) {
       console.log('Error Api')  
      }
    };
  };
  const categoryLoaded = (data) => ({
    type: types.categoryloading,
    payload: data,
  });
 
  export const productStartLoading = (id) => {
    return async (dispatch) => {
      try {
        const response = await chartServices.ListProducts(id);
        if (response.status === 200) {  
          dispatch(productLoaded(response.data));
        }
      } catch (error) {
       console.log('Error Api')  
      }
    };
  };
  const productLoaded = (data) => ({
    type: types.productloading,
    payload: data,
  });

  export const branchStartLoading = (id) => {
    return async (dispatch) => {
      try {
        const response = await chartServices.ListBranchs(id);
        if (response.status === 200) {          
          dispatch(branchLoaded(response.data));
        }
      } catch (error) {
       console.log('Error Api')  
      }
    };
  };
  const branchLoaded = (data) => ({
    type: types.branchloading,
    payload: data,
  });
  export const salesStartLoading = (idCat=0,idProd=0,idBranch=0) => {
    return async (dispatch) => {
      try {
        const response = await chartServices.ListSales(idCat, idProd, idBranch);
        console.log(response);
        if (response.status === 200) {   
          const data = prepereChart(response.data)       
          dispatch(salesLoaded(data));

        }
      } catch (error) {
       console.log('Error Api')  
      }
    };
  };
  const salesLoaded = (data) => ({
    type: types.salesloading,
    payload: data,
  });

