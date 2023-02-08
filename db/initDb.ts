import SubTask from "./models/subTask";
import Todo from "./models/todo";

export async function initAndSeedDb() {
  await Todo.sync({ force: true });
  await SubTask.sync({ force: true });
  const todo1 = await Todo.create({
    label: "First thing to do",
    isDone: false,
  });
  await todo1.createSubTask({
    isDone: true,
    label: "Sub task 1,1",
  });
  await todo1.createSubTask({
    isDone: false,
    label: "Sub task 1,2",
  });

  const todo2 = await Todo.create({
    label: "Second thing to do",
    isDone: false,
  });
  await todo2.createSubTask({
    isDone: true,
    label: "Sub task 2,1",
  });
  await todo2.createSubTask({
    isDone: false,
    label: "Sub task 2,2",
  });

  const todo2ById = await Todo.findByPk(2);

  const todo2ById1 = await Todo.findOne({
    where: { id: 1 },
    include: Todo.associations.subTasks,
  });

  // const todo2ById2 = await SubTask.findByPk(4, {
  //   include: [Todo.associations.subTasks],
  // });

  console.log("subTask22ById:", todo2ById1?.subTasks);
}
