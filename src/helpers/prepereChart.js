import moment from 'moment'
export const prepereChart = (data) => {  

    const chart = data.map(function(e){
        return {
           "month": moment(e.date).toDate().getMonth(),
           "price_sale": e.price_sale,
        }
     });  
     
     const resumen = chart.reduce((p,c)=>{  
        p[c.month] = (p[c.month]  || 0)+c.price_sale;
        return p;
    },{})
      
    const precio = [];
    console.log(resumen);
    for(let i=0;i<12;i++){
        if(i in resumen){
            precio.push(resumen[i])
        }
        else{
            precio.push(0)
        }
    }
    console.log(precio);
    return {
        precio: precio
    }
    }
