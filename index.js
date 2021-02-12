const dotenv = require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 9000;

app.use("/api/*", (_, res) => {
    res.json({data: "The API Lives!!!"})
});

app.listen(port, () => {
    console.log(`Server is alive on port ${port}`)
});

// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USERNAME);
// console.log(process.env.PORT);