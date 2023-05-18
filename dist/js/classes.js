class Task {
  idGenerator() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  // add task & the other elements of task
  addTask(task) {
    let todoList = document.querySelector(".todos-list");

    let todo = `<div class="todo-wrapper relative transition-all duration-200">
                    <div data-status="${task.status}" data-id="${task.id}" data-cat="${task.category}" class="todo w-full overflow-hidden max-h-12 mt-5 px-2 bg-white dark:bg-slate-800 dark:border-slate-700 border border-[#e4e4e7a6] rounded-lg transition-all duration-200">
                        <div class="todo-header flex justify-between items-center h-12">
                            <div class="todo-icon-tittle cursor-pointer flex gap-2">
                                <div class="complete-icon relative w-7 h-7 bg-white dark:bg-slate-800 border-4 border-[#78dec7] rounded-xl flex justify-center items-center shadow-inner transition-colors duration-200">
                                    <div class="todo-checked opacity-0 absolute w-7 h-7 flex justify-center items-center bg-[#78dec7] rounded-full transition-all duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-white dark:stroke-slate-800" fill="none"
                                            viewBox="0 0 24 24" stroke="" stroke-width="3">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="font-sans font-bold text-zinc-700 dark:text-slate-300">
                                    <h3 class="todo-tittle-text">${task.tittle}</h3>
                                </div>
                            </div>
  
                            <div class="open-edit-delete flex">
                                <div class="open w-6 h-6 mr-2 hover:bg-zinc-100 dark:hover:bg-slate-700 flex justify-center items-center rounded-md transition-all duration-200 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#3f4246] dark:fill-slate-300 transition-transform duration-200 h-5 w-5" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div
                                    class="edit-delete w-6 h-6 hover:bg-zinc-100 dark:hover:bg-slate-700 flex justify-center items-center rounded-md transition-all duration-200 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-[#3f4246] dark:stroke-slate-300 h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="todo-content break-words px-1 my-2 font-sans">
                            <p class="todo-desc-text dark:text-slate-200">${task.desc}</p>
                        </div>
                    </div>
                    <div class="tooltip w-44 h-20 absolute right-[5px] -bottom-[88px] invisible opacity-0 transition-all">
                        <div class="w-full h-full flex flex-col  bg-white dark:bg-slate-800 dark:border-slate-700 rounded-md border border-[#e4e4e7a6]">
                            <div data-id="${task.id}" class="edit cursor-pointer hover:bg-zinc-100 dark:hover:bg-slate-700 w-full h-full flex items-center gap-1 px-2 rounded-t-md transition-all duration-200">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#3f3f46] dark:fill-slate-300 w-4 h-4" viewBox="0 0 20 20"
                                        fill="#3f3f46">
                                        <path
                                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                        <path fill-rule="evenodd"
                                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <p class="font-sans text-zinc-700 dark:text-slate-300 text-base">Edit</p>
                            </div>
                            <hr class="border-[#e4e4e7a6] dark:border-slate-700">
                            <div class="delete cursor-pointer hover:bg-zinc-100 dark:hover:bg-slate-700  w-full h-full flex items-center gap-1 px-2 rounded-b-md transition-all duration-200">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20"
                                        fill="#dc2626">
                                        <path fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <p class="font-sans text-red-600 text-base">Delete</p>
                            </div>
                        </div>
                    </div>
                    </div>`;

    todoList.innerHTML += todo;

    // taskModal.classList.remove("active");
    // modalBackground.classList.remove("active");
    // open & close tooltip
    ui.openTooltip();

    // open & close task description
    ui.openTask();

    // remove task
    this.deleteTask();

    // open edit modal
    this.openEditModal();

    // add task to localstorage
    storage.addToLocal(task);

    // edit task
    this.editTask();

    // complete task
    this.completeTask();
  }

  // delete task
  deleteTask() {
    let deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        btn.parentElement.parentElement.parentElement.remove();
        let parent = btn.parentElement.parentElement.parentElement;
        let tittle = parent.querySelector(".todo-tittle-text").textContent;
        storage.deleteFromLocal(tittle);

        // remove background when deleted the task
        tooltipBg.classList.remove("active");
      });
    });
  }

  // open edit modal
  openEditModal() {
    let editBtns = document.querySelectorAll(".edit");
    editBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        //open edit modal
        btn.parentElement.parentElement.classList.remove("active");
        ui.editTaskModal();
      });
    });
  }

  // edit task
  editTask() {
    let editBtns = document.querySelectorAll(".edit");
    editBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // remove tooltip background when clicked in edit btn
        tooltipBg.classList.remove("active");

        let parent = btn.parentElement.parentElement.parentElement;
        let editEl = {
          tittle: parent.querySelector(".todo-tittle-text"),
          desc: parent.querySelector(".todo-desc-text"),
          id: parent.querySelector(".todo").dataset.id,
        };

        // add id to edit modal form for task identification
        editModalForm.dataset.edit = editEl.id;

        // get values from edit form and put in task & set on localstorage
        editModalForm.addEventListener("submit", (e) => {
          e.preventDefault();
          let tValue = editModalForm.querySelector("#tittle").value;
          let dValue = editModalForm.querySelector("#desc").value;

          if (tValue && dValue) {
            if (editEl.id === editModalForm.dataset.edit) {
              editEl.tittle.textContent = tValue;
              editEl.desc.textContent = dValue;
            }

            // set new tasks in localstorage
            let localTasks = storage.getItems();
            localTasks.forEach((task) => {
              if (task.id === editEl.id) {
                task.tittle = editEl.tittle.textContent;
                task.desc = editEl.desc.textContent;
              }

              localStorage.setItem("tasks", JSON.stringify(localTasks));
            });

            editModalForm.reset();
            editTask.classList.remove("active");
            modalBackground.classList.remove("active");
          } else {
            const errorMsg = document.querySelector(".edit-error-msg");
            errorMsg.classList.add("active");

            setTimeout(() => {
              errorMsg.classList.remove("active");
            }, 3000);
          }
        });
      });
    });
  }

  // complete task
  completeTask() {
    const completeIcon = document.querySelectorAll(".todo-icon-tittle");

    completeIcon.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const parent = btn.parentElement.parentElement.parentElement;
        const checkBtn = btn.querySelector(".todo-checked");
        const tittle = parent.querySelector(".todo-tittle-text");
        let id = parent.querySelector(".todo").dataset.id;
        let taskStatus = parent.querySelector(".todo").dataset.status;

        // when clicked in done task btn add some styles
        checkBtn.classList.toggle("active");
        parent.classList.toggle("opacity-70");
        tittle.classList.toggle("line-through");

        // add new status in localstorage & html element
        let localTasks = storage.getItems();

        localTasks.forEach((task) => {
          if (task.id === id) {
            if (task.status === "undone") {
              task.status = "done";
              taskStatus = "done";
            } else {
              task.status = "undone";
              taskStatus = "undone";
            }
          }

          localStorage.setItem("tasks", JSON.stringify(localTasks));
        });
      });
    });
  }
}

class UI {
  // dark mode
  darkMode() {
    // default theme
    
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      light.classList.add("active");
      dark.classList.remove("active");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      dark.classList.add("active");
      light.classList.remove("active");
    }
  }

  // dark mode btn
  darkModeBtn() {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      dark.classList.add("active");
      light.classList.remove("active");
    } else {
      localStorage.theme = "dark";
      light.classList.add("active");
      dark.classList.remove("active");
    }

    this.darkMode();
  }

  // active menu items when on click & menu dark mode styles
  activeMenu() {
    category.forEach((cat) => {
      cat.addEventListener("click", (e) => {
        let localTheme = localStorage.getItem("theme");
        if (localTheme === "light") {
          category.forEach((cate) => cate.classList.replace("dark", "active"));
          category.forEach((cate) => cate.classList.remove("active"));
          cat.classList.add("active");
        } else {
          category.forEach((cate) => cate.classList.replace("active", "dark"));
          category.forEach((cate) => cate.classList.remove("dark"));
          cat.classList.add("dark");
        }
      });
    });
    darkBtn.addEventListener("click", (e) => {
      let localTheme = localStorage.getItem("theme");
      if (localTheme === "light") {
        category.forEach((cate) => {
          if (cate.classList.contains("dark")) {
            cate.classList.replace("dark", "active");
          }
        });
      } else if (localTheme === "dark") {
        category.forEach((cate) => {
          if (cate.classList.contains("active")) {
            cate.classList.replace("active", "dark");
          }
        });
      }
    });
    document.addEventListener("DOMContentLoaded", (e) => {
      let localTheme = localStorage.getItem("theme");
      if (localTheme === "light") {
        category.forEach((cate) => {
          if (cate.classList.contains("dark")) {
            cate.classList.replace("dark", "active");
          }
        });
      } else if (localTheme === "dark") {
        category.forEach((cate) => {
          if (cate.classList.contains("active")) {
            cate.classList.replace("active", "dark");
          }
        });
      }
    });
  }

  // add task modal
  addTaskModal() {
    modalBackground.classList.add("active");
    taskModal.classList.add("active");

    taskCancel.addEventListener("click", (e) => {
      taskModal.classList.remove("active");
      modalBackground.classList.remove("active");
    });

    modalBackground.addEventListener("click", (e) => {
      taskModal.classList.remove("active");
      modalBackground.classList.remove("active");
    });
  }

  // open & close tooltip
  openTooltip() {
    let tooltipBtn = document.querySelectorAll(".edit-delete");

    tooltipBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let parentElements =
          btn.parentElement.parentElement.parentElement.parentElement;
        let toolTip = parentElements.querySelector(".tooltip");

        // open tooltip & show background
        toolTip.classList.toggle("active");
        tooltipBg.classList.toggle("active");
        parentElements.classList.toggle("z-40");

        // remove tooltip when clicked every where in page
        tooltipBg.addEventListener("click", (e) => {
          tooltipBg.classList.remove("active");
          toolTip.classList.remove("active");
          parentElements.classList.remove("z-40");
        });
      });
    });
  }

  // open & close task description
  openTask() {
    let taskBoxBtn = document.querySelectorAll(".open");

    taskBoxBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let parentElemnts =
          btn.parentElement.parentElement.parentElement.parentElement;
        let task = parentElemnts.querySelector(".todo");
        let svgBtn = parentElemnts.querySelector(".open > svg");
        task.classList.toggle("active");
        svgBtn.classList.toggle("active");
      });
    });
  }

  // edit task modal
  editTaskModal() {
    modalBackground.classList.add("active");
    editTask.classList.add("active");

    editCancel.addEventListener("click", (e) => {
      editTask.classList.remove("active");
      modalBackground.classList.remove("active");
    });

    modalBackground.addEventListener("click", (e) => {
      editTask.classList.remove("active");
      modalBackground.classList.remove("active");
    });
  }

  // check task complete or not when dom loaded
  taskCheckOnLoad() {
    const tasks = document.querySelectorAll(".todo");

    tasks.forEach((task) => {
      const checkBtn = task.querySelector(".todo-checked");
      const tittle = task.querySelector(".todo-tittle-text");
      const taskParent = task.parentElement;

      if (task.dataset.status === "done") {
        taskParent.classList.add("opacity-50");
        checkBtn.classList.add("active");
        tittle.classList.add("line-through");
      }
    });
  }

  // category
  category(tittle) {
    const tasks = document.querySelectorAll(".todo-wrapper");
    const allTasks = document.querySelector(".category");

    tasks.forEach((task) => {
      const cat = task.querySelector(".todo");
      if (tittle !== cat.dataset.cat) {
        task.classList.add("hidden");
      } else {
        task.classList.remove("hidden");
      }

      allTasks.addEventListener("click", (e) => {
        task.classList.remove("hidden");
      });
    });
  }

  errorMessage(msg) {
    errorMsg.classList.add("active");
    errorMsg.textContent = msg;

    setTimeout(() => {
      errorMsg.classList.remove("active");
    }, 3000);
  }
}

class Storage {
  // get tasks from localstorage
  getItems() {
    let localItems;
    let getItems = localStorage.getItem("tasks");
    if (!getItems) {
      localItems = [];
    } else {
      localItems = JSON.parse(localStorage.getItem("tasks"));
    }
    return localItems;
  }

  // add tasks to localstorage
  addToLocal(task) {
    let localItems = this.getItems();
    localItems.push(task);

    localStorage.setItem("tasks", JSON.stringify(localItems));
  }

  // delete tasks from localstorage
  deleteFromLocal(tittle) {
    let localTasks = this.getItems();
    localTasks.forEach((item, index) => {
      if (item.tittle === tittle) {
        localTasks.splice(index, 1);
      }
    });

    localStorage.setItem("tasks", JSON.stringify(localTasks));
  }

  // load localstorage tasks when page reloaded
  getTasksOnLoad() {
    let localTasks = this.getItems();
    let todoList = document.querySelector(".todos-list");

    localTasks.forEach((taskInfo) => {
      let todo = `<div class="todo-wrapper relative transition-all duration-200">
                    <div data-status="${taskInfo.status}" data-id="${taskInfo.id}" data-cat="${taskInfo.category}" class="todo w-full overflow-hidden max-h-12 mt-5 px-2 bg-white dark:bg-slate-800 dark:border-slate-700 border border-[#e4e4e7a6] rounded-lg transition-all duration-200">
                        <div class="todo-header flex justify-between items-center h-12">
                            <div class="todo-icon-tittle cursor-pointer flex items-center gap-2">
                                <div class="complete-icon relative w-7 h-7 bg-white dark:bg-slate-800 border-4 border-[#78dec7] rounded-xl flex justify-center items-center shadow-inner transition-colors duration-200">
                                    <div
                                        class="todo-checked opacity-0 absolute w-7 h-7 flex justify-center items-center bg-[#78dec7] rounded-full transition-all duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-white dark:stroke-slate-800" fill="none"
                                            viewBox="0 0 24 24" stroke="" stroke-width="3">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="font-sans font-bold text-zinc-700 dark:text-slate-300">
                                    <h3 class="todo-tittle-text">${taskInfo.tittle}</h3>
                                </div>
                            </div>
  
                            <div class="open-edit-delete flex">
                                <div class="open w-6 h-6 mr-2 hover:bg-zinc-100 dark:hover:bg-slate-700 flex justify-center items-center rounded-md transition-all duration-200 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#3f4246] dark:fill-slate-300 transition-transform duration-200 h-5 w-5" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div
                                    class="edit-delete w-6 h-6 hover:bg-zinc-100 dark:hover:bg-slate-700 flex justify-center items-center rounded-md transition-all duration-200 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-[#3f4246] dark:stroke-slate-300 h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="todo-content break-words px-1 my-2 font-sans">
                            <p class="todo-desc-text dark:text-slate-200">${taskInfo.desc}</p>
                        </div>
                    </div>
                    <div class="tooltip w-44 h-20 absolute right-[5px] -bottom-[88px] invisible opacity-0 transition-all">
                        <div class="w-full h-full flex flex-col  bg-white dark:bg-slate-800 dark:border-slate-700 rounded-md border border-[#e4e4e7a6]">
                            <div data-id="${taskInfo.id}" class="edit cursor-pointer hover:bg-zinc-100 dark:hover:bg-slate-700 w-full h-full flex items-center gap-1 px-2 rounded-t-md transition-all duration-200">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#3f3f46] dark:fill-slate-300 w-4 h-4" viewBox="0 0 20 20"
                                        fill="#3f3f46">
                                        <path
                                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                        <path fill-rule="evenodd"
                                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <p class="font-sans text-zinc-700 dark:text-slate-300 text-base">Edit</p>
                            </div>
                            <hr class="border-[#e4e4e7a6] dark:border-slate-700">
                            <div class="delete cursor-pointer hover:bg-zinc-100 dark:hover:bg-slate-700  w-full h-full flex items-center gap-1 px-2 rounded-b-md transition-all duration-200">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20"
                                        fill="#dc2626">
                                        <path fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <p class="font-sans text-red-600 text-base">Delete</p>
                            </div>
                        </div>
                    </div>
                  </div>`;

      todoList.innerHTML += todo;

      // open & close tooltip
      ui.openTooltip();

      // open & close task description
      ui.openTask();

      // remove task
      task.deleteTask();

      // open edit modal
      task.openEditModal();

      // edit task
      task.editTask();

      // complete task
      task.completeTask();

      // check task complete or not when dom loaded
      ui.taskCheckOnLoad();
    });
  }
}
