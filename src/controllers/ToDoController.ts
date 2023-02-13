import { IToDoService } from "../services/abstraction/IToDoService";
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  requestBody,
  requestParam,
} from "inversify-express-utils";
import { TYPES } from "../types";
import { inject } from "inversify";
import { Get, Post, Route } from "tsoa";

interface ToDoViewModel {
  label: string;
}
@controller("/todo")
@Route("/todo")
export class ToDoController extends BaseHttpController {
  constructor(
    @inject(TYPES.TodoService) private readonly _todoService: IToDoService
  ) {
    super();
  }

  @httpGet("")
  @Get("")
  public async Index() {
    const data = await this._todoService.getAllToDo();
    return this.ok(data);
  }

  @httpGet("/:id")
  @Get("/:id")
  public async GetById(@requestParam("id") id: number) {
    const data = await this._todoService.getToDoById(id);
    return this.ok(data);
  }

  @httpPost("/:id/create")
  @Post("/:id/create")
  public Create(
    @requestParam("id") id: number,
    @requestBody() createBody: ToDoViewModel
  ) {
    let result = {
      body: createBody,
      id: id,
    };
    return this.ok(result);
  }
}
