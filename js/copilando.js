// Função que adiciona tarefa

function addTask() {

    // pegar titulo da tarefa

    const taskTitle = document.querySelector("#tasks-title").value;

    if (taskTitle) {

        // clona o template

        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adicionar title

        newTask.querySelector(".tasks-title").textContent = taskTitle;

        // remover as classes desnecéssarias

        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adicinar tarefa na lista

        const list = document.querySelector("#tasks-list");

        list.appendChild(newTask);

        // adicionar evento de remover

        const removebtn = newTask.querySelector(".tasks-remove").addEventListener("click", function() {
            removeTask(this);
        });

        // adicionar evento de complatar tarefa

        const tasksbtn = newTask.querySelector(".tasks-btn").addEventListener("click", function() {
            completeBtn(this);
        });

        // limpar texto

        document.querySelector("#tasks-title").value = "";

    }

}

// função de remover tarefa

function removeTask(task) {

    task.parentNode.remove(true);
}

// função de completar tarefa

function completeBtn(task) {

    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");

}

// Evento de adicionar tarefa

const addbtn = document.querySelector("#add-btn");

addbtn.addEventListener("click", function(e) {

    e.preventDefault();

    addTask();

});