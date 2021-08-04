import { Todo } from "./interfaces/todo";
//imagina que esto viene del backend
export const Todos: Todo[] = [
  {
    titulo: 'Primera tarea',
    descripcion: 'Esta es la primera tarea de prueba',
    autor: 'Armando P. Tamayo',
    creado: new Date(),
    hasta: new Date('2021-08-31')
  },
  {
    titulo: 'Segunda tarea',
    descripcion: 'Esta es la segunda tarea de prueba',
    autor: 'Armando P. Tamayo',
    creado: new Date(),
    hasta: new Date('2021-08-31')
  },
  {
    titulo: 'Tercera tarea',
    descripcion: 'Esta es la tercera tarea de prueba',
    autor: 'Armando P. Tamayo',
    creado: new Date(),
    hasta: new Date('2021-08-31')
  },
];
