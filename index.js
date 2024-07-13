const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors())
app.use(express.static("build"))


require('dotenv').config();


const connect = require("./config/database");
connect();


const route = require('./routes/routes');
app.use("/v1",route);

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'build','index.html'));
});


app.listen(process.env.PORT, (req,res) => {
    console.log(`app is running on ${process.env.PORT}`);
})

