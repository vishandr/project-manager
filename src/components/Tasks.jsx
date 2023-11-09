import { useRef } from 'react';

export default function Tasks({ onAddTask, taskList }) {
  const inputRef = useRef();
console.log(taskList);
  function addTask() {
    const taskText = inputRef.current.value;
    onAddTask({ task: taskText, id: Math.random() });
    inputRef.current.value = '';
  }

  let content = (
    <p className='text-stone-800 my-4'>
      Your project does not have any tasks yet
    </p>
  );
  if (taskList.length > 0) {
    content = (
      <ul className='p-4 mt-4 rounded-md bg-stone-100'>
        {taskList.map((task, index) => (
          <li key={index} className='flex justify-between my-4'>
            <span>{task.task}</span>
            <button className='text-stone-700 hover:text-red-600'>clear</button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section>
      <h2 className='font-bold text-2xl text-stone-700 mb-4'>Tasks</h2>
      <div className='flex gap-4 items-center my-4'>
        <input
          ref={inputRef}
          type='text'
          placeholder='input your task here'
          className='w-64 px-2 py-1 rounded-sm bg-stone-200'
        />
        <button
          className='text-stone-700 hover:text-stone-950'
          onClick={addTask}
        >
          Add task
        </button>
      </div>
      {content}
    </section>
  );
}
