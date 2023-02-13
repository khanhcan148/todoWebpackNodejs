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
  public GetById(@requestParam("id") id: number) {
    return this.ok({ data: "Hello " + id });
  }

  // @httpPost("/:id/create")
  // @Post("/:id/create")
  // public Create(@requestParam("id") id: number, @requestBody() body: string) {
  //   return this.ok(body);
  // }
}
