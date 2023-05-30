// Seleção de elementos
const form = document.querySelector("#form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const edit = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEdit = document.querySelector("#cancel-edit");

let oldTitle;

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

const toogleForm = () =>{
    edit.classList.toggle("hide");
    form.classList.toggle("hide");
    list.classList.toggle("hide");
}

const updateTodo = (text) =>{
    const todos = document.querySelectorAll('.todo');

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldTitle){
            todoTitle.innerText = text;
        }
    })
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
    let todoTitle;

    if(parentElement && parentElement.querySelector("h3")){
        todoTitle = parentElement.querySelector("h3").innerText;
    }

    if(targetElement.classList.contains("concluido")){
        parentElement.classList.toggle('done');
    } 

    if(targetElement.classList.contains("edit")){
        toogleForm();

        editInput.value = todoTitle;
        oldTitle = todoTitle;
    }
    
    if(targetElement.classList.contains("remove")){
        parentElement.remove();
    } 
});

cancelEdit.addEventListener("click", (e) =>{
    e.preventDefault();
    toogleForm();
});

edit.addEventListener("submit", (e) =>{
    e.preventDefault();

    const editInput = edit.value;

    if(editInput){
        //atualizar item
        updateTodo(editInput);
    }

    toogleForm();
})