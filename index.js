const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors")

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.use("https://api.magicthegathering.io/v1/cards/?colors=blue&cmc=4&pageSize=10 ", (_, res) => {
    res.json(res.data)
});

app.listen(port, () => {
    console.log(`Server is alive on port ${port}`)
});

// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USERNAME);
// console.log(process.env.PORT);