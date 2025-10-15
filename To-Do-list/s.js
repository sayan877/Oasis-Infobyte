document.getElementById('addBtn').addEventListener('click', addTodo);
document.getElementById('clearBtn').addEventListener('click', clearTodos);

const todosByDay = {};

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const daySelect = document.getElementById('daySelect');
    const timeInput = document.getElementById('timeInput');
    const errorMessage = document.getElementById('errorMessage');
    const todoText = todoInput.value.trim();
    const selectedDay = daySelect.value;
    const selectedTime = timeInput.value;

 
    errorMessage.textContent = '';

 
    if (todoText === "") {
        errorMessage.textContent = "Task is required.";
        todoInput.focus();
        return;
    }
    if (selectedDay === "") {
        errorMessage.textContent = "Please select a day.";
        daySelect.focus();
        return;
    }
    if (selectedTime === "") {
        errorMessage.textContent = "Please select a time.";
        timeInput.focus();
        return;
    }

    if (!todosByDay[selectedDay]) {
        todosByDay[selectedDay] = [];
    }


    todosByDay[selectedDay].push({ text: todoText, time: selectedTime });
    todoInput.value = ""; 
    daySelect.selectedIndex = 0;
    timeInput.value = ""; 
    displayTodos();
}

function displayTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = "";

 
    for (const day in todosByDay) {
        if (todosByDay[day].length > 0) {
            const daySection = document.createElement('div');
            daySection.className = 'day-section';

            const dayTitle = document.createElement('div');
            dayTitle.className = 'day-title';
            dayTitle.textContent = day;

            daySection.appendChild(dayTitle);

            todosByDay[day].forEach(todo => {
                const todoItem = document.createElement('div');
                todoItem.className = 'todo-item';
                todoItem.textContent = `${todo.text} at ${todo.time}`;
                daySection.appendChild(todoItem);
            });

            todoList.appendChild(daySection);
        }
    }
}
document.getElementById('toggleMsgBtn').addEventListener('click', toggleMessage);

function toggleMessage() {
    const toggleMessageDiv = document.getElementById('toggleMessage');
    if (toggleMessageDiv.style.display === "none") {
        toggleMessageDiv.style.display = "block";
    } else {
        toggleMessageDiv.style.display = "none";
    }
}


function clearTodos() {
    for (const day in todosByDay) {
        todosByDay[day] = [];
    }
    displayTodos();
}
