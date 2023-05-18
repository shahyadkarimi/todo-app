// ------ variables
const category = document.querySelectorAll(".category"),
  addTaskBtn = document.querySelector("#addTask"),
  modalBackground = document.querySelector(".task-modal-bg"),
  taskModal = document.querySelector(".task"),
  editTask = document.querySelector(".edit-task"),
  taskCancel = document.querySelector("#cancelBtn"),
  editCancel = document.querySelector("#editCancelBtn"),
  form = document.querySelector("#add-modal"),
  editModalForm = document.querySelector("#edit-task"),
  darkBtn = document.querySelector(".dark-light"),
  tooltipBg = document.querySelector(".tooltip-bg"),
  dark = document.querySelector(".dark"),
  light = document.querySelector(".light"),
  errorMsg = document.querySelector(".error-msg")

const task = new Task();
const ui = new UI();
const storage = new Storage();

// ------ eventlisteners
document.addEventListener("DOMContentLoaded", (e) => {
  // load localstorage tasks when page reloaded
  storage.getTasksOnLoad();

  // dark mode
  ui.darkMode();
});

// add task modal
addTaskBtn.addEventListener("click", (e) => {
  ui.addTaskModal();
});

// add task
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // add task form data
  let taskInfo = {
    tittle: form.querySelector("#tittle").value,
    desc: form.querySelector("#desc").value,
    status: form.dataset.status,
    category: form.querySelector('.categories input[name="tasks"]:checked').value,
    id: task.idGenerator(),
  };
  
  if(taskInfo.tittle && taskInfo.desc){
    task.addTask(taskInfo);

    // reset form after added the task
    form.reset();

    taskModal.classList.remove("active");
    modalBackground.classList.remove("active");
  }else{
    ui.errorMessage("Please fill all inputs")
  }
});



// dark mode btn
darkBtn.addEventListener("click", (e) => {
  ui.darkModeBtn();
});

// category
category.forEach((cat) => {
  const categoryTittle = document.querySelector(".category-tittle h1");
  
  cat.addEventListener("click", (e) => {
    const categoryName = cat.querySelector("h2").textContent;
    categoryTittle.textContent = categoryName;
    ui.category(categoryName);
  });
});

// ------ classes

// change active class & dark mode for menu
ui.activeMenu();