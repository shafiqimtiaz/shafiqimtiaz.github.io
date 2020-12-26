//Define UI element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

//Define event listeners
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded', getTasks);

//Define functions

//ADD TASK
function addTask(e) {
	if (taskInput.value === '') {
		alert('Add a task!');
	} else {

		//Create li element

		let li = document.createElement('li');
		li.appendChild(document.createTextNode(taskInput.value + " "));
		let link = document.createElement('a');
		link.setAttribute('href', '#');
		link.innerHTML = 'X';
		li.appendChild(link);
		taskList.appendChild(li);

		storeTaskInLocalStorage(taskInput.value); // LOCAL STORAGE - ADD TASK

		taskInput.value = '';

	}
	e.preventDefault(); // use this to prevent default functionality for input type='submit'
}

//REMOVE TASK
function removeTask(e) {
	if (e.target.hasAttribute('href')) {
		if (confirm('Are you sure?')) {
			let ele = e.target.parentElement;
			ele.remove();

			removeFromLS(ele); // LOCAL STORAGE - REMOVE TASK
		}
	}
}

//CLEAR TASK
function clearTask() {
	//taskList.innerHTML = '';

	//Another way
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}

	localStorage.clear(); // LOCAL STORAGE - CLEAR TASK
}

//FILTER TASK
function filterTask(e) {
	let text = e.target.value.toLowerCase();
	document.querySelectorAll('li').forEach(task => {
		let item = task.firstChild.textContent;
		if (item.toLowerCase().indexOf(text) != -1) {
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}
	})
}

//STORE IN LOCAL STORAGE
function storeTaskInLocalStorage(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// GET FROM LOCAL STORAGE
function getTasks() {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(task => {
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(task + " "));
		let link = document.createElement('a');
		link.setAttribute('href', '#');
		link.innerHTML = 'X';
		li.appendChild(link);
		taskList.appendChild(li);
	});
}

// REMOVE FROM LOCAL STORAGE
function removeFromLS(taskItem) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	let li = taskItem;
	li.removeChild(li.lastChild);

	tasks.forEach((task, index) => {
		if (li.textContent.trim() === task) {
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem('tasks', JSON.stringify(tasks));
}