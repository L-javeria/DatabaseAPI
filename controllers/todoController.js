const TodoRepo = require('../repository/todoRepository')

class todoControl {
    async getAll(request, response) {
        try{
            const todoRepo = new TodoRepo();
            let res = await todoRepo.getAllTasks();
            response.json({
                todo: res.rows
            });
        }catch(error){
            response.json({
                "Status": "Error Occurred"
            })
        }
    }

    async createTask(request, response){
        try{
            const todoRepo = new TodoRepo();
            let res = await todoRepo.createTaskRepo(request.body.id, request.body.task, request.body.done);

            response.json({
                "status": "Task xreated"
            })
        }catch(error){
            response.json({
                "Status": "Error Occurred"
            })
        }
    }

    async deleteTask(request, response){
        try {
            const todoRepo = new TodoRepo();
            let res = await todoRepo.deleteTaskRepo(request.body.id)

            response.json({
                "status": "Task Deleted"
            })
        }catch(error){
            response.json({
                "Status": "Error Occurred"
            })
        } 
    }

    async updateTask(request,response){
        try {
            const todoRepo = new TodoRepo();
            let res = await todoRepo.updateTaskRepo(request.body.task, request.body.done, request.body.id)
        
            response.json({
                "status": "Task Updated"
            })
        }
        catch(error){
            response.json({
                "Status": "Error Occurred"
            })
        }
    }
    
    async countTask(request, response){
        try{
            const todoRepo = new TodoRepo;
            let res = await todoRepo.countTaskRepo()
            response.json({
                todo: res.rows,
                "Status" : "Tasks Counted"
            });
        } catch(error){
            response.json({
                "Status": "Error Occurred"
            })
        }
    }

}

module.exports = todoControl;