const taskRepository = [{ description: "Clean room"}, { description: "Cook dinner"}, { description: "Take dog out for a walk"}]

export function getTaskById(id){
    return taskRepository[id];
}

export function getAllTasks(){
    return taskRepository;
}

export function createNewTask(writtenDescription){
    taskRepository.push({description: writtenDescription})
}

export function deleteTask(id){
    taskRepository.splice(id, 1);
}

export default {
    getTaskById,
    getAllTasks,
    createNewTask,
    deleteTask
}