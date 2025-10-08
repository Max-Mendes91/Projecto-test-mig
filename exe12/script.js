const todoForm = document.querySelector('#todo-form');
const activeCount = document.querySelector('#active-count');
const todoList = document.querySelector('#todo-list');



let todos = [];
loadTodos();
//renderTodos need to define out in the global scope and with parameter set to whatever we want to call , so it rendTodos can be called anywahere is needed .
function renderTodos(arrayToRender) {
    todoList.innerHTML = '';
    todoList.className = "flex-1 font-medium text-gray-800";

    arrayToRender.forEach(todo => {

        const list = document.createElement('li');
        // console.log(list);

        const input = document.createElement('input');
        input.type = "checkbox";
        input.className = 'w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-2 focus:ring-green-400'
        input.checked = todo.completed;
        // console.log(input);


        // text
        const textSpan = document.createElement('span')
        textSpan.textContent = todo.text;
        // console.log(textSpan);
        if (todo.completed) {
            textSpan.className = "line-through text-gray-400";
        }


        //priority text
        const priorityBadge = document.createElement('span');
        priorityBadge.textContent = todo.priority;
        switch (todo.priority) {
            case 'high':
                priorityBadge.className = "text-red-600 font-semibold bg-red-100 px-2 py-1 rounded";
                break;
            case 'medium':
                priorityBadge.className = "text-yellow-600 font-semibold bg-yellow-100 px-2 py-1 rounded";
                break;
            case 'low':
                priorityBadge.className = "text-green-600 font-semibold bg-green-100 px-2 py-1 rounded";
                break;
            default:
                priorityBadge.className = "text-gray-600 font-semibold bg-gray-100 px-2 py-1 rounded";
        }
        //delete button
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.className = "ml-auto text-red-500 hover:text-red-700 font-bold";

        //event listener for button
        deleteBtn.addEventListener('click', function () {
            todos = todos.filter(item => item.id !== todo.id)
            //save data
            saveTodos();
            renderTodos(todos)
        })

        //click handler for the check box;
        input.addEventListener('click', function () {
            toggleTodo(todo.id)
            //save data
            saveTodos()
            renderTodos(todos);

        });


        list.appendChild(input);
        list.appendChild(textSpan);
        list.appendChild(priorityBadge);
        list.appendChild(deleteBtn);
        list.className = "bg-white rounded-lg shadow p-4 flex items-center gap-4 mt-5";;
        todoList.appendChild(list);
    })
}


todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('click');

    const todoInput = document.querySelector('#todo-input').value;
    // console.log(todoInput);
    const todoPriority = document.querySelector('#todo-priority').value;
    // console.log(todoPriority);
    const todoCategory = document.querySelector('#todo-category').value;
    // console.log(todoCategory);

    //create todo object
    const now = new Date()
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seg = now.getSeconds();

    const todoObj = {
        id: Date.now(),
        text: todoInput,
        priority: todoPriority,
        category: todoCategory,
        completed: false,
        createdAt: new Date(),
    }
    // console.log(todoObj.createdAt);

    //add to the Array
    todos.push(todoObj)
    console.log(todos);
    //save data 
    saveTodos();
    renderTodos(todos);
    todoForm.reset();
})

//event listner for the filters
let currentStatus = 'all';
let selectedPriority = 'all';
let selectedCategory = 'all';


const filterBtn = document.querySelectorAll('.filter-btn')
filterBtn.forEach((button) => {
    button.addEventListener('click', function () {
        currentStatus = button.dataset.filter;
        const filtered = applyFilters(currentStatus, selectedPriority, selectedCategory)
        renderTodos(filtered);

    })

})

const filterCategory = document.querySelector('#filter-category');
filterCategory.addEventListener('change', () => {
    selectedCategory = filterCategory.value;
    const filtered = applyFilters(currentStatus, selectedPriority, selectedCategory);
    renderTodos(filtered);

})


const sortBy = document.querySelector('#sort-by');
sortBy.addEventListener('change', () => {
    // selectedPriority = sortBy.value;
    const filtered = applyFilters(currentStatus, selectedPriority.value, selectedCategory.value, sortBy.value);
    renderTodos(filtered)
    console.log(sortBy)
})



//CALL BACK FUNCTIONS

// will return a boolean that update the array above using the (map) = todo.complete = true or false that is added on the input event listener 
//  and can be checked when we add a item to the list of todos.
function toggleTodo(idToToggle) {
    todos = todos.map(todo => todo.id === idToToggle ? ({ ...todo, completed: !todo.completed }) : todo);
}

// return boolean as well , in case checkbox is marked it will display the correct based on the set done at the beggining  that the obj was defined , 
// it was defined as false so we can play with that 
function applyFilters(currentStatus, selectedPriority, selectedCategory, sortBy) {
    return todos
        .filter(todo => {
            if (currentStatus === 'active') return !todo.completed
            if (currentStatus === 'completed') return todo.completed
            return true
        })
        .filter(todo => {
            if (!selectedPriority || selectedPriority === 'all') return true
            return todo.priority === selectedPriority
        })
        .filter(todo => {
            if (!selectedCategory || selectedCategory === 'all') return true
            return todo.category === selectedCategory
        })

    if (sortBy === 'newest') {
        result = result.sort((a, b) => b.createdAt - a.createdAt);
    } else if (sortBy === 'oldest') {
        result = result.sort((a, b) => a.createdAt - b.createdAt);
    } else if (sortBy === 'priority') {
        const order = { high: 3, medium: 2, low: 1 };
        result = result.sort((a, b) => order[b.priority] - order[a.priority]);
    }

    return result;
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function loadTodos() {
    const stored = localStorage.getItem('todos');
    if (stored) {
        todos = JSON.parse(stored);
    } else {
        todos = []
    }
    renderTodos(todos);
}