import Todo from "./models/todo";

export async function initAndSeedDb() {
  await Todo.sync({ force: true });
  await Todo.create({
    label: "First thing to do",
    isDone: false,
  });
  await Todo.create({
    label: "Second thing to do",
    isDone: false,
  });
}
