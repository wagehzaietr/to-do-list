const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = taskInput.value;
  if (taskText) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.addEventListener("click", toggleTask);
    taskItem.addEventListener("dblclick", deleteTask);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function toggleTask(event) {
  const taskItem = event.target;
  taskItem.classList.toggle("completed");
}

function deleteTask(event) {
  const taskItem = event.target;
  taskList.removeChild(taskItem);
}

// Save and load task list from local storage
function saveTaskList() {
  localStorage.setItem("taskList", taskList.innerHTML);
}

function loadTaskList() {
  const savedTaskList = localStorage.getItem("taskList");
  if (savedTaskList) {
    taskList.innerHTML = savedTaskList;
    const taskItems = taskList.querySelectorAll("li");
    for (let i = 0; i < taskItems.length; i++) {
      taskItems[i].addEventListener("click", toggleTask);
      taskItems[i].addEventListener("dblclick", deleteTask);
    }
  }
}

loadTaskList();
window.addEventListener("beforeunload", saveTaskList);


