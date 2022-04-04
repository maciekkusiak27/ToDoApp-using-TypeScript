import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.hleper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
import { TaskClass } from "./classes/task.js";
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('button');
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector('.categories');
let selectedCategory;
const categories = [Category.GEENERAL, Category.WORK, Category.GYM, Category.HOBBY, Category.SOCIAL];
const tasks = [
    new Task('wyrzucić śmieci', false, Category.WORK),
    new Task('iść na siłownię', false, Category.GYM),
    new Task('poczytać wiedźmina', true, Category.HOBBY),
    /* {
     title: 'wyrzucenie śmieci',
     done: false
 },  {
     title: 'pójście na siłkę',
     done: false,
     category: Category.GYM
 }, {
     title: 'czytanie wiedźmina',
     done: true,
     category: Category.HOBBY
 }*/
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    addTask(new Task(taskNameInputElement.value, false, selectedCategory)
    /*
    {
    title: taskNameInputElement.value, done: false, category: selectedCategory}
    */
    );
    renderTasks(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
/*
type TaskType = {
    name:string;
    done:boolean;
    category?: Category;
}
interface TaskInterface {
    name:string;
    done:boolean;
    category?: Category;
}
*/
const taskClassInstance = new TaskClass('zadanie z constructor', false);
console.log(taskClassInstance);
taskClassInstance.LogCreationDate('!');
