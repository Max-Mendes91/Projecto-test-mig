const todoForm = document.querySelector('#todo-form');
;
const sortBy = document.querySelector('#sort-by');
const filterCategory = document.querySelector('#filter-category');
const activeCount = document.querySelector('#active-count');
const todoList = document.querySelector('#todo-list');

let todos = [];

todoForm.addEventListener('submit', (e) =>{
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
    //add Array
    //render

})