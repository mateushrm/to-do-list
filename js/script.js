// Seleção de elementos
const form = document.querySelector("#form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const edit = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEdit = document.querySelector("#cancel-edit");

// Funções
const saveTodo = (text) =>{
    const todo = document.createElement('div');
    todo.classList.add("todo");
    
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const done = document.createElement('button');
    done.classList.add('concluido');
    done.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(done);

    const edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(edit);

    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(remove);

    list.appendChild(todo);

    input.value = '';
    input.focus();
}

//Eventos
form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const inputValue = input.value;

    if(inputValue){
        //salvar
        saveTodo(inputValue);
    }
})

document.addEventListener('click', (e) =>{
    const targetElement = e.target;
    const parentElement = targetElement.closest("div");

    if(targetElement.classList.contains("concluido")){
        parentElement.classList.toggle('done');
    } 

    if(targetElement.classList.contains("edit")){
        
    }
    
    if(targetElement.classList.contains("remove")){
        parentElement.remove();
    } 
})