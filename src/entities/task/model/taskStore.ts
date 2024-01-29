import { makeAutoObservable, runInAction } from "mobx";
import { getAllTodos, getTodoById, updateTodo } from "shared/api/todos";
import { Todo } from "shared/api/todos/models";
import { statusApiRequest } from "shared/enums";

class TaskStore {
  taskList: Todo[] = [];
  task: Todo | null = null;
  listStatus = statusApiRequest.pending;
  taskStatus = statusApiRequest.pending;
  updateStatus = statusApiRequest.pending;

  constructor() {
    makeAutoObservable(this);
  }

  getTaskListFx = async (params: { completed?: boolean }) => {
    try {
      this.listStatus = statusApiRequest.loading;
      const data = await getAllTodos(params);

      runInAction(() => {
        this.listStatus = statusApiRequest.success;
        this.taskList = data;
      });
    } catch (err) {
      console.log(err, 'err')
      this.listStatus = statusApiRequest.error;
      alert("Something went wrong");
    }
  };

  getTaskFx = async (id: string) => {
    try {
      this.taskStatus = statusApiRequest.loading;
      const data = await getTodoById(id);

      runInAction(() => {
        this.taskStatus = statusApiRequest.success;
        this.task = data;
      });
    } catch {
      this.taskStatus = statusApiRequest.error;
      alert("Something went wrong");
    }
  };

  updateTodoFx = async (data: Todo, isTaskPage: boolean) => {
    try {
      this.updateStatus = statusApiRequest.loading;
    
      const res = await updateTodo(data);

      runInAction(() => {
        this.updateStatus = statusApiRequest.success;
        if (isTaskPage) {
          this.task = res;
        } else {
          this.taskList = this.taskList.map((task) => {
            if (task.id === res.id) {
              return res;
            }
            return task;
          });
        }
      })
    } catch (error) {
      this.taskStatus = statusApiRequest.error;
      alert("Something went wrong");
    }
  }
}

export default new TaskStore();
