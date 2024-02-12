const express = require('express');
const app = express();
const path = require('path')
const port = 3030;
const otherRoutes = require("./archivos-para-la-practica-mvc/routers/other.routes")
const aboutRoutes = require("./archivos-para-la-practica-mvc/routers/about.router")

app.use(express.static('../public'))

app.use("/", otherRoutes)
app.use("/about",aboutRoutes)

    app.listen(port,() => console.log(`http://localhost:${port}`))  