import { completeTask, deleteTask, editTask } from './taskmanager.js';

import trashIcon from './icons/trash.svg';
import moreIcon from './icons/more.svg';
import { myTasks } from './taskmanager.js';


export const contentSection = document.getElementById("content");



/*Add new task*/ 
/*task name, due date, category, priority) */



export function updateContent(newTask) {
   
    const taskCard = document.createElement("button");
    taskCard.classList.add('task-card');
    taskCard.dataset.id = newTask.id
  
    
    const circle = document.createElement("div");

    circle.classList.add('circle');
    completeTask(circle, taskCard)

    const taskName = document.createElement("h4");
    const dueDate = document.createElement("p");
    const taskCategory = document.createElement("p");
    const taskPriority = document.createElement("p");
    const utilityDiv = document.createElement("div");

    const trash = document.createElement("button");
    trash.classList.add('task-icon');
    deleteTask(trash, taskCard)

    const more = document.createElement("button");
    more.classList.add('task-icon');
    editTask(more, taskCard)

    taskName.textContent = newTask.name;
    dueDate.textContent = newTask.date;
    taskCategory.textContent = newTask.category;
    taskPriority.textContent = newTask.priority;
    trash.innerHTML = `<img src="${trashIcon}">`;
    more.innerHTML = `<img src="${moreIcon}">`;

    contentSection.appendChild(taskCard);
    taskCard.appendChild(circle)
    taskCard.appendChild(taskName)
    taskCard.appendChild(dueDate)
    taskCard.appendChild(taskCategory)
    taskCard.appendChild(taskPriority)
    taskCard.appendChild(utilityDiv)
    utilityDiv.appendChild(trash)
    utilityDiv.appendChild(more)

    console.log('Category VALUE:', newTask.category)
    
    updateCardColor(taskCard, newTask.category)

}
/*ask babe to explain this -- why does taskCard work if referencing selectTaskCard?*/
export function updateCard(taskCard, updatedName, updatedDate, updatedCategory, updatedPriority) {
    
    let updatedTaskName = taskCard.querySelector('h4')
    let taskElements = taskCard.querySelectorAll('p')

    updatedTaskName.textContent = updatedName;
    taskElements[0].textContent = updatedDate;
    taskElements[1].textContent = updatedCategory;
    taskElements[2].textContent = updatedPriority;
    updateCardColor(taskCard, updatedCategory)

    
}

/*update taskcard bg color*/
function updateCardColor(taskCard, category) {
    if (category === "Personal") {
        taskCard.style.backgroundColor = "rgb(238, 226, 245)";
    } else if (category === "Health") {
        taskCard.style.backgroundColor = "rgb(219, 242, 219)"
    } else if (category=== "Work") {
        taskCard.style.backgroundColor = " rgb(195, 195, 235)"
    } else if (category === "School")
        taskCard.style.backgroundColor = " rgb(244, 186, 196)"
}



