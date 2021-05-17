module.exports=((req,res)=>{
    let pastaItem=[{id:1,name:"FETTUCCINE PASTA",image:"../../../../assets/images/fettuccine.jpg",description:"Fettuccine is a type of pasta popular in Roman and Tuscan cuisine. It is a flat, thick pasta traditionally made of egg and flour, narrower than, but similar to, the tagliatelle typical of Bologna. Spinach fettuccine is made from spinach, flour, and eggs."
    ,price:450,ingredient1:"CHEESE",ingredient2:"SPINACH",ingredient3:"EGGS"},
    {id:2,name:"CAPELLINI PASTA",image:"../../../../assets/images/Capellini.jpg",description:"Capellini is a very thin variety of Italian pasta, with a diameter between 0.85 and 0.92 millimetres. Like spaghetti, it is rod-shaped, in the form of long strands. Capelli d'angelo is a thinner variant with a diameter between 0.78 and 0.88 millimetres. It is often sold in a nest-like shape."
    ,price:450,ingredient1:"CHEESE",ingredient2:"ANGEL HAIR PASTA",ingredient3:"PASTA SAUCE"},
    {id:3,name:"DITALINI PASTA",image:"../../../../assets/images/ditalini.jpg",description:"Ditalini is a type of pasta that is shaped like small tubes. It has been described as 'thimble-sized' and as very 'short macaroni'. In some areas it is also called 'salad macaroni'. During the industrial age in Apulia, Italy, increased development of ditali and other short-cut pastas occurred. "
    ,price:450,ingredient1:"MACARANI",ingredient2:"MEAT BALLS",ingredient3:"PARMESAN"},
    ]

    //let data="Fletcher Hey There"
    res.send(JSON.stringify(pastaItem));
})