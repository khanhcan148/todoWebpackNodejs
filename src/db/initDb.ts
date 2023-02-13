import SubTask from "./models/subTask";
import Todo from "./models/todo";

import { initDb } from "../config/config";
("../config/config");

export async function initAndSeedDb() {
  await initDb();
  await seed();

  // test data
  Todo.findOne({
    where: { id: 1 },
    include: [SubTask],
  }).then((todo) => {
    console.log(todo);
    todo?.subTasks.forEach((sub) => console.log("SubTask", sub.label));
  });
}

async function seed() {
  const todo1 = await Todo.create({
    label: "First thing to do",
    isDone: false,
  });
  await SubTask.create({
    isDone: true,
    label: "Sub task 1,1",
    toDoId: 1,
  });
  await SubTask.create({
    isDone: false,
    label: "Sub task 1,2",
    toDoId: 1,
  });

  const todo2 = new Todo({
    label: "Second thing to do",
    isDone: false,
  });
  todo2.save();

  new SubTask({
    isDone: true,
    label: "Sub task 2,1",
    toDoId: 2,
  }).save();
  new SubTask({
    isDone: false,
    label: "Sub task 2,2",
    toDoId: 2,
  }).save();
}
