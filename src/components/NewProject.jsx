import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

const NewProject = ({ onCancel, onSave }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();


  function handleSubmit() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      //show the error modal
      modal.current.open();
      return;
    }

    const enteredData = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };

    onSave(enteredData);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption='OK'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>invalid input</h2>
        <p className='text-stone-600 mb-4'>Ooops... Looks like you forgot to enter a value</p>
        <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field</p>
      </Modal>
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
          <Input ref={title} type='text' label='Title' />
          <Input ref={description} label='Description' textarea />
          <Input ref={dueDate} type='date' label='Due Date' />
        </div>
      </div>
    </>
  );
};

export default NewProject;
