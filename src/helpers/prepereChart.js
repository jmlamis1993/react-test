import moment from 'moment'
export const prepereChart = (data) => {  

    const chart = data.map(function(e){
        return {
           "month": moment(e.date).toDate().toLocaleString("en-US", { month: "long" }),
           "price_sale": e.price_sale,
        }
     });   

     const resumen = chart.reduce((p,c)=>{  
        p[c.month] = (p[c.month]  || 0)+c.price_sale;
        return p;
    },{})
    return resumen;
    }
