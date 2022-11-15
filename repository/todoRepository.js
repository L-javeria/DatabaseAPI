const pool = require('../dbConn')

class TodoRepo {


    async getAllTasks(){
        return await pool.query('select * from public.todoist');
    }

    async createTaskRepo(id, task, done){
       return await pool.query('INSERT INTO public.todoist (id, task, done) VALUES($1, $2, $3)',
        [id, task, done]);
    }

    async deleteTaskRepo(id){
        return await pool.query('DELETE FROM public.todoist WHERE id = $1', [id]);
    }

    async updateTaskRepo(task, done, id){
        return await pool.query('UPDATE public.todoist SET task = $1, done = $2 WHERE id = $3',
        [task, done, id])
    }

    async countTaskRepo(){
        return await pool.query('SELECT COUNT(*) as Total, count(done) filter (where done=false) as pending, count(done) filter (where done=true) as done FROM public.todoist')

    }
}


module.exports = TodoRepo;