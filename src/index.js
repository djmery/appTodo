import './styles.css';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList } from './classes'; // busca el index.js por defecto
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(element => {
    crearTodoHtml(element);
});

console.log(todoList.todos);
todoList.todos[0].imprimirClase();
// const tarea = new Todo('Aprender JavaScript!!');
// todoList.nuevoTodo(tarea);
// console.log(todoList);
// crearTodoHtml(tarea);




// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');
// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);

