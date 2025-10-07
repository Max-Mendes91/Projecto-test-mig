const todoForm = document.querySelector('#todo-form');
const sortBy = document.querySelector('#sort-by');
const filterCategory = document.querySelector('#filter-category');
const activeCount = document.querySelector('#active-count');
const todoList = document.querySelector('#todo-list');

let todos = [];

//render
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

        const textSpan = document.createElement('span')
        textSpan.textContent = todo.text;
        // console.log(textSpan);


        if (todo.completed) {
            textSpan.className = "line-through text-gray-400";
        }

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.className = "ml-auto text-red-500 hover:text-red-700 font-bold";

        //event listener for button
        deleteBtn.addEventListener('click', function () {
            todos = todos.filter(item => item.id !== todo.id)
            renderTodos(todos)
        })

        //click handler for the check box;
        input.addEventListener('click', function () {
            toggleTodo(todo.id)
            renderTodos(todos);
        });


        list.appendChild(input);
        list.appendChild(textSpan);
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
        categorie: filterCategory.value,
        completed: false,
        createdAt: new Date(),
    }
    // console.log(todoObj.createdAt);

    //add to the Array
    todos.push(todoObj)
    console.log(todos);

    renderTodos(todos);
    todoForm.reset();
})


const filterBtn = document.querySelectorAll('.filter-btn')
filterBtn.forEach((button) => {
    button.addEventListener('click', function () {
        const filteredTodos = applyFilters(button.dataset.filter)
        renderTodos(filteredTodos);
    })
    
})






//CALL BACK FUNCTIONS

// will return a boolean that update the array above using the (map) = todo.complete = true or false that is added on the input event listener 
//  and can be checked when we add a item to the list of todos.
function toggleTodo(idToToggle) {
    todos = todos.map(todo => todo.id === idToToggle ? ({ ...todo, completed: !todo.completed }) : todo);
}

// return boolean as well , in case checkbox is marked it will display the correct based on the set done at the beggining  that the obj was defined , 
// it was defined as false so we can play with that 
function applyFilters(filterType) {
    let filteredTodos;

    if (filterType === 'all') {
        console.log('max');
        return todos;
    } else if (filterType === 'active') {
        console.log('maxe');
        return todos.filter(todo => !todo.completed);

    } else if (filterType === 'completed') {
        console.log('fodassee');
        return  todos.filter(todo => todo.completed)
    }
}