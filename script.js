// creating the elements

let title = document.createElement('h1');
title.innerText = 'My to do list';
document.body.append(title);

let div = document.createElement('div');
div.className = 'alert';

div.innerHTML = "<p>To do list</p> <input type='text' id='input' placeholder='Enter Your task...' /> <button id='add'>Add</button>"
document.body.append(div);

// Adding functionality
let tasks = [];

const addBtn = document.querySelector('#add');
const input = document.querySelector('#input');

const taskList = document.createElement('ul');
document.body.append(taskList);

function renderTasks() {
    taskList.innerHTML ='';
    for(let i = 0; i < tasks.length; i++){

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `${tasks[i]}`;
        taskList.append(taskItem);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.addEventListener('click', () => {
            tasks.splice(i, 1);
            renderTasks();

        });

        taskItem.append(deleteBtn);

        const markDoneBtn = document.createElement('button');
        markDoneBtn.innerHTML = 'Mark as Done';
        markDoneBtn.addEventListener('click', () => {
            taskItem.classList.toggle('done');
        })
        taskItem.append(markDoneBtn);


    }
}

addBtn.addEventListener('click', () => {
    const task = input.value;
    tasks.push(task);
    input.value = '';
    renderTasks();

});
