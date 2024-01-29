export type Todo = {
    userId: string,
    id: number,
    title: string,
    completed: boolean;
}

export type TodosParams = {
    completed?: boolean;
}