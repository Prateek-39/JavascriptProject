function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    //add task

    let taskItem = document.createElement("li");
    taskItem.innerText = taskInput.value;
    taskList.appendChild(taskItem);
    taskInput.value = "";

    //delete task

    let deleteButton = document.createElement("span");
    deleteButton.innerText = "X";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function () {
      taskList.removeChild(taskItem);
    };

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}
