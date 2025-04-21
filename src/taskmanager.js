import { updateContent, updateCard, contentSection } from './content.js';


const addBtn = document.getElementById("add-btn");
const dialogBox = document.getElementById("dialog");
const saveBtn = document.getElementById("submit")
const personalBtn = document.getElementById("personal-btn");
const healthBtn = document.getElementById("health-btn");
const workBtn = document.getElementById("work-btn");
const schoolBtn = document.getElementById("school-btn");
const sectionTitle = document.querySelector(".section-title");

export let isEditing = false;


export let selectedTask;
let selectedTaskCard;


addBtn.addEventListener("click", () => {
document.getElementById("form-h4").textContent = "Add a task"
 dialogBox.showModal()
})

export let myTasks = [];

class Task {
    constructor(name, date, category, priority) {
        this.id = performance.now()
        this.name = name;
        this.date = date;
        this.category = category;
        this.priority = priority;
    }
}

export function grabValues() {
    if (isEditing === false) {
    let name = document.getElementById("task-name").value;
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let priority = document.getElementById("priority").value; 
    const newTask = new Task(name, date, category, priority)

    updateContent(newTask);
    myTasks.push(newTask)
    console.log(myTasks)
    }
}

export function saveEditedValues() {
    let updatedName = document.getElementById("task-name").value
    let updatedDate = document.getElementById("date").value
    let updatedCategory = document.getElementById("category").value;
    let updatedPriority = document.getElementById("priority").value;

    selectedTask.name = updatedName;
    selectedTask.date = updatedDate;
    selectedTask.category = updatedCategory;
    selectedTask.priority = updatedPriority
    isEditing = false;

    /*have her expain this too*/ 
    updateCard(selectedTaskCard, updatedName, updatedDate, updatedCategory, updatedPriority);
 
}



/* complete task */

export function completeTask(circle, taskCard) {
circle.addEventListener("click", () => {
    circle.classList.toggle("checked");
    taskCard.classList.toggle("done");
});
}

/* delete task */
export function deleteTask(trash, taskCard) {
    trash.addEventListener("click", () => {
        const cardId = Number(taskCard.dataset.id);
        myTasks = myTasks.filter(task => task.id !== cardId);
        taskCard.classList.toggle("erased")
        console.log(myTasks)
    })
};


/* edit task */
export function editTask(more, taskCard) {
    more.addEventListener("click", () => {
        isEditing = true;
        document.getElementById("form-h4").textContent = "Edit task"
        selectedTaskCard = taskCard
        const selectedCardId = Number(taskCard.dataset.id);
        selectedTask = myTasks.find(t => t.id === selectedCardId);
     
     //set values
     document.getElementById("form-h4").textContent = "Edit task"
     document.getElementById("task-name").value = selectedTask.name;
     document.getElementById("date").value = selectedTask.date;
     console.log(selectedTask.date)
     document.getElementById("category").value = selectedTask.category;
     document.getElementById("priority").value = selectedTask.priority;

        dialogBox.showModal()
   
    })  

 
    
};

    
    
saveBtn.addEventListener("click", (e) => {
    e.preventDefault(); 

    if (isEditing === true) {
       saveEditedValues();
       isEditing = false;
       console.log(isEditing)
    } else {
        grabValues();
    }
    dialogBox.close();
});

function filterUpdate(categoryName) {

    const categoryArray = myTasks.filter(t => t.category === categoryName)
    contentSection.innerHTML = ""
    sectionTitle.textContent = `Category: ${categoryName}`
    categoryArray.forEach(task => {
        updateContent(task);
})
}



function filterTasks() {
    personalBtn.addEventListener("click", () => filterUpdate("Personal"));
    healthBtn.addEventListener("click", () => filterUpdate("Health"));
    workBtn.addEventListener("click", () => filterUpdate("Work"));
    schoolBtn.addEventListener("click", () => filterUpdate("School"));
   
}


filterTasks()