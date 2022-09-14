require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const RouterRole = require("./src/router/role");
const RouterAuth = require("./src/router/auth");
const RouterCard = require("./src/router/card");
const RouterCategory = require("./src/router/Category");
const RouterOrder = require("./src/router/OrderDetail.route");
const RouterCountOrMonth = require("./src/router/reportCountOrderYear.route");
const RouterUnit = require("./src/router/unit");
const RouterOrigin = require("./src/router/origin");
const RouterImageProduct = require("./src/router/ImageProduct");
const RouterManufacturer = require("./src/router/manufacturer");
const RouterProduct = require("./src/router/Product");
const RouterNewsCategory = require("./src/router/newsCategory");
const RouterPayment = require("./src/router/payment");
const RouterUpload = require("./Middleware/upload");
const Routernews = require("./src/router/news.route");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/role", RouterRole);
app.use("/api/auth", RouterAuth);
app.use("/api/category", RouterCategory);
app.use("/api/unit", RouterUnit);
app.use("/api/origin", RouterOrigin);
app.use("/api/ImageProduct", RouterImageProduct);
app.use("/api/manufacturer", RouterManufacturer);
app.use("/api/product", RouterProduct);
app.use("/api/upload", RouterUpload);
app.use("/api/newsCategory", RouterNewsCategory);
app.use("/api/card", RouterCard);
app.use("/api/payment", RouterPayment);
app.use("/api/Order", RouterOrder);
app.use("/api/news", Routernews);
app.use("/api/countOrMonth", RouterCountOrMonth);

app.get("/api/image/:id", (req, res) => {
    res.sendFile(path.join(__dirname, `/public/upload/${req.params.id}`));
});
app.get("/api/image/procuct/:id", (req, res) => {
    res.sendFile(
        path.join(__dirname, `/public/upload/Product/${req.params.id}`)
    );
});
app.get("/api/image/news/:id", (req, res) => {
    res.sendFile(path.join(__dirname, `/public/upload/news/${req.params.id}`));
});

app.listen(process.env.PORT, () =>
    console.log("Máy chủ đã chạy tại công " + process.env.PORT)
);
