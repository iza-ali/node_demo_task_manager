import express from "express";
const router = express.Router()

const tasks = [{ description: "Clean room"}, { description: "Cook dinner"}, { description: "Take dog out for a walk"}]

router.get("/", (req, res) => {
    res.json(tasks)
})

router.get("/new", (req, res) => {
    res.render("tasks/new", {description: "Mow the lawn"})
})

router.post("/", (req, res) => {
    tasks.push({description: req.body.description})
    res.redirect(`/tasks/${tasks.length - 1}`)
})

router.route("/:id")
    .get((req, res) =>{
        console.log(req.task)
        res.json(tasks[req.params.id])
    })
    .delete((req, res) => {
        tasks.splice(req.params.id, 1)
        res.redirect("/tasks")
    })


router.param("id", (req, res, next, id) => {
    req.task = tasks[id]
    next()
})

export default router