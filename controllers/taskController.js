import service from "../services/taskService.js"

export async function getById(req, res, next){    
    try{
        const task = await service.getTaskById(req.params.id);
        res.status(200).json(task);
    } catch (err) {
        next(err);
    }
}

export async function getAll(req, res, next){    
    try{
        const tasks = await service.getAllTasks();
        res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
}

export function showNewForm(req, res){
    res.render("tasks/new")
}

export function createNew(req, res, next){
    try {
        service.createNewTask(req.body.description);
        res.status(201).redirect("/tasks");
    } catch (err){
        next(err);
    }
}

export function deleteTaskById(req, res, next){
    try{
        service.deleteTask(req.params.id);
        res.status(204).redirect("/tasks");
    } catch (err) {
        next(err);
    }
}

export default {
    getById,
    getAll,
    showNewForm,
    createNew,
    deleteTaskById
}