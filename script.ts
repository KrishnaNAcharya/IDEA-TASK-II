function addTask(): void {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const taskList = document.getElementById('taskList');

    if (taskInput && taskList && taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.className = 'bg-[#DBBEA1]/10 p-2 rounded-lg flex items-center hover:bg-[#DBBEA1]/20 transition-colors';
        li.innerHTML = `
            <input type="checkbox" onclick="updateCount()" class="mr-2 cursor-pointer">
            ${taskInput.value}
            <button onclick="deleteTask(this)" class="ml-auto bg-[#FF6B8B] px-2 py-1 rounded text-[#2A1D1E] font-bold">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        updateCount();
    }
}

function deleteTask(button: HTMLButtonElement): void {
    const li = button.parentElement;
    if (li && li.parentElement) {
        li.parentElement.removeChild(li);
        updateCount();
    }
}

function updateCount(): void {
    const taskList = document.getElementById('taskList');
    const completed = document.getElementById('completed');
    const incomplete = document.getElementById('incomplete');

    if (taskList && completed && incomplete) {
        const total = taskList.children.length;
        const completedCount = Array.from(taskList.querySelectorAll('input[type="checkbox"]:checked')).length;

        completed.textContent = completedCount.toString();
        incomplete.textContent = (total - completedCount).toString();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    
    if (addButton) {
        addButton.addEventListener('click', addTask);
    }

    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    if (taskInput) {
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    }

    updateCount();
