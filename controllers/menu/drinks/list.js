module.exports=((req,res)=>{
    let drinksItem=[{id:1,name:"PINA COLADA",image:"../../../../assets/images/pina.jpg",description:"The piña colada is a sweet cocktail made with rum, cream of coconut or coconut milk, and pineapple juice, usually served either blended or shaken with ice. It may be garnished with either a pineapple wedge, maraschino cherry, or both. There are two versions of the drink, both originating in Puerto Rico."
    ,price:150,ingredient1:"PINEAPPLE",ingredient2:"COCONUT MILK",ingredient3:""},
    {id:2,name:"MOJITO",image:"../../../../assets/images/mojito.jpg",description:"Mojito is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar, lime juice, soda water, and mint. Its combination of sweetness, citrus, and herbaceous mint flavours is intended to complement the rum, and has made the mojito a popular summer drink."
    ,price:200,ingredient1:"MINT LEAVES",ingredient2:"RUM",ingredient3:"SODA WATER"},
    {id:3,name:"ICE TEA",image:"../../../../assets/images/icetea.jpg",description:"Iced tea is a form of cold tea. Though usually served in a glass with ice, it can refer to any tea that has been chilled or cooled. It may be sweetened with sugar, syrup and/or apple slices."
    ,price:100,ingredient1:"TEA",ingredient2:"ICE",ingredient3:""},
    ]

    //let data="Fletcher Hey There"
    res.send(JSON.stringify(drinksItem));
})