// dashboard
const totalTasks_element = document.getElementById("total-tasks");
const completedTasks_element = document.getElementById("completed-tasks");
const pendingTasks_element = document.getElementById("pending-tasks");

// add task form
const taskForm = document.getElementById("task-form");

const taskInput = document.getElementById("task-input");
const priorityInput = document.getElementById("priority-input");

// search and filters
const searchInput = document.getElementById("search-input");
const filterInput = document.getElementById("filter-input");

// task list
const taskList = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");

const task = [];

let completedCount = 0;
let pendingCount = 0;

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskInput_val = taskInput.value.trim();
  const priorityInput_val = priorityInput.value;

  if (taskInput_val === "" || !priorityInput_val) {
    alert("Please fill in all fields");
    return;
  }

  const newTask = {
    title: taskInput_val,
    priority: priorityInput_val,
    completed: false,
    pending: false
  };

  task.push(newTask);
  renderingTask();
  updatetotalTask();
  searching();

  taskForm.reset();
});

function renderingTask(taskRendering = task) {
  taskList.innerHTML = "";

  if (task.length === 0) {
    emptyState.style.display = "block";
  }
  else {
    emptyState.style.display = "none";
  }

  taskRendering.forEach(task => {
    const li = document.createElement("li");
    const completedBtn = document.createElement("button");
    const pendingBtn = document.createElement("button");

    li.textContent = `${task.title} - ${task.priority}`;
    completedBtn.textContent = "Completed";
    pendingBtn.textContent = "Pending";

    // completed and pending code here
    completedBtn.addEventListener("click", () => {
      if (!task.completed) {
      task.completed = true;
      completedCount++;
      completedTasks_element.textContent = completedCount;
    }
    });

    pendingBtn.addEventListener("click", () => {
      if (!task.pending) {
        task.pending = true;
        pendingCount++;
        pendingTasks_element.textContent = pendingCount;
      }
    });

    li.appendChild(completedBtn);
    li.appendChild(pendingBtn);
    taskList.appendChild(li);
  });
};

function updatetotalTask() {
  totalTasks_element.textContent = task.length;
};

function searching() {
  const searchInput_val = searchInput.value.trim().toLowerCase();

  const search = task.filter(searchTask => {
    return searchTask.title.toLowerCase().includes(searchInput_val);
  });

  renderingTask(search);
};

searchInput.addEventListener("input", searching);