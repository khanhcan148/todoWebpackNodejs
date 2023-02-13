import { IToDoService } from "./../services/abstraction/IToDoService";
import {
  BaseHttpController,
  controller,
  httpGet,
} from "inversify-express-utils";
import { TYPES } from "../types";
import { inject } from "inversify";
import { Get, Route } from "tsoa";

@controller("/Home")
@Route("/Home")
export class HomeController extends BaseHttpController {
  constructor(
    @inject(TYPES.TodoService) private readonly _todoService: IToDoService
  ) {
    super();
  }

  @httpGet("index")
  @Get("index")
  public async Index() {
    const data = await this._todoService.getAllToDo();
    return this.ok(data);
  }
}
