import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    {id: 1, description: 'Tarafea 1', completed: false},
    {id: 2, description: 'Tarafea 2', completed: false},
    {id: 3, description: 'Tarafea 3', completed: true},
    {id: 4, description: 'Tarafea 4', completed: false},
    {id: 5, description: 'Tarafea 5', completed: false},
    {id: 6, description: 'Tarafea 6', completed: false},
    {id: 7, description: 'Tarafea 7', completed: false},
    {id: 8, description: 'Tarafea 8', completed: false},
    {id: 9, description: 'Tarafea 9', completed: false},
    {id: 10, description: 'Tarafea 10', completed: false},
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find(value => value.id == id);
    return task;
  }

  create(task:Task){
    let lastId = 0;
    if(this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }

    task.id = lastId + 1;
    this.tasks.push(task);

    return task;

  }

  updated(task:Task){
    const taskArray = this.getById(task.id);
    if(taskArray) {
      taskArray.description = task.description;
      taskArray.completed = task.completed;
    }

    return taskArray;
  }

  delete(id: number){
    const index = this.tasks.findIndex(value => value.id == id);
    this.tasks.splice(index, 1);
  }
}
