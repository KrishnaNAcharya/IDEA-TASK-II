// Function to add a new task
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    if (taskInput && taskList && taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        li.className = 'bg-[#DBBEA1]/10 p-2 rounded-lg flex items-center hover:bg-[#DBBEA1]/20 transition-colors';
        li.innerHTML = "\n            <input type=\"checkbox\" onclick=\"updateCount()\" class=\"mr-2 cursor-pointer\">\n            ".concat(taskInput.value, "\n            <button onclick=\"deleteTask(this)\" class=\"ml-auto bg-[#FF6B8B] px-2 py-1 rounded text-[#2A1D1E] font-bold\">Delete</button>\n        ");
        taskList.appendChild(li);
        taskInput.value = '';
        updateCount();
    }
}
// Function to delete a task
function deleteTask(button) {
    var li = button.parentElement;
    if (li && li.parentElement) {
        li.parentElement.removeChild(li);
        updateCount();
    }
}
// Function to update task counts
function updateCount() {
    var taskList = document.getElementById('taskList');
    var completed = document.getElementById('completed');
    var incomplete = document.getElementById('incomplete');
    if (taskList && completed && incomplete) {
        var total = taskList.children.length;
        var completedCount = Array.from(taskList.querySelectorAll('input[type="checkbox"]:checked')).length;
        completed.textContent = completedCount.toString();
        incomplete.textContent = (total - completedCount).toString();
    }
}
// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    var addButton = document.querySelector('button');
    var taskInput = document.getElementById('taskInput');
    if (addButton) {
        addButton.addEventListener('click', addTask);
    }
    if (taskInput) {
        taskInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    }
    updateCount(); // Initial count update
});
