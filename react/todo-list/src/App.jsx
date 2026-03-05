import { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [todo, setTodo] = useState('');

  const [todos, setTodos] = useState(() => {
    let initValue = [];
    try {
      let todosStr = localStorage.getItem('todos');
      if (todosStr) {
        initValue = JSON.parse(todosStr);
      }
    } catch (error) {
      console.error(error);
    }

    return initValue || [];
  });

  const [showFinished, setShowFinished] = useState(true);

  // Save todo when todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handelEdit = (e, id) => {
    let editTodo = todos.find((item) => {
      return item.id == id;
    });

    if (editTodo) {
      setTodo(editTodo.todo);

      setTodos(
        todos.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };

  const handelDelete = (e, id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const handelAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo('');
  };

  const handelChange = (e) => {
    setTodo(e.target.value);
  };

  const handelCheckBox = (e) => {
    let id = e.target.name;

    let newTodos = todos.map((item) => {
      return item.id === id
        ? { ...item, isCompleted: !item.isCompleted }
        : item;
    });

    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />

      <div className='md:container bg-violet-100  md:mx-auto my-5 rounded-xl p-5 mx-3 min-h-[80vh] md:w-2/3 shadow-xl'>
        <h1 className='font-bold text-center text-3xl'>iTask</h1>
        <div className='text-center font-medium italic'>
          Manager your todos in one place
        </div>
        <div className='addTodo flex flex-col gap-4 my-4'>
          <h2 className='text-2xl font-bold'>Add a Todo</h2>
          <div className='flex'>
            <input
              type='text'
              className='w-full bg-violet-200 p-2 outline-0 border-b-2 border-violet-800  rounded-lg'
              placeholder='e.g. Buy Grocessary'
              onChange={handelChange}
              value={todo}
            />
            <button
              className='bg-violet-800 p-6 mx-2 py-1 text-white cursor-pointer hover:bg-violet-950 text-sm font-bold disabled:bg-violet-400 disabled:cursor-not-allowed rounded-xl'
              onClick={handelAdd}
              disabled={todo.length < 3}
            >
              Save
            </button>
          </div>
        </div>
        <input
          id='show'
          className='my-4'
          type='checkbox'
          checked={showFinished}
          onChange={toggleFinished}
        />
        <label className='mx-2' htmlFor='show'>
          {' '}
          Show Completed
        </label>

        <div className='h-px bg-black opacity-30 mx-auto my-2'></div>

        <h2 className='text-2xl font-bold mt-4'>Your Todos</h2>
        <div className='todos'>
          {todos.length == 0 && (
            <div className='m-5'> No Todos to display </div>
          )}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div key={item.id} className='todo flex justify-between my-3'>
                  <div className='flex gap-5'>
                    <input
                      type='checkbox'
                      name={item.id}
                      id={item.id}
                      checked={item.isCompleted}
                      onChange={handelCheckBox}
                    />
                    <div className={item.isCompleted ? 'line-through' : ''}>
                      <label htmlFor={item.id}>{item.todo}</label>
                    </div>
                  </div>

                  <div className='butttons flex h-full'>
                    <button
                      className='bg-violet-800 text-white cursor-pointer hover:bg-violet-950 p-3 py-1 rounded-md mx-1 text-sm font-bold'
                      onClick={(e) => {
                        handelEdit(e, item.id);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className='bg-violet-800 text-white cursor-pointer hover:bg-violet-950 p-2 px-3 rounded-md mx-1 text-sm font-bold'
                      onClick={(e) => {
                        handelDelete(e, item.id);
                      }}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
