const express = require("express");

const app = express();


app.use(require("./routes/brands.route.js"));
app.use(require("./routes/products.route.js"));


app.listen(4000, () => {
    console.log('Сервер успешно запущен');
});