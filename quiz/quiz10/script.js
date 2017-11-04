var todoList = ["Make a dinner"];
var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "new") {
    var newTodo = prompt("Enter new Todo");
    todoList.push(newTodo);
  } else if (input === "list") {
    console.log("*************");
    todoList.forEach((todo, idx) => {
      console.log(`${idx}: ${todo}`);
    });
    console.log("*************");
  } else if (input === "delete") {
    var index = -1;
    while (index < 0 || index >= todoList.length) {
      index = prompt("Enter index of todo to delete");
    }
    var remove = todoList.splice(index, 1);
    alert(`Todo ${remove} has been deleted...`);
  }
  input = prompt("What would you like to do?");
}

console.log("You quit the app...");
