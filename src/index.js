const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const db = require("./config/index")
const routes = require("./routes/index")
db.connect();

//Body -parse
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);


routes(app);
app.use(cors());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})