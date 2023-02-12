import Todo from "../../db/models/todo";

export interface IToDoService {
  getAllToDo(): Promise<Todo[]>;
}
