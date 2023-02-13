import { IToDoService } from "./abstraction/IToDoService";
import Todo from "../db/models/todo";
import { injectable } from "inversify";

@injectable()
export class ToDoService implements IToDoService {
  public async getToDoById(id: number): Promise<Todo | null> {
    return await Todo.findOne({
      where: { id: id },
    });
  }
  public async getAllToDo(): Promise<Todo[]> {
    return await Todo.findAll();
  }
}
