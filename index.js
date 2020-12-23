let addMessage = document.querySelector(".myInput"),
  addButton = document.querySelector(".add"),
  todo = document.querySelector(".todo"),
  deleteButton = document.querySelector(".delete");

let todoList = [];

addButton.addEventListener("click", () => {
  if (addMessage.value == "") {
    return;
  }

  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };

  todoList.push(newTodo);
  addMessage.value = "";

  displayMessages();
});

function deleteFromList(index) {
  todoList.splice(index, 1);
  displayMessages();
}

function fromList(i) {
  document.getElementsByClassName("labelFromList")[i].style.textDecoration =
    "line-through";
}

function displayMessages() {
  let displayMessage = "";

  todoList.forEach((item, i) => {
    displayMessage += `
        <li>
            <div id='item_${i}' class="deleteButton" onclick="deleteFromList(${i})">x</div>
            <input type='checkbox'  id='item_${i}' onclick="fromList(${i})">
            <label for='item_${i}' class='labelFromList' >${item.todo}</label>
        </li>
        `;
  });

  todo.innerHTML = displayMessage;
}

deleteButton.addEventListener("click", () => {
  todoList = [];
  todo.innerHTML = '';
});
