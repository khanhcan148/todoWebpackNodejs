import { IToDoService } from "./abstraction/IToDoService";
import Todo from "../db/models/todo";
import { injectable } from "inversify";

@injectable()
export class ToDoService implements IToDoService {
  public async getAllToDo(): Promise<Todo[]> {
    return await Todo.findAll();
  }
}
