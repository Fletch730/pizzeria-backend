module.exports=((req,res)=>{
    let saladItem=[{id:1,name:"CAESAR SALAD",image:"../../../../assets/images/caesar.jpg",Description:"A Caesar salad is a green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper. In its original form, this salad was prepared and served tableside."
    ,price:300,ingredient1:"VEGETABLE",ingredient2:"CHICKEN",ingredient3:"MAYONAISSE"},
    {id:2,name:"COBB SALAD",image:"../../../../assets/images/cobbs.jpg",Description:"The Cobb salad is a main-dish American garden salad typically made with chopped salad greens, tomato, crisp bacon, grilled or roasted chicken breast, hard-boiled eggs, avocado, chives, Roquefort cheese, and red-wine vinaigrette."
    ,price:250,ingredient1:"BACON",ingredient2:"AVACADO",ingredient3:"RAQUEFORT CHEESE"},
    {id:3,name:"NACOISE SALAD",image:"../../../../assets/images/nacoise.jpg",Description:"Salade niçoise, la salada nissarda in the Niçard dialect of the Occitan language, is a salad that originated in the French city of Nice. It is traditionally made of tomatoes, hard-boiled eggs, Niçoise olives and anchovies or tuna, dressed with olive oil."
    ,price:450,ingredient1:"EGG",ingredient2:"TOMATO",ingredient3:"OLIVES"},
    ]

    //let data="Fletcher Hey There"
    res.send(JSON.stringify(saladItem));
})