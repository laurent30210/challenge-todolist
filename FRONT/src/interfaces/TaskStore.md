import { Task } from './Task';

 class TaskStore {

    public tasks : Task[];

    addTask (content: string): void {
        this.tasks = [{
            id: 1,
            content: content,
            completed: false,
        }];
    };

    removeTask (task): void {
        this.tasks = this.tasks.filter((taskElement) => taskElement.id !== task.id);
    };

    completedTask (task: Task, completed = true): void {
        this.tasks = this.tasks.map((taskElement) => taskElement ===  task ? { ...task, completed } : taskElement);
    };

    editTask (task, title): void {
        this.tasks = this.tasks.map((taskElement) => taskElement ===  task ? { ...task, title } : taskElement);
    };
};
