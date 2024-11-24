document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('newTask');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create new list item
        const li = document.createElement('li');

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');

        // Add elements to list item
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskText));
        li.appendChild(deleteButton);

        // Add the list item to the todo list
        document.getElementById('todoList').appendChild(li);

        // Clear input field
        taskInput.value = "";

        // Event listener for checkbox (mark as completed)
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                li.style.textDecoration = "line-through";
            } else {
                li.style.textDecoration = "none";
            }
        });

        // Event listener for delete button
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
    }
});