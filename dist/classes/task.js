import { Category } from "../types/types.js";
export class TaskClass {
    constructor(name, done, category = Category.GEENERAL) {
        console.log('constructor');
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    LogCreationDate(extra) {
        console.log(`task został stworzony ${this.createdAt} ${extra || ''}`);
    }
}
