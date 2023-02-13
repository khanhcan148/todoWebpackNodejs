import Todo from "../../db/models/todo";

export interface IToDoService {
  getAllToDo(): Promise<Todo[]>;
  getToDoById(id: number): Promise<Todo | null>;
}
