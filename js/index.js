/*
mssion:
[1] Focus On Input Field --
[2] Loading --
[3] Create task --
[4] Retrive or display data --
[5] Delete task --
[6] Update the Task --
[7] clear Form or clear Inputs --
[8] checked if the task was did --
*/

var taskInput = document.getElementById("task");
var searchInput = document.getElementById("search");
var addButton = document.getElementById("btnAddTask");
var updateButton = document.getElementById("btnUpdateTask");
var taskList = [];
var index;

// Focus On Input Field
window.onload = function () {
    taskInput.focus();
};

// loading
if (localStorage.getItem("tasksContainer") !== null) {
    taskList = JSON.parse(localStorage.getItem("tasksContainer"));
    displayTasks();
}

// C ==> Create
function addTask() {
    if(taskInput.value !== ''){
        taskList.push(taskInput.value);
        //localstorage
        localStorage.setItem("tasksContainer", JSON.stringify(taskList));
        displayTasks();
        clearForm();
    }
}

//R ==> Retrive 
function displayTasks() {   
    var cartona = "";
    // var btnCheckId = 'btn-check' + i;

    for (var i = 0; i < taskList.length; i++) {
        cartona += `
        <div class="row my-1 rows rounded-2">
        <div class="col-9 py-1">
            <div>
                <p id="p"> ${taskList[i]} </p>
            </div>
        </div>
        <div class="col-3 py-1">
            <div class="btns d-flex justify-content-between align-content-center pt-2">
                <button onclick="setFormData(${i})" id="btnUpdate" class="btn update-btn">
                    <i class="fa-solid fa-pencil"></i>
                </button>
                <button onclick="deleteTask(${i})" id="btnDelete" class="btn btn-danger">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <button onclick="checked(${i})" class=" btns-check btn btn-outline-success">
                    <i class="fa-solid fa-check"></i>
                </button>
            </div>
        </div>
        </div>
        `;
    };
    document.getElementById('demo').innerHTML = cartona;
}

// U ==> Update
function setFormData(indexElement) {
    taskInput.value = taskList[indexElement];
    addButton.classList.add('d-none');
    updateButton.classList.remove('d-none');
    index = indexElement;
}
function updateTask() {
    taskList.splice(index, 1, taskInput.value);
    //localstorage
    localStorage.setItem("tasksContainer", JSON.stringify(taskList));
    displayTasks();
    clearForm();

    addButton.classList.remove('d-none');
    updateButton.classList.add('d-none');
}

//D ==> Delete
function deleteTask(taskIndex) {
    taskList.splice(taskIndex, 1);
    //localstorage
    localStorage.setItem("tasksContainer", JSON.stringify(taskList));
    displayTasks();
}

function clearForm() {
    taskInput.value = null;
}

function checked(btnId) {
    // console.log(btnId);
    var button = document.getElementsByClassName('btns-check');
    button[btnId].classList.add('btn-success');
    button[btnId].classList.remove('btn-outline-success');
}

