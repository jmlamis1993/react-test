import { React, useState, useEffect } from "react";

import { Grid , Typography} from "@mui/material/";
import Select from "react-select";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { branchStartLoading, categoryStartLoading, productStartLoading , salesStartLoading} from "../actions/chart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["January", "February", "March", "April","May","June","July","Augost","September","Octuber","November","December"];


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Sales by Month for",
      font: {
        size: 24
    }
    },
  },
};

export const Home = () => {
  const [category, setCategory] = useState(0);
  const [product, setProduct] = useState(0);
  const [branch, setBranch] = useState(0);
  const dispatch = useDispatch();
  const { categorys,products,branchs,sales } = useSelector((state) => state.chart);
  useEffect(() => {
    dispatch(categoryStartLoading());
    dispatch(salesStartLoading())

  }, []);
  const listCat = categorys.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  const listProduct = products.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  const listbranchs = branchs.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const data = {
    labels,
    datasets: [
      {
        label: "Ventas",
        data: sales.precio,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const handleChangeCategory = (e) => {
    setProduct(0);
    setBranch(0);
    setCategory(e);
    dispatch(productStartLoading(e.value));
    dispatch(salesStartLoading(e.value))
  };
  const handleChangeProducts = (e) => {
    setBranch(0);
    setProduct(e);
    dispatch(branchStartLoading(e.value));
    dispatch(salesStartLoading(category.value, e.value))
  };
  const handleChangeBranch = (e) => {
   
    setBranch(e);
    dispatch(salesStartLoading(category.value, product.value, e.value))
   
  };
  return (
    <>
      <Grid container sx={{ padding: "20px", paddingBottom:'50px'}}>
        <Grid item xs={4} sx={{ paddingRight: "8%", paddingLeft: "4%", display:'flex' }}>
        <Typography sx={{fontSize:'20px', padding:'5px'}}>Category: </Typography>
          <Select
            className="select-prop"
            inputId="category"
            TextFieldProps={{
              label: "category",
              InputLabelProps: {
                htmlFor: "category",
                shrink: true,
              },
              placeholder: "Select Category...",
            }}
            options={listCat}
            value={category}
            onChange={handleChangeCategory}
          />
        </Grid>
        <Grid item xs={4} sx={{ paddingRight: "8%", paddingLeft: "4%", display:'flex' }}>
        <Typography sx={{fontSize:'20px', padding:'5px'}}>Product: </Typography>
          <Select
          className="select-prop"
            inputId="product"
            TextFieldProps={{
              label: "products",
              InputLabelProps: {
                htmlFor: "products",
                shrink: true,
              },
              placeholder: "Select Products...",
            }}
            options={listProduct}
            value={product}
            onChange={handleChangeProducts}
          />
        </Grid>
        <Grid item xs={4} sx={{ paddingRight: "8%", paddingLeft: "4%", display:'flex'  }}>
        <Typography sx={{fontSize:'20px', padding:'5px'}}>Marca: </Typography>
          <Select
          className="select-prop"
            inputId="branch"
            TextFieldProps={{
              label: "branch",
              InputLabelProps: {
                htmlFor: "branch",
                shrink: true,
              },
              placeholder: "Select Marca...",
            }}
            options={listbranchs}
            value={branch}
            onChange={handleChangeBranch}
          />
        </Grid>
      </Grid>
      <Grid container sx={{height:'100px !important'}} >
        <Bar options={options} data={data} />
      </Grid>
    </>
  );
};
