import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';
import { Todo } from './model'
import { DragDropContext} from "react-beautiful-dnd";



const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([]);

  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo)
    setTodos([...todos, {id:Date.now(),todo:todo, isDone:false}]);
    setTodo("");
  };

  console.log(todos)

  return (

    <DragDropContext>
      <div className="App">
          <span className='heading'>todo(this) ;)</span>
            <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
            <TodoList todos={todos} setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />  
      </div>
    </DragDropContext>

    
  );
}

export default App;
