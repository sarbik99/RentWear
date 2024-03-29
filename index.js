const express = require('express');
const path = require('path');
const hbs = require('hbs');


const app = express();
const port = 3000;


const static_path = path.join(__dirname, "./public");
const template_path = path.join(__dirname, "./templates/views");
const partial_path = path.join(__dirname, "./templates/partials");


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);


app.get("/", (req, res) => {
    res.render("index")
});


app.listen(port, ()=>{
    console.log(`server is running at port ${port}`);
})