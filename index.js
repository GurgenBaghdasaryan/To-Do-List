let addMessage = document.querySelector(".myInput"),
  addButton = document.querySelector(".add"),
  todo = document.querySelector(".todo"),
  deleteButton = document.querySelector(".delete");

let todoList = [];

addButton.addEventListener("click", () => {
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };

  if (addMessage.value == "") {
    return;
  }
  if (addMessage.value !== "") {
    todoList.push(newTodo);
    document.getElementsByClassName("myInput")[0].value = "";
  }

  displayMessages();
});

function deleteFromList(index) {
  todoList.splice(index, 1);
  displayMessages();
}

function FromList(i) {
  document.getElementsByClassName("asd")[i].style.textDecoration =
    "line-through";
}

function displayMessages() {
  let displayMessage = "";
  todoList.forEach((item, i) => {
    displayMessage += `
        <li>
            <div id='item_${i}' class="deleteButton" onclick="deleteFromList(${i})">x</div>
            <input type='checkbox'  id='item_${i}' onclick="FromList(${i})">
            <label for='item_${i}' class='asd' >${item.todo}</label>
        </li>
        `;
  });

  todo.innerHTML = displayMessage;
}

deleteButton.addEventListener("click", () => {
  let newTodo = {
    todo: deleteButton.value,
    checked: false,
    important: false,
  };

  todoList.splice(newTodo);
  displayDeleted();
});

function displayDeleted() {
  let displayDelete = "";
  if (todoList.length > 0) {
    return displayDelete;
  }
  todo.innerHTML = displayDelete;
}
