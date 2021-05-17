const express=require('express');
const app=express();
const port=3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const routes=require('./routes/index')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });
var data="fletcher"

app.use('/api',routes);

app.listen(port, () => console.log(`Pizzeria Backend started on port ${port}!`))

module.exports=app