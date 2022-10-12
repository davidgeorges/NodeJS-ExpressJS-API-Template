const express = require("express");
const app = express();
const user =  require("./routes/user")
const config = require("./config")

app.use(express.json());
app.use("/api/user",user.userRouter)

app.listen(config.port, () => {
    console.log(`App listening on port http://localhost:${config.port}`)
})