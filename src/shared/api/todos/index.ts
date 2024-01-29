import { apiInstance } from "../instance"
import { Todo, TodosParams } from "./models";

const BASE_URL = "todos";

export const getAllTodos = (params: TodosParams) => apiInstance.get(BASE_URL, { searchParams: params }).json<Todo[]>();

export const getTodoById = (id: string) => apiInstance.get(`${BASE_URL}/${id}`).json<Todo>();

export const updateTodo = (todo: Todo) => apiInstance.put(`${BASE_URL}/${todo.id}`, { json: todo }).json<Todo>();