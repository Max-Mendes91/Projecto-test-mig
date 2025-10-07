const todoForm = document.querySelector('#todo-form');
const sortBy = document.querySelector('#sort-by');
const filterCategory = document.querySelector('#filter-category');
const activeCount = document.querySelector('#active-count');
const todoList = document.querySelector('#todo-list');

let todos = [];

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

    // console.log(todos);

    //render
    function renderTodos() {
        todoList.innerHTML = '';
        todoList.className = "flex-1 font-medium text-gray-800";

        todos.forEach(todo => {
            
            const list = document.createElement('li');

            const input = document.createElement('input');
            input.type = "checkbox";
            input.className = 'w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-2 focus:ring-green-400'
            input.checked = todo.completed;
            
            const textSpan = document.createElement('span')
            textSpan.textContent = todo.text;
            

            if (todo.completed) {
                textSpan.className = "line-through text-gray-400";
            }

            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete'
            deleteBtn.className ="ml-auto text-red-500 hover:text-red-700 font-bold";

            //event listener for button
            deleteBtn.addEventListener('click', function(){
                todos = todos.filter(item => item.id !== todo.id)
                renderTodos()
            })

            //click handler for the check box;
            input.addEventListener('click', function () {
                todo.completed = !todo.completed;
                renderTodos();
            });

            
            list.appendChild(input);
            list.appendChild(textSpan);
            list.appendChild(deleteBtn);
            list.className = "bg-white rounded-lg shadow p-4 flex items-center gap-4 mt-5";;
            todoList.appendChild(list);
        })
    }
    renderTodos();
    todoForm.reset();
})

