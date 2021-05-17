module.exports=((req,res)=>{
    let dessertItem=[{id:1,name:"TIRAMUSU",image:"../../../../assets/images/tiramusu.jpg",description:"Tiramisu is a coffee-flavoured Italian dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa. The recipe has been adapted into many varieties of cakes and other desserts."
    ,price:250,ingredient1:"SAVOIARDE",ingredient2:"COCOA",ingredient3:"COFFEE"},
    {id:2,name:"CUPCAKES",image:"../../../../assets/images/cupcakes.jpg",description:"A cupcake is a small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup. As with larger cakes, frosting and other cake decorations such as fruit and candy may be applied."
    ,price:150,ingredient1:"CINNAMON",ingredient2:"WHIP CREAM",ingredient3:"CHOCO CHIPS"},
    {id:3,name:"CHOCOLATE MOUSSE",image:"../../../../assets/images/chocolate-mousse.jpg",description:"Sweet mousses are typically made with whipped egg whites, whipped cream, or both, and flavored with one or more of chocolate, coffee, caramel, puréed fruits, or various herbs and spices, such as mint or vanilla."
    ,price:200,ingredient1:"CHOCOLATE",ingredient2:"VANILLA",ingredient3:""},
    ]

    //let data="Fletcher Hey There"
    res.send(JSON.stringify(dessertItem));
})