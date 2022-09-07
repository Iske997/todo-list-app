let userInput = prompt("What you want to do");

const todos = ["Collect chicken eggs", "Clean litter box"];

while (userInput !== "quit" && userInput !== "q") {
  if (userInput === "list") {
    console.log("************");
    for (let i = 0; i < todos.length; i++) {
      let todoItem = todos[i];
      console.log(`${i}: ${todoItem}`);
    }
    console.log("************");
  } else if (userInput === "new") {
    const newTodo = prompt("Enter new todo action.");
    todos.push(newTodo);
    console.log(`The todo "${newTodo}" has been added to the todo list`);
  } else if (userInput === "delete") {
    const indexDelTodo = prompt("Enter the index number of todo aciton you want to delete");
    parseInt(indexDelTodo);
    todos.splice(indexDelTodo, 1);
    console.log(`The todo action with the index number of ${indexDelTodo} has been deleted`);
  }
  userInput = prompt("What you want to do");
}
console.log("OK you quited the app");
