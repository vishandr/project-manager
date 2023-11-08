import { useRef } from 'react';
import Input from './Input';

const NewProject = ({ onCancel, onSave }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSubmit() {
    const data = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value
    }
    onSave(data);
  }

  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button
            onClick={onCancel}
            className='text-stone-800 hover:text-stone-950'
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSubmit}
            className='bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md'
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type='text' ref={title} label='Title' />
        <Input ref={description} label='Description' textarea />
        <Input type='date' ref={dueDate} label='Due Date' />
      </div>
    </div>
  );
};

export default NewProject;
