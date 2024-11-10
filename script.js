// script.js

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText) {
    const taskList = document.getElementById('task-list');

    // Create a new list item for the task
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Create a container for buttons
    const buttons = document.createElement('div');
    buttons.classList.add('task-buttons');

    // Add "Complete" button
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '✔️';
    completeBtn.onclick = () => toggleComplete(taskItem);
    buttons.appendChild(completeBtn);

    // Add "Delete" button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.onclick = () => deleteTask(taskItem);
    buttons.appendChild(deleteBtn);

    // Append buttons to the task item and task item to the list
    taskItem.appendChild(buttons);
    taskList.appendChild(taskItem);

    // Clear the input
    taskInput.value = '';
  }
}

// Function to mark a task as complete
function toggleComplete(taskItem) {
  taskItem.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(taskItem) {
  taskItem.remove();
}
