let clearIcon = document.querySelector(".clear-icon");
let sortToggle = document.querySelector(".sort-toggle");
let expandBtn = document.querySelector(".expand-btn");
let confirmBtn = document.querySelector(".confirm-btn");

let itemsList = document.querySelector(".items-list");
let inputWrapper = document.querySelector(".entry-row");
let input = document.querySelector(".entry-row input");

let tasks = [];
let isAscending = false;

// başlangıç state
inputWrapper.style.display = "flex";
itemsList.style.display = "none";
expandBtn.style.display = "block";

function sortTasks() {
  let sortedTasks = [...tasks];

  if (isAscending) {
    sortedTasks.sort();
  } else {
    sortedTasks.sort().reverse();
  }

  itemsList.innerHTML = "";

  sortedTasks.forEach(task => {
    let li = document.createElement("li");
    li.textContent = task;

    let deleteIcon = document.createElement("img");
    deleteIcon.src = "/images/Group 56.svg";
    deleteIcon.alt = "delete";
    deleteIcon.classList.add("remove-icon");

    deleteIcon.addEventListener("click", () => {
      li.remove();
      tasks = tasks.filter(t => t !== task);
      sortTasks();
      checkEmptyList();
    });

    deleteIcon.addEventListener("mouseover", () => {
      deleteIcon.src = "/images/Group 56.svg";
    });

    deleteIcon.addEventListener("mouseout", () => {
      deleteIcon.src = "/images/Group 56.svg";
    });

    li.appendChild(deleteIcon);
    itemsList.appendChild(li);
  });
}

function checkEmptyList() {
  if (tasks.length === 0) {
    itemsList.style.display = "none";
    inputWrapper.style.display = "flex";
  }
}

expandBtn.addEventListener("click", () => {
  inputWrapper.style.display = "flex";
});

confirmBtn.addEventListener("click", () => {
  let value = input.value.trim();

  if (value !== "") {
    let li = document.createElement("li");
    li.textContent = value;

    let deleteIcon = document.createElement("img");
    deleteIcon.src = "/images/Group 56.svg";
    deleteIcon.alt = "delete";
    deleteIcon.classList.add("remove-icon");

    deleteIcon.addEventListener("click", () => {
      li.remove();
      tasks = tasks.filter(task => task !== li.textContent);
      sortTasks();
      checkEmptyList();
    });

    deleteIcon.addEventListener("mouseover", () => {
      deleteIcon.src = "/images/Group 56.svg";
    });

    deleteIcon.addEventListener("mouseout", () => {
      deleteIcon.src = "/images/Group 56.svg";
    });

    li.appendChild(deleteIcon);
    itemsList.appendChild(li);

    tasks.push(value);

    input.value = "";

    itemsList.style.display = "flex";
    inputWrapper.style.display = "none";
    expandBtn.style.display = "block";
  }
});

sortToggle.addEventListener("click", () => {
  isAscending = !isAscending;

  if (isAscending) {
    sortToggle.src = "./images/Group 90.svg";
  } else {
    sortToggle.src = "./images/Group 38.svg";
  }

  sortTasks();
});

sortToggle.addEventListener("mouseover", () => {
  if (isAscending) {
    sortToggle.src = "./images/Group 90.svg";
  } else {
    sortToggle.src = "./images/Group 38.svg";
  }
});

sortToggle.addEventListener("mouseout", () => {
  if (isAscending) {
    sortToggle.src = "./images/Group 90.svg";
  } else {
    sortToggle.src = "./images/Group 38.svg";
  }
});

clearIcon.addEventListener("click", () => {
  input.value = "";
});

clearIcon.addEventListener("mouseover", () => {
  clearIcon.src = "/images/Group 56.svg";
});

clearIcon.addEventListener("mouseout", () => {
  clearIcon.src = "/images/Group 56.svg";
});
