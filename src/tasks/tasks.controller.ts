import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  findAll(): string[] {
    return ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'];
  }
}