import express from "express";
import controller from "../controllers/taskController.js";
const router = express.Router()

router.get("/", controller.getAll);

router.get("/new", controller.showNewForm);

router.post("/", controller.createNew);

router.route("/:id")
    .get(controller.getById)
    .delete(controller.deleteTaskById)


// router.param("id", (req, res, next, id) => {
//     req.task = tasks[id]
//     next()
// })

export default router