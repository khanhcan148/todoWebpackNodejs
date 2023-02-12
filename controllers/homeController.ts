import { IToDoService } from "./../services/abstraction/IToDoService";
import * as express from "express";
import {
  BaseHttpController,
  controller,
  httpGet,
  interfaces,
  next,
  request,
  response,
} from "inversify-express-utils";
import { TYPES } from "../types";
import { inject } from "inversify";

@controller("")
export class HomeController
  extends BaseHttpController
  implements interfaces.Controller
{
  constructor(
    @inject(TYPES.TodoService) private readonly _todoService: IToDoService
  ) {
    super();
  }

  @httpGet("/")
  public async Index(
    @request() req: express.Request,
    @response() res: express.Response,
    @next() next: express.NextFunction
  ) {
    const data = await this._todoService.getAllToDo();
    return this.ok(data);
  }
}
