module.exports=((req,res)=>{
    let pizzaItem=[{id:1,name:"MAGHERITA PIZZA",image:"../../../../assets/images/Speciality1.jpg",description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
    ,price:450,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"BASIL"},
    {id:2,name:"BARBEQUE PIZZA",image:"../../../../assets/images/Speciality1.jpg",description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
    ,price:450,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"BARBEQUE CHUNKS"},
    {id:3,name:"PEPPERONI PIZZA",image:"../../../../assets/images/Speciality1.jpg",description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
    ,price:450,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"PEPPERONI"},
    {id:4,name:"CHICKEN OVERLOADED PIZZA",image:"../../../../assets/images/Speciality1.jpg",description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
    ,price:550,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"DIFFERENT CHICKEN FLAVOURS"},
    {id:5,name:"PANEER PIZZA",image:"../../../../assets/images/Speciality2.jpg",description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
    ,price:350,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"PANEER"},
    {id:6,name:"MUSHROOM PIZZA",image:"../../../../assets/images/Speciality3.jpg",description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
    ,price:350,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"MUSHROOM"},
    {id:7,name:"VEG_OVERLOADED PIZZA",image:"../../../../assets/images/Speciality2.jpg",description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
    ,price:350,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"VEGETABLE"}]

    //let data="Fletcher Hey There"
    res.send(JSON.stringify(pizzaItem));
})