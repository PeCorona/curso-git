var invoices=[
    {year:1999,number:1,total:1000},
    {year:2000,number:1,total:100},
    {year:2000,number:1,total:999},
]

invoices.reduce((acumulador,valorActual)=>{
    let year = valorActual.year
    let total = valorActual.total;
    if(acumulador.hasOwnProperty(year)){
        acumulador[year]=acumulador[year]+total;
    }
    else{
        acumulador[year]=total;
    }
    return acumulador;
},{})

