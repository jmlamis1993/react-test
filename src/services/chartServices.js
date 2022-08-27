import axios from 'axios';
export const chartServices = {
    ListBranchs,
    ListProducts,
    ListCategorys,
    ListSales
};


async function ListBranchs(id) { 
  return axios.get(`http://127.0.0.1:5000/api/model/${id}`);
  }
  async function ListProducts(id) { 
    return axios.get(`http://127.0.0.1:5000/api/product/${id}`);
   }
   async function ListCategorys() { 
       return axios.get('http://127.0.0.1:5000/api/category');
   }
   async function ListSales( idCategory, idProduct, idBranch) { 
    return axios.get(`http://127.0.0.1:5000/api/sales?categoryId=${idCategory}&productId=${idProduct}&modelId=${idBranch}`);
   }