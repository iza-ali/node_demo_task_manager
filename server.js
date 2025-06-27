import express from "express";
const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(express.json())

import taskRouter from "./routes/taskRouter.js"

app.use("/tasks", taskRouter)

app.listen(3000);